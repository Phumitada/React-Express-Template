import { type ReactNode } from 'react'
import { Toaster } from 'sonner'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen">
      {children}
      <Toaster position="top-right" richColors />
    </div>
  )
}

export default AuthLayout
