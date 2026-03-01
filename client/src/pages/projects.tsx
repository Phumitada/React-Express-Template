import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Code, ExternalLink, GitBranch, Star, Users, Calendar, TrendingUp } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  status: 'completed' | 'in-progress' | 'planned'
  progress: number
  githubUrl?: string
  liveUrl?: string
  stars?: number
  forks?: number
  lastUpdated: string
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    status: 'completed',
    progress: 100,
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    stars: 234,
    forks: 45,
    lastUpdated: '2024-02-15'
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team analytics.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Socket.io', 'Framer Motion'],
    status: 'in-progress',
    progress: 75,
    githubUrl: 'https://github.com/username/task-manager',
    stars: 189,
    forks: 32,
    lastUpdated: '2024-02-28'
  },
  {
    id: '3',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with automated reporting, content scheduling, and engagement metrics.',
    tech: ['React', 'TypeScript', 'Next.js', 'Prisma', 'GraphQL', 'Chart.js'],
    status: 'completed',
    progress: 100,
    githubUrl: 'https://github.com/username/social-dashboard',
    stars: 567,
    forks: 89,
    lastUpdated: '2024-01-20'
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'Machine learning powered content generation platform with natural language processing and automated optimization.',
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'TensorFlow', 'OpenAI'],
    status: 'planned',
    progress: 30,
    githubUrl: 'https://github.com/username/ai-content-gen',
    stars: 92,
    forks: 18,
    lastUpdated: '2024-03-01'
  },
  {
    id: '5',
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with virtual tours, mortgage calculator, and agent dashboard.',
    tech: ['React', 'TypeScript', 'Node.js', 'MySQL', 'AWS', 'Mapbox'],
    status: 'completed',
    progress: 100,
    githubUrl: 'https://github.com/username/real-estate',
    liveUrl: 'https://property-platform.com',
    stars: 445,
    forks: 67,
    lastUpdated: '2024-02-10'
  },
  {
    id: '6',
    title: 'Video Streaming Service',
    description: 'Live streaming platform with chat, donations, and multi-language support for content creators.',
    tech: ['React', 'TypeScript', 'WebRTC', 'Node.js', 'Redis', 'FFmpeg'],
    status: 'in-progress',
    progress: 60,
    githubUrl: 'https://github.com/username/video-streaming',
    stars: 312,
    forks: 78,
    lastUpdated: '2024-03-05'
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress' | 'planned'>('all')

  const filteredProjects = filter === 'all' 
    ? mockProjects 
    : mockProjects.filter(project => project.status === filter)

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      case 'planned': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed': return <Star className="w-4 h-4" />
      case 'in-progress': return <TrendingUp className="w-4 h-4" />
      case 'planned': return <Calendar className="w-4 h-4" />
      default: return <Calendar className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Code className="w-6 h-6 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Project Portfolio</h1>
                <p className="text-gray-600">Showcasing my development work and technical expertise</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {filteredProjects.length} projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1">
            {[
              { key: 'all', label: 'All Projects', count: mockProjects.length },
              { key: 'completed', label: 'Completed', count: mockProjects.filter(p => p.status === 'completed').length },
              { key: 'in-progress', label: 'In Progress', count: mockProjects.filter(p => p.status === 'in-progress').length },
              { key: 'planned', label: 'Planned', count: mockProjects.filter(p => p.status === 'planned').length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  filter === tab.key
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <Badge variant="secondary" className="ml-2">
                  {tab.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status.replace('-', ' ').toUpperCase()}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{project.stars}</span>
                          <GitBranch className="w-3 h-3 ml-1" />
                          <span>{project.forks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {project.progress}% Complete
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {project.description}
                </CardDescription>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Project Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <GitBranch className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Project Statistics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Total Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">{mockProjects.length}</div>
                <p className="text-gray-600">Completed and ongoing</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">
                  {mockProjects.filter(p => p.status === 'completed').length}
                </div>
                <p className="text-gray-600">Production ready</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-800">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">
                  {mockProjects.filter(p => p.status === 'in-progress').length}
                </div>
                <p className="text-gray-600">Currently developing</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">Planned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-600">
                  {mockProjects.filter(p => p.status === 'planned').length}
                </div>
                <p className="text-gray-600">Future projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
