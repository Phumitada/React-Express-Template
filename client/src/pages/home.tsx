import { useAuth } from '@/hooks/useAuth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Code, Database, Globe, Shield, ArrowRight, Briefcase, Users, Zap } from 'lucide-react'

export default function HomePage() {
  const { isAuthenticated } = useAuth()

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'React, TypeScript, Node.js, Express, MongoDB',
      path: '/projects'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'SQL, NoSQL, ORM, Data Modeling',
      path: '/database'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'RESTful APIs, Authentication, Real-time features',
      path: '/webapps'
    },
    {
      icon: Shield,
      title: 'Security Best Practices',
      description: 'JWT, OAuth, Input Validation, Error Handling',
      path: '/security'
    }
  ]

  const techStack = [
    'React', 'TypeScript', 'Node.js', 'Express', 
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Zustand',
    'React Query', 'Zod', 'shadcn/ui', 'Lucide Icons'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Web Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              Building scalable web applications with modern technologies
            </p>
            <div className="space-x-4">
              {isAuthenticated ? (
                <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                  <Link to="/protected">
                    View Dashboard
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
                    <Link to="/login">
                      Admin Login
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                    <Link to="/register">
                      Create Account
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg"></div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Modern tools and frameworks for robust applications
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="ghost" className="p-0 h-auto font-normal text-slate-600 hover:text-slate-800">
                    <Link to={feature.path}>
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                About This Template
              </h3>
              <p className="text-gray-600 mb-6">
                This is a professional React + Express template showcasing modern web development practices. 
                It demonstrates secure authentication, responsive design, and scalable architecture.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-slate-600" />
                  <span className="text-gray-700">Production-ready architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-slate-600" />
                  <span className="text-gray-700">User authentication system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-slate-600" />
                  <span className="text-gray-700">Optimized performance</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>JWT authentication with refresh tokens</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Persistent user sessions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Protected routes and middleware</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Error handling and validation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Responsive design with Tailwind CSS</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>TypeScript for type safety</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Clone this template and start your next project
            </p>
            <div className="space-x-4">
              {isAuthenticated ? (
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/protected">
                    <Shield className="mr-2 w-5 h-5" />
                    View Admin Dashboard
                  </Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/register">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
