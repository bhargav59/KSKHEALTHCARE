# Password Reset and Profile Update Endpoints for Workers

## Instructions
Add the following functions to `workers/worker.js` to complete Firebase authentication.

## 1. Add route handlers in the main fetch function (around line 35-50)

Find this section in worker.js:
```javascript
if (path === '/api/testimonials' && request.method === 'GET') {
  return handleGetTestimonials(request, env);
}

// Default response
return jsonResponse({ error: 'Not found' }, 404);
```

Replace it with:
```javascript
if (path === '/api/testimonials' && request.method === 'GET') {
  return handleGetTestimonials(request, env);
}

if (path === '/api/auth/password-reset' && request.method === 'POST') {
  return handlePasswordReset(request, env);
}

if (path === '/api/user/profile' && request.method === 'PUT') {
  return handleUpdateProfile(request, env);
}

if (path === '/api/user/profile' && request.method === 'GET') {
  return handleGetProfile(request, env);
}

// Default response
return jsonResponse({ error: 'Not found' }, 404);
```

## 2. Add these functions at the end of worker.js (before the last closing brace)

### Password Reset Endpoint
```javascript
// Auth: Password Reset
async function handlePasswordReset(request, env) {
  const { email } = await request.json();
  
  if (!email) {
    return jsonResponse({ error: 'Email is required' }, 400);
  }
  
  try {
    // Get Firebase REST API key from env
    const apiKey = env.FIREBASE_WEB_API_KEY;
    
    // Send password reset email via Firebase
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestType: 'PASSWORD_RESET',
          email: email
        })
      }
    );
    
    if (!response.ok) {
      const error = await response.json();
      return jsonResponse({ 
        error: error.error?.message || 'Failed to send password reset email' 
      }, 400);
    }
    
    return jsonResponse({ 
      success: true, 
      message: 'Password reset email sent. Check your inbox.' 
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// Auth: Update User Profile
async function handleUpdateProfile(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }
  
  try {
    const token = authHeader.replace('Bearer ', '');
    const decoded = await verifyJWT(token, env.JWT_SECRET);
    
    if (!decoded) {
      return jsonResponse({ error: 'Invalid token' }, 401);
    }
    
    const updates = await request.json();
    
    // Validate allowed fields
    const allowedFields = ['displayName', 'phone', 'profile', 'bio'];
    const updateData = {};
    
    for (const field of allowedFields) {
      if (field in updates) {
        updateData[field] = updates[field];
      }
    }
    
    // Get current user
    const userData = await env.USERS.get(`user:${decoded.email}`);
    if (!userData) {
      return jsonResponse({ error: 'User not found' }, 404);
    }
    
    const user = JSON.parse(userData);
    
    // Merge updates
    const updated = {
      ...user,
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    // Save updated user
    await env.USERS.put(`user:${decoded.email}`, JSON.stringify(updated));
    
    // Return updated user (without password)
    delete updated.password;
    
    return jsonResponse({
      success: true,
      user: updated
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// Auth: Get User Profile
async function handleGetProfile(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }
  
  try {
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
    
    return jsonResponse({
      success: true,
      user
    });
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}
```

## 3. Update .env file with Firebase Web API Key

Add to `.env`:
```
VITE_FIREBASE_WEB_API_KEY=your_actual_firebase_web_api_key
```

## 4. Update wrangler.toml secrets

Run these commands locally:
```bash
wrangler secret put FIREBASE_WEB_API_KEY --env production
```

Then paste your Firebase Web API Key from Firebase Console → Project Settings → Web API Key.

## 5. Update AuthContext.jsx

Replace the TODO comments in `src/contexts/AuthContext.jsx`:

At line 74 (password reset), replace:
```javascript
// TODO: Implement password reset endpoint in Workers
throw new Error('Password reset not yet implemented');
```

With:
```javascript
const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/password-reset`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});

if (!response.ok) {
  const error = await response.json();
  throw new Error(error.error || 'Failed to send reset email');
}

return await response.json();
```

At line 80 (profile update), replace:
```javascript
// TODO: Implement user profile update endpoint in Workers  
throw new Error('Profile update not yet implemented');
```

With:
```javascript
const response = await fetch(`${import.meta.env.VITE_API_URL}/user/profile`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${currentUser.token}`
  },
  body: JSON.stringify(updates)
});

if (!response.ok) {
  const error = await response.json();
  throw new Error(error.error || 'Failed to update profile');
}

const result = await response.json();
if (result.user) {
  setCurrentUser(prev => ({ ...prev, ...result.user }));
}
return result;
```

## Testing

### Test Password Reset:
```bash
curl -X POST https://your-api-domain/api/auth/password-reset \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

### Test Profile Update:
```bash
curl -X PUT https://your-api-domain/api/user/profile \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"displayName": "New Name", "phone": "+919900546089"}'
```

## Deployment

1. Deploy to Cloudflare Workers:
   ```bash
   wrangler deploy --env production
   ```

2. Test endpoints against production URL

3. Update frontend .env with production API URL

## Notes

- Password reset emails are sent by Firebase, not your app
- JWT tokens are valid for 1 hour (configured in utils/jwt.js)
- All profile updates are timestamped
- User passwords are never returned in API responses
