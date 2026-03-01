import { type ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import { Toaster } from 'sonner'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Toaster position="top-right" richColors />
    </div>
  )
}

export default MainLayout
