# ♻️ WasteWise-AI

> AI-Powered Circular Waste Management Platform

---

## 📌 Project Overview

WasteWise-AI is an AI-powered Circular Waste Management Platform developed as a Social Action Project (SAP) under the Innovate4Environment Program.

The platform helps individuals and communities properly identify, segregate, monitor, and analyze waste using Artificial Intelligence, QR-based waste logging, reward systems, and real-time analytics.

---

## 🎯 Project Objectives

- AI-based Waste Classification
- QR Code Waste Logging
- Community Dashboard
- Reward & Leaderboard System
- Waste Analytics
- Environmental Awareness
- Circular Waste Economy

---

## 🛠 Technology Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hook Form
- Framer Motion
- Lucide React Icons

### Backend
- FastAPI
- Python

### Database
- Firebase Firestore

### Authentication
- Firebase Authentication

### Storage
- Firebase Storage

### AI
- TensorFlow Lite

### Dashboard
- Power BI

### Hosting
- Vercel
- Render

---

## 📅 Development Progress

| Sprint | Status |
|---------|--------|
| Sprint 1 - Project Initialization | ✅ Completed |
| Sprint 2 - Folder Architecture | ✅ Completed |
| Sprint 3 - Frontend Foundation | ✅ Completed |
| Sprint 4 - Backend Foundation | ⏳ Pending |
| Sprint 5 - Firebase Integration | ⏳ Pending |
| Sprint 6 - Authentication | ⏳ Pending |
| Sprint 7 - AI Waste Scanner | ⏳ Pending |
| Sprint 8 - QR Waste Logging | ⏳ Pending |
| Sprint 9 - Dashboard | ⏳ Pending |
| Sprint 10 - Deployment | ⏳ Pending |

---

## 📂 Project Structure

This project follows a modular architecture.

```
WasteWise-AI/
├── frontend/          # React + Vite frontend application
├── backend/           # FastAPI backend (not yet initialized)
├── docs/              # Project documentation
└── README.md
```

### Frontend Structure

```
frontend/src/
├── assets/            # Static assets (images, icons)
├── components/
│   ├── common/        # Shared layout components (Navbar, Footer, etc.)
│   ├── ui/            # Reusable UI primitives (Button, Input, Card)
│   ├── forms/         # Form-related components
│   └── dashboard/     # Dashboard-specific components
├── layouts/           # Page layout wrappers
├── pages/             # Route-level page components
├── routes/            # React Router configuration
├── hooks/             # Custom React hooks
├── contexts/          # React context providers (Theme, Auth, etc.)
├── services/          # API service layer (Axios)
├── utils/             # Utility functions
├── config/            # App configuration
├── styles/            # Global styles and Tailwind
└── constants/         # App-wide constants (routes, navigation)
```

---

## 🚀 Frontend Setup

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
cd frontend
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Build for Production

```bash
cd frontend
npm run build
npm run preview
```

### Environment Variables

Copy the example env file and configure as needed:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_API_BASE_URL` | Backend API base URL |
| `VITE_APP_NAME` | Application display name |

---

## 📖 Documentation

The complete project documentation is maintained inside the **docs** folder.

---

## 👨‍💻 Developer

Vedant

---

## 📜 License

Educational Purpose