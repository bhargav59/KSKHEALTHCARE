# Cloudflare Workers Setup Guide

## 🎯 Overview
This guide will help you set up the Cloudflare Workers backend for KSK Healthcare, replacing Firebase with a completely free solution.

## 📋 Prerequisites
- Cloudflare account (free tier is sufficient)
- Node.js installed
- Wrangler CLI (already installed in this project)

## 🚀 Quick Setup Steps

### 1. Login to Cloudflare
```bash
npx wrangler login
```
This will open your browser to authenticate with Cloudflare.

### 2. Create KV Namespaces
Run these commands to create storage for your data:

```bash
# Create KV namespace for appointments
npx wrangler kv namespace create "APPOINTMENTS"

# Create KV namespace for users
npx wrangler kv namespace create "USERS"

# Create KV namespace for testimonials
npx wrangler kv namespace create "TESTIMONIALS"
```

Each command will output a namespace ID like:
```
{ binding = "APPOINTMENTS", id = "abc123..." }
```

### 3. Update wrangler.toml
Copy the namespace IDs from step 2 and update `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "APPOINTMENTS"
id = "your-actual-kv-id-1"  # Replace with actual ID

[[kv_namespaces]]
binding = "USERS"
id = "your-actual-kv-id-2"  # Replace with actual ID

[[kv_namespaces]]
binding = "TESTIMONIALS"
id = "your-actual-kv-id-3"  # Replace with actual ID
```

### 4. Set Environment Variables
Update the JWT_SECRET in `wrangler.toml`:

```toml
[vars]
JWT_SECRET = "your-random-secret-key-change-this-to-something-secure"
ADMIN_EMAIL = "admin@kskhealthcare.in"
```

**IMPORTANT:** Generate a strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 5. Create Admin Account
After deployment, you'll need to manually create the first admin user. Run this script:

```bash
# Using wrangler CLI to add admin user to KV
npx wrangler kv:key put --binding=USERS "user:admin@kskhealthcare.in" '{"id":"admin-001","email":"admin@kskhealthcare.in","name":"Admin","role":"admin","password":"YOUR_HASHED_PASSWORD","createdAt":"2025-01-24T00:00:00Z"}'
```

Or use the Workers dashboard to manually add the admin user.

### 6. Deploy to Cloudflare Workers
```bash
npx wrangler deploy
```

This will deploy your API and give you a URL like:
```
https://kskhealthcare-api.your-subdomain.workers.dev
```

### 7. Update Frontend Configuration
Create `.env` file in your project root:

```env
VITE_API_URL=https://kskhealthcare-api.your-subdomain.workers.dev
```

### 8. Test Your API
Test authentication endpoint:
```bash
curl -X POST https://your-worker-url/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@kskhealthcare.in","password":"your-password"}'
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires JWT token)

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments?userId={id}` - Get user's appointments
- `GET /api/appointments` - Get all appointments (admin only)
- `PUT /api/appointments/{id}` - Update appointment (admin only)
- `DELETE /api/appointments/{id}` - Delete appointment (admin only)

### Testimonials
- `POST /api/testimonials` - Submit testimonial
- `GET /api/testimonials` - Get approved testimonials (or all for admin)

## 🔐 Authentication Flow

1. User signs up or logs in → Receives JWT token
2. Frontend stores token in localStorage
3. Include token in subsequent requests:
   ```javascript
   headers: {
     'Authorization': `Bearer ${token}`
   }
   ```

## 💰 Free Tier Limits

Cloudflare Workers Free Tier includes:
- ✅ 100,000 requests per day
- ✅ 1 GB KV storage
- ✅ 1,000 KV writes per day
- ✅ Unlimited KV reads
- ✅ 10ms CPU time per request
- ✅ No credit card required

This is **more than sufficient** for a healthcare website!

## 🛠️ Development

### Local Testing
```bash
npx wrangler dev
```

This starts a local server at `http://localhost:8787`

### View Logs
```bash
npx wrangler tail
```

### Manage KV Data
```bash
# List all keys in a namespace
npx wrangler kv:key list --binding=APPOINTMENTS

# Get a specific key
npx wrangler kv:key get --binding=USERS "user:email@example.com"

# Delete a key
npx wrangler kv:key delete --binding=APPOINTMENTS "appointment:123"
```

## 📊 Monitoring

View your Workers analytics in the Cloudflare dashboard:
1. Go to https://dash.cloudflare.com
2. Navigate to Workers & Pages
3. Click on your worker
4. View metrics, logs, and errors

## 🔄 Database Migration (Optional)

For complex queries, you can upgrade to D1 (still free):

```bash
# Create D1 database
npx wrangler d1 create kskhealthcare-db

# Add to wrangler.toml
[[d1_databases]]
binding = "DB"
database_name = "kskhealthcare-db"
database_id = "your-database-id"
```

## 🚨 Troubleshooting

### Issue: "Unauthorized" errors
- Check JWT_SECRET matches between frontend and Workers
- Verify token is being sent in Authorization header
- Token might be expired (7 days validity)

### Issue: CORS errors
- Workers automatically handle CORS
- Check that API_URL in frontend matches deployed Worker URL

### Issue: KV data not persisting
- Verify KV namespace IDs in wrangler.toml
- Check binding names match code (APPOINTMENTS, USERS, TESTIMONIALS)

### Issue: Deployment fails
- Run `npx wrangler login` again
- Check wrangler.toml syntax
- Ensure all KV namespaces are created

## 📝 Next Steps

1. Deploy the Workers API
2. Update frontend to use Workers API (replace Firebase calls)
3. Test authentication flow
4. Test appointment booking
5. Test admin dashboard
6. Set up custom domain (optional)

## 🔗 Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [KV Storage Docs](https://developers.cloudflare.com/kv/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [D1 Database Docs](https://developers.cloudflare.com/d1/)

## 💡 Pro Tips

1. **Use D1 for relational data**: If you need complex queries, upgrade to D1 (still free)
2. **Enable caching**: Use Workers Cache API for frequently accessed data
3. **Monitor usage**: Check dashboard regularly to ensure you're within free tier limits
4. **Backup data**: Export KV data periodically using Wrangler CLI
5. **Use secrets for sensitive data**: Store JWT_SECRET as a secret, not in vars

---

**Need Help?** Check the Cloudflare Workers documentation or open an issue in the GitHub repository.
