import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import AuthLayout from '@/layout/AuthLayout'
import HomePage from '@/pages/home'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import ProtectedPage from '@/pages/protected'
import ProjectsPage from '@/pages/projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes - No Navbar */}
        <Route path="/login" element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        } />
        <Route path="/register" element={
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        } />
        
        {/* Main Routes - With Navbar */}
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/projects" element={
          <MainLayout>
            <ProjectsPage />
          </MainLayout>
        } />
        <Route path="/protected" element={
          <MainLayout>
            <ProtectedPage />
          </MainLayout>
        } />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App