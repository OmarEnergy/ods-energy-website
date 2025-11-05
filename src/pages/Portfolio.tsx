import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home as HomeIcon, Building2, Leaf, Droplet, Wind, Zap, Filter, MapPin, TrendingUp } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Residencial Elche',
    type: 'Residencial',
    location: 'Elche, Alicante',
    power: '4.2 kWp',
    panels: 12,
    savings: '82%',
    date: '2024',
    description: 'Instalación residencial con sistema de monitorización en tiempo real',
    icon: HomeIcon,
    images: ['/project-residencial-1.jpg'],
    technologies: ['Paneles 350W', 'Inversor Huawei', 'Sistema de monitorización']
  },
  {
    id: 2,
    name: 'Fábrica Industrial',
    type: 'Industrial',
    location: 'Polígono Finca Matola',
    power: '150 kWp',
    panels: 420,
    savings: '90%',
    date: '2024',
    description: 'Planta solar industrial con seguimiento automático y monitorización remota',
    icon: Building2,
    images: ['/project-industrial-1.jpg'],
    technologies: ['Paneles 380W', 'Inversores centrales', 'Sistema de seguimiento']
  },
  {
    id: 3,
    name: 'Huerto Solar Comunitarío',
    type: 'Comunitario',
    location: 'Torrevieja',
    power: '500 kWp',
    panels: 1400,
    savings: '85%',
    date: '2023',
    description: 'Proyecto de energía solar comunitaria con participación vecinal',
    icon: Leaf,
    images: ['/project-community-1.jpg'],
    technologies: ['Paneles bifaciales', 'Sistema inteligente', 'Participación vecinal']
  },
  {
    id: 4,
    name: 'Bombeo Agrícola',
    type: 'Agrícola',
    location: 'Orihuela',
    power: '15 kWp',
    panels: 45,
    savings: '95%',
    date: '2024',
    description: 'Sistema de bombeo solar para riego de 20 hectáreas de cultivo',
    icon: Droplet,
    images: ['/project-pumping-1.jpg'],
    technologies: ['Paneles 350W', 'Bomba sumergible', 'Control automático']
  },
  {
    id: 5,
    name: 'Placas Flotantes',
    type: 'Flotante',
    location: 'Embalse de Othón P. Blanco',
    power: '25 kWp',
    panels: 70,
    savings: '88%',
    date: '2023',
    description: 'Primera instalación de placas flotantes en embalse regional',
    icon: Wind,
    images: ['/project-floating-1.jpg'],
    technologies: ['Paneles flotantes', 'Sistema anti-flotación', 'Monitoreo remoto']
  },
  {
    id: 6,
    name: 'Agrovoltaica',
    type: 'Agrovoltaica',
    location: 'Callosa del Segura',
    power: '8 kWp',
    panels: 24,
    savings: '80%',
    date: '2024',
    description: 'Instalación agrovoltaica con cultivos protegidos underneath',
    icon: Zap,
    images: ['/project-agrovoltaic-1.jpg'],
    technologies: ['Estructura elevada', 'Cultivos protegidos', 'Microclima optimizado']
  }
]

const filterOptions = [
  { value: 'all', label: 'Todos los proyectos', icon: Filter },
  { value: 'Residencial', label: 'Residencial', icon: HomeIcon },
  { value: 'Industrial', label: 'Industrial', icon: Building2 },
  { value: 'Comunitario', label: 'Comunitario', icon: Leaf },
  { value: 'Agrícola', label: 'Agrícola', icon: Droplet },
  { value: 'Flotante', label: 'Flotante', icon: Wind },
  { value: 'Agrovoltaica', label: 'Agrovoltaica', icon: Zap }
]

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedFilter)

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Más de 500 proyectos completados en toda la provincia de Alicante. 
            Descubre algunos de nuestros casos de éxito más destacados.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-orange-500">500+</div>
              <div className="text-sm text-gray-600">Proyectos</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-500">150+</div>
              <div className="text-sm text-gray-600">MWp Instalados</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-500">1000+</div>
              <div className="text-sm text-gray-600">Clientes</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-purple-500">12</div>
              <div className="text-sm text-gray-600">Años</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((option) => {
              const Icon = option.icon
              return (
                <Button
                  key={option.value}
                  variant={selectedFilter === option.value ? 'default' : 'outline'}
                  className={selectedFilter === option.value ? 'bg-orange-500 hover:bg-orange-600' : ''}
                  onClick={() => setSelectedFilter(option.value)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {option.label}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon
            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 p-4">
                  <div className="flex items-center justify-between text-white">
                    <Icon className="w-8 h-8" />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
                    {project.name}
                  </CardTitle>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-orange-500">{project.power}</div>
                      <div className="text-xs text-gray-600">Potencia</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-green-500">{project.savings}</div>
                      <div className="text-xs text-gray-600">Ahorro</div>
                    </div>
                  </div>
                  
                  {/* Technical Details */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Especificaciones:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Paneles:</span>
                        <span className="font-medium">{project.panels} unidades</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Año:</span>
                        <span className="font-medium">{project.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-orange-600">
                    Ver detalles del proyecto
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                ¿Quieres ser el siguiente proyecto de éxito?
              </h2>
              <p className="text-xl mb-6 text-orange-100">
                Únete a nuestros clientes satisfechos y empieza a ahorrar desde el primer día
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Solicitar presupuesto
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Ver más proyectos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}