import { useAuth } from '@/hooks/useAuth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, CheckCircle, AlertCircle, User, Mail, Key, Code, Database, Globe, Activity, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProtectedPage() {
  const { user, isAuthenticated, logout } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-red-600">Access Denied</CardTitle>
            <CardDescription>
              You need to be logged in to view this admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Please sign in to access the protected content.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link to="/login">Admin Login</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/register">Create Account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const adminFeatures = [
    {
      icon: Code,
      title: 'Code Management',
      description: 'Manage and review code repositories',
      status: 'Active',
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Database Admin',
      description: 'Monitor and manage database connections',
      status: 'Optimized',
      color: 'green'
    },
    {
      icon: Globe,
      title: 'API Gateway',
      description: 'Control API endpoints and usage',
      status: 'Running',
      color: 'purple'
    },
    {
      icon: Activity,
      title: 'System Monitor',
      description: 'Real-time system performance metrics',
      status: 'Healthy',
      color: 'orange'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Professional Web Development Template</p>
              </div>
            </div>
            <Button onClick={() => logout()} variant="outline">
              <LogOut className="mr-2 w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <Card className="mb-8 border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <CardTitle className="text-green-800">Authentication Successful</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 mb-4">
              Welcome! You have successfully accessed the admin dashboard. This demonstrates a complete authentication system with session management and protected routes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Template Features</h4>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• JWT Authentication</li>
                  <li>• Token Refresh System</li>
                  <li>• Protected Routes</li>
                  <li>• Persistent Sessions</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Tech Stack</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• React + TypeScript</li>
                  <li>• Node.js + Express</li>
                  <li>• Tailwind CSS</li>
                  <li>• Zustand State</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Info */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-600" />
              <CardTitle>Administrator Information</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Email:</span>
            </div>
            <p className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
              {user?.email}
            </p>
            <div className="flex items-center space-x-2">
              <Key className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Role:</span>
            </div>
            <p className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
              {user?.role || 'Administrator'}
            </p>
          </CardContent>
        </Card>

        {/* Admin Features Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Administration</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {adminFeatures.map((feature, index) => {
              const Icon = feature.icon
              const statusColors = {
                blue: 'bg-blue-100 text-blue-800',
                green: 'bg-green-100 text-green-800',
                purple: 'bg-purple-100 text-purple-800',
                orange: 'bg-orange-100 text-orange-800'
              }
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-slate-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {feature.description}
                    </CardDescription>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[feature.color as keyof typeof statusColors]}`}>
                      {feature.status}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* System Status Dashboard */}
        <Card>
          <CardHeader>
            <CardTitle>Authentication System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-green-800">Authentication Status</span>
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-blue-800">Token Management</span>
                <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                  Auto Refresh
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium text-purple-800">Route Protection</span>
                <span className="px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full">
                  Enabled
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <span className="text-sm font-medium text-orange-800">Error Handling</span>
                <span className="px-2 py-1 text-xs font-semibold text-orange-800 bg-orange-200 rounded-full">
                  Silent 401
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
