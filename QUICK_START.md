# Quick Start Guide

## 🚀 Starting the Application

### Option 1: Manual Start (Recommended)

**Terminal 1 - Backend Server:**
```bash
cd server
npm start
```
You should see:
- `Server running on http://localhost:5000`
- `Database connected successfully`

**Terminal 2 - Frontend Application:**
```bash
npm run dev
```
You should see:
- `VITE v5.x.x  ready in xxx ms`
- `➜  Local:   http://localhost:5173/` (or similar port)

### Option 2: Using PowerShell Scripts

**Start Backend:**
```powershell
cd server; npm start
```

**Start Frontend (in new terminal):**
```powershell
npm run dev
```

## 🌐 Access the Application

1. **Frontend:** Open http://localhost:5173 (or the port shown in terminal)
2. **Backend API:** http://localhost:5000/api/health

## 🔐 Login

1. Go to the login page
2. Enter your credentials:
   - **Email:** Your registered email
   - **Password:** Your password
3. The page will show server status (online/offline)
4. After successful login, you'll be redirected based on your role:
   - **Admin** → `/app/admin/users` (User Management Dashboard)
   - **Member** → `/app/member/dashboard`
   - **Trainer** → `/app/trainer/dashboard`
   - **Diet Expert** → `/app/diet/dashboard`

## 📋 Admin Dashboard Features

When logged in as Admin, you'll see:
- **Header Navigation:** View All Users, Create Member, Add Trainer, Add Diet Expert
- **Category Tabs:** Filter by All Users, Members, Trainers, Diet Experts, Admins
- **User Cards:** Grid view with user details, status, and role badges
- **User Counts:** Dynamic counts for each category

## 🛠️ Troubleshooting

### Backend won't start
- Check if port 5000 is available
- Verify database credentials in `server/config/database.js`
- Ensure Node.js is installed (v14+)

### Frontend won't start
- Check if port 3000/5173 is available
- Run `npm install` in root directory
- Clear cache: `rm -rf node_modules/.vite`

### Database connection fails
- Verify credentials in `server/config/database.js`
- Check database server is accessible
- Ensure SSL is properly configured

### Login fails
- Check backend server is running (should show "Server is online" on login page)
- Verify user exists in database
- Check browser console for errors

## 📝 Notes

- Backend runs on: **http://localhost:5000**
- Frontend runs on: **http://localhost:5173** (or port shown)
- Database: PostgreSQL (DigitalOcean)
- Authentication: JWT tokens stored in localStorage

## ✅ Verify Everything Works

1. **Backend Health Check:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Should return: `{"success":true,"message":"Server is running","database":"connected",...}`

2. **Frontend:**
   - Open browser to frontend URL
   - Login page should show "Server is online" if backend is running
   - Try logging in with valid credentials

3. **Admin Dashboard:**
   - Login as admin
   - Should see user management dashboard
   - Try filtering by different roles
   - Try creating a new member

