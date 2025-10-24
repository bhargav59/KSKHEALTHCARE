// API Client for Cloudflare Workers Backend
// Replaces Firebase SDK with REST API calls

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8787';

// Get auth token from localStorage
const getToken = () => {
  return localStorage.getItem('authToken');
};

// Set auth token in localStorage
const setToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Remove auth token
const removeToken = () => {
  localStorage.removeItem('authToken');
};

// Helper function for API requests
async function apiRequest(endpoint, options = {}) {
  const token = getToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'API request failed');
  }

  return data;
}

// ==================== AUTH API ====================

export const auth = {
  // Sign up new user
  async signup(email, password, name, phone) {
    const data = await apiRequest('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, phone }),
    });
    
    if (data.token) {
      setToken(data.token);
    }
    
    return data;
  },

  // Login user
  async login(email, password) {
    const data = await apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (data.token) {
      setToken(data.token);
    }
    
    return data;
  },

  // Get current user
  async getCurrentUser() {
    try {
      const data = await apiRequest('/api/auth/me');
      return data.user;
    } catch (error) {
      removeToken();
      throw error;
    }
  },

  // Logout
  async logout() {
    removeToken();
  },

  // Check if user is logged in
  isAuthenticated() {
    return !!getToken();
  },
};

// ==================== APPOINTMENTS API ====================

export const appointments = {
  // Create new appointment
  async create(appointmentData) {
    const data = await apiRequest('/api/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
    
    return data;
  },

  // Get appointments for a user
  async getByUserId(userId) {
    const data = await apiRequest(`/api/appointments?userId=${userId}`);
    return data.data || [];
  },

  // Get all appointments (admin only)
  async getAll(status = null) {
    const url = status ? `/api/appointments?status=${status}` : '/api/appointments';
    const data = await apiRequest(url);
    return data.data || [];
  },

  // Update appointment status (admin only)
  async updateStatus(appointmentId, status, notes = '') {
    const data = await apiRequest(`/api/appointments/${appointmentId}`, {
      method: 'PUT',
      body: JSON.stringify({ status, notes }),
    });
    
    return data.appointment;
  },

  // Delete appointment (admin only)
  async delete(appointmentId) {
    await apiRequest(`/api/appointments/${appointmentId}`, {
      method: 'DELETE',
    });
  },

  // Update appointment (admin only)
  async update(appointmentId, updates) {
    const data = await apiRequest(`/api/appointments/${appointmentId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
    
    return data.appointment;
  },
};

// ==================== TESTIMONIALS API ====================

export const testimonials = {
  // Create new testimonial
  async create(testimonialData) {
    const data = await apiRequest('/api/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonialData),
    });
    
    return data;
  },

  // Get approved testimonials (or all for admin)
  async getAll() {
    const data = await apiRequest('/api/testimonials');
    return data.data || [];
  },

  // Approve testimonial (admin only)
  async approve(testimonialId) {
    const data = await apiRequest(`/api/testimonials/${testimonialId}`, {
      method: 'PUT',
      body: JSON.stringify({ approved: true }),
    });
    
    return data;
  },

  // Delete testimonial (admin only)
  async delete(testimonialId) {
    await apiRequest(`/api/testimonials/${testimonialId}`, {
      method: 'DELETE',
    });
  },
};

// ==================== STATISTICS API (for Admin Dashboard) ====================

export const stats = {
  // Get appointment statistics
  async getAppointmentStats() {
    try {
      const allAppointments = await appointments.getAll();
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const stats = {
        total: allAppointments.length,
        pending: allAppointments.filter(a => a.status === 'pending').length,
        confirmed: allAppointments.filter(a => a.status === 'confirmed').length,
        completed: allAppointments.filter(a => a.status === 'completed').length,
        cancelled: allAppointments.filter(a => a.status === 'cancelled').length,
        today: allAppointments.filter(a => {
          const aptDate = new Date(a.date);
          return aptDate >= today && aptDate < new Date(today.getTime() + 24 * 60 * 60 * 1000);
        }).length,
      };
      
      return stats;
    } catch (error) {
      console.error('Error fetching appointment stats:', error);
      return {
        total: 0,
        pending: 0,
        confirmed: 0,
        completed: 0,
        cancelled: 0,
        today: 0,
      };
    }
  },
};

// Export API client
const apiClient = {
  auth,
  appointments,
  testimonials,
  stats,
};

export default apiClient;
