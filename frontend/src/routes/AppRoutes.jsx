import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import ProtectedRoute from '@/routes/ProtectedRoute'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Profile from '@/pages/Profile/Profile'
import WasteClassification from '@/pages/WasteClassification/WasteClassification'
import Analytics from '@/pages/Analytics/Analytics'
import NotFound from '@/pages/NotFound/NotFound'
import { ROUTES } from '@/constants/routes'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.WASTE_CLASSIFICATION} element={<WasteClassification />} />
          <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
        </Route>

        <Route
          path="/classify"
          element={<Navigate to={ROUTES.WASTE_CLASSIFICATION} replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes