# Born2Build - Fitness Tracking Application

A comprehensive fitness tracking application built with React, TypeScript, Tailwind CSS, Vite, and Node.js.

## Features

### Admin Features
- **Create Member**: Add new members with trainer and expert assignments
- Automatic credential generation and email notification (simulated)

### Member Features
- **Onboarding**: Two-step onboarding process (Basic Details + Lifestyle/Goals)
- **Dashboard**: View daily tasks, streak, and points
- **Diet Logging**: Log meals with images for breakfast, lunch, and dinner
- **Workout Logging**: Track workout completion, energy levels, and injuries
- **Progress Tracking**: View weight trends, adherence charts, energy levels, and check-in summaries
- Export progress data as PDF or CSV

### Trainer Features
- **Dashboard**: View all members with diet/workout status and flags
- Filter by Today/Week/Missing Only
- **Review Screen**: Review member workout logs and provide comments/recommendations

### Diet Expert Features
- **Dashboard**: View pending diet reviews with deviation flags
- **Review Screen**: Review member diet logs with nutrition scoring and comments

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Charts**: Recharts
- **Backend**: Node.js + Express
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

### Running the Application

1. Start the backend server (in one terminal):
```bash
cd server
npm start
```

2. Start the frontend development server (in another terminal):
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
born2build-app/
├── src/
│   ├── components/          # Reusable components
│   │   └── Layout.tsx       # Main layout with navigation
│   ├── pages/
│   │   ├── Login.tsx        # Login page
│   │   ├── admin/           # Admin pages
│   │   │   └── AdminCreateMember.tsx
│   │   ├── member/          # Member pages
│   │   │   ├── MemberOnboarding.tsx
│   │   │   ├── MemberDashboard.tsx
│   │   │   ├── DietLog.tsx
│   │   │   ├── WorkoutLog.tsx
│   │   │   └── ViewProgress.tsx
│   │   ├── trainer/         # Trainer pages
│   │   │   ├── TrainerDashboard.tsx
│   │   │   └── TrainerReview.tsx
│   │   └── diet/            # Diet Expert pages
│   │       ├── DietExpertDashboard.tsx
│   │       └── DietReview.tsx
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── server/                  # Backend API
│   ├── index.js             # Express server
│   └── package.json
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## User Roles

### Login Credentials (Demo)

The app uses a simple role-based login system. Select your role from the dropdown:

- **Admin**: Access to member creation
- **Member**: Access to dashboard, logging, and progress
- **Trainer**: Access to trainer dashboard and reviews
- **Diet Expert**: Access to diet expert dashboard and reviews

## API Endpoints

### Admin
- `POST /api/members` - Create new member

### Member
- `POST /api/member/onboarding` - Complete onboarding
- `POST /api/member/diet-log` - Submit diet log
- `POST /api/member/workout-log` - Submit workout log
- `GET /api/member/progress` - Get progress data

### Trainer
- `GET /api/trainer/members` - Get all members
- `POST /api/trainer/review` - Submit trainer review

### Diet Expert
- `GET /api/diet/pending` - Get pending diet reviews
- `POST /api/diet/review` - Submit diet review

## Development

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Notes

- Currently uses localStorage for authentication (replace with proper auth in production)
- Mock data is used for demonstration (connect to real database in production)
- File uploads are simulated (implement actual file storage in production)
- Email notifications are simulated (integrate email service in production)

## Future Enhancements

- Real database integration (PostgreSQL/MongoDB)
- Authentication with JWT tokens
- File upload to cloud storage (AWS S3, Cloudinary)
- Email service integration
- Real-time notifications
- Mobile app version
- Advanced analytics and reporting
