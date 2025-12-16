# Quick Setup Guide

## Step 1: Install Dependencies

### Frontend
```bash
npm install
```

### Backend
```bash
cd server
npm install
cd ..
```

## Step 2: Start the Application

### Terminal 1 - Backend Server
```bash
cd server
npm start
```

The backend will run on `http://localhost:5000`

### Terminal 2 - Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Step 3: Access the Application

1. Open your browser and go to `http://localhost:3000`
2. You'll see the login page
3. Select a role from the dropdown:
   - **Admin** - Create new members
   - **Member** - Access member dashboard and logging
   - **Trainer** - Access trainer dashboard
   - **Diet Expert** - Access diet expert dashboard
4. Enter any email and password (authentication is simulated)

## Testing Different Roles

### As Admin:
- Login with role "Admin"
- Navigate to "Create Member" screen
- Fill in member details and create a new member
- Credentials will be shown in an alert (in production, sent via email)

### As Member:
- Login with role "Member"
- Complete onboarding (if first time)
- Access dashboard to log diet and workouts
- View progress with charts and analytics

### As Trainer:
- Login with role "Trainer"
- View all members' status
- Review workout logs and provide feedback

### As Diet Expert:
- Login with role "Diet Expert"
- View pending diet reviews
- Review diet logs and provide nutrition scores

## Notes

- All data is stored in memory (resets on server restart)
- File uploads are simulated
- Email notifications are simulated
- For production, connect to a real database and implement proper authentication

