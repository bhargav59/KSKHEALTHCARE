// Cloudflare Workers API for KSK Healthcare
// Handles authentication, appointments, and data management

import { hash, verify } from './utils/crypto';
import { generateJWT, verifyJWT } from './utils/jwt';

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle CORS preflight
function handleOptions() {
  return new Response(null, {
    headers: corsHeaders
  });
}

// Main request handler
export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleOptions();
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // Route handling
      if (path === '/api/auth/signup' && request.method === 'POST') {
        return handleSignup(request, env);
      }
      
      if (path === '/api/auth/login' && request.method === 'POST') {
        return handleLogin(request, env);
      }
      
      if (path === '/api/auth/me' && request.method === 'GET') {
        return handleGetUser(request, env);
      }
      
      if (path === '/api/appointments' && request.method === 'POST') {
        return handleCreateAppointment(request, env);
      }
      
      if (path === '/api/appointments' && request.method === 'GET') {
        return handleGetAppointments(request, env);
      }
      
      if (path.startsWith('/api/appointments/') && request.method === 'PUT') {
        return handleUpdateAppointment(request, env);
      }
      
      if (path.startsWith('/api/appointments/') && request.method === 'DELETE') {
        return handleDeleteAppointment(request, env);
      }
      
      if (path === '/api/testimonials' && request.method === 'POST') {
        return handleCreateTestimonial(request, env);
      }
      
      if (path === '/api/testimonials' && request.method === 'GET') {
        return handleGetTestimonials(request, env);
      }

      // Default response
      return jsonResponse({ error: 'Not found' }, 404);
    } catch (error) {
      return jsonResponse({ error: error.message }, 500);
    }
  }
};

// Helper function for JSON responses
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders
    }
  });
}

// Auth: Signup
async function handleSignup(request, env) {
  const { email, password, name, phone } = await request.json();
  
  // Validate input
  if (!email || !password || !name) {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }
  
  // Check if user exists
  const existingUser = await env.USERS.get(`user:${email}`);
  if (existingUser) {
    return jsonResponse({ error: 'User already exists' }, 400);
  }
  
  // Hash password (simple hash for demo, use bcrypt in production)
  const hashedPassword = await hashPassword(password);
  
  // Create user
  const userId = crypto.randomUUID();
  const user = {
    id: userId,
    email,
    name,
    phone: phone || '',
    role: 'patient',
    createdAt: new Date().toISOString()
  };
  
  // Store user
  await env.USERS.put(`user:${email}`, JSON.stringify({ ...user, password: hashedPassword }));
  await env.USERS.put(`userId:${userId}`, email);
  
  // Generate JWT
  const token = await generateJWT({ userId, email, role: user.role }, env.JWT_SECRET);
  
  return jsonResponse({
    success: true,
    user: { id: userId, email, name, role: user.role },
    token
  });
}

// Auth: Login
async function handleLogin(request, env) {
  const { email, password } = await request.json();
  
  // Get user
  const userData = await env.USERS.get(`user:${email}`);
  if (!userData) {
    return jsonResponse({ error: 'Invalid credentials' }, 401);
  }
  
  const user = JSON.parse(userData);
  
  // Verify password
  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return jsonResponse({ error: 'Invalid credentials' }, 401);
  }
  
  // Generate JWT
  const token = await generateJWT({ 
    userId: user.id, 
    email: user.email, 
    role: user.role 
  }, env.JWT_SECRET);
  
  return jsonResponse({
    success: true,
    user: { 
      id: user.id, 
      email: user.email, 
      name: user.name, 
      role: user.role 
    },
    token
  });
}

// Auth: Get current user
async function handleGetUser(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }
  
  const token = authHeader.replace('Bearer ', '');
  const decoded = await verifyJWT(token, env.JWT_SECRET);
  
  if (!decoded) {
    return jsonResponse({ error: 'Invalid token' }, 401);
  }
  
  const userData = await env.USERS.get(`user:${decoded.email}`);
  if (!userData) {
    return jsonResponse({ error: 'User not found' }, 404);
  }
  
  const user = JSON.parse(userData);
  delete user.password;
  
  return jsonResponse({ success: true, user });
}

// Appointments: Create
async function handleCreateAppointment(request, env) {
  const data = await request.json();
  
  const appointmentId = crypto.randomUUID();
  const appointment = {
    id: appointmentId,
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  await env.APPOINTMENTS.put(`appointment:${appointmentId}`, JSON.stringify(appointment));
  
  // Add to user's appointments list
  if (data.userId && data.userId !== 'guest') {
    const userAppointments = await env.APPOINTMENTS.get(`user:${data.userId}:appointments`) || '[]';
    const appointments = JSON.parse(userAppointments);
    appointments.push(appointmentId);
    await env.APPOINTMENTS.put(`user:${data.userId}:appointments`, JSON.stringify(appointments));
  }
  
  return jsonResponse({ success: true, id: appointmentId, appointment });
}

// Appointments: Get all or by user
async function handleGetAppointments(request, env) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  const status = url.searchParams.get('status');
  
  // Get auth from header
  const authHeader = request.headers.get('Authorization');
  let isAdmin = false;
  
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const decoded = await verifyJWT(token, env.JWT_SECRET);
    if (decoded && decoded.role === 'admin') {
      isAdmin = true;
    }
  }
  
  let appointments = [];
  
  if (userId && !isAdmin) {
    // Get user's appointments
    const userAppointmentIds = await env.APPOINTMENTS.get(`user:${userId}:appointments`) || '[]';
    const ids = JSON.parse(userAppointmentIds);
    
    for (const id of ids) {
      const data = await env.APPOINTMENTS.get(`appointment:${id}`);
      if (data) {
        appointments.push(JSON.parse(data));
      }
    }
  } else if (isAdmin) {
    // Admin can see all appointments
    // Note: In production, use D1 database for better querying
    const list = await env.APPOINTMENTS.list({ prefix: 'appointment:' });
    
    for (const key of list.keys) {
      const data = await env.APPOINTMENTS.get(key.name);
      if (data) {
        const apt = JSON.parse(data);
        if (!status || apt.status === status) {
          appointments.push(apt);
        }
      }
    }
  } else {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }
  
  return jsonResponse({ success: true, data: appointments });
}

// Appointments: Update
async function handleUpdateAppointment(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }
  
  const token = authHeader.replace('Bearer ', '');
  const decoded = await verifyJWT(token, env.JWT_SECRET);
  
  if (!decoded || decoded.role !== 'admin') {
    return jsonResponse({ error: 'Forbidden' }, 403);
  }
  
  const url = new URL(request.url);
  const appointmentId = url.pathname.split('/').pop();
  const updates = await request.json();
  
  const existing = await env.APPOINTMENTS.get(`appointment:${appointmentId}`);
  if (!existing) {
    return jsonResponse({ error: 'Appointment not found' }, 404);
  }
  
  const appointment = JSON.parse(existing);
  const updated = {
    ...appointment,
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  await env.APPOINTMENTS.put(`appointment:${appointmentId}`, JSON.stringify(updated));
  
  return jsonResponse({ success: true, appointment: updated });
}

// Appointments: Delete
async function handleDeleteAppointment(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }
  
  const token = authHeader.replace('Bearer ', '');
  const decoded = await verifyJWT(token, env.JWT_SECRET);
  
  if (!decoded || decoded.role !== 'admin') {
    return jsonResponse({ error: 'Forbidden' }, 403);
  }
  
  const url = new URL(request.url);
  const appointmentId = url.pathname.split('/').pop();
  
  await env.APPOINTMENTS.delete(`appointment:${appointmentId}`);
  
  return jsonResponse({ success: true });
}

// Testimonials: Create
async function handleCreateTestimonial(request, env) {
  const data = await request.json();
  
  const testimonialId = crypto.randomUUID();
  const testimonial = {
    id: testimonialId,
    ...data,
    approved: false,
    createdAt: new Date().toISOString()
  };
  
  await env.TESTIMONIALS.put(`testimonial:${testimonialId}`, JSON.stringify(testimonial));
  
  return jsonResponse({ success: true, id: testimonialId });
}

// Testimonials: Get approved
async function handleGetTestimonials(request, env) {
  const list = await env.TESTIMONIALS.list({ prefix: 'testimonial:' });
  const testimonials = [];
  
  for (const key of list.keys) {
    const data = await env.TESTIMONIALS.get(key.name);
    if (data) {
      const testimonial = JSON.parse(data);
      // Only return approved testimonials for public
      const authHeader = request.headers.get('Authorization');
      let isAdmin = false;
      
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        const decoded = await verifyJWT(token, env.JWT_SECRET);
        if (decoded && decoded.role === 'admin') {
          isAdmin = true;
        }
      }
      
      if (isAdmin || testimonial.approved) {
        testimonials.push(testimonial);
      }
    }
  }
  
  return jsonResponse({ success: true, data: testimonials });
}

// Utility: Hash password
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Utility: Verify password
async function verifyPassword(password, hashedPassword) {
  const hash = await hashPassword(password);
  return hash === hashedPassword;
}
