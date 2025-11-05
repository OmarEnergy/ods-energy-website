import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Award, 
  Users, 
  Leaf, 
  TrendingUp, 
  CheckCircle,
  MapPin,
  Calendar,
  Target
} from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Utilizamos solo los mejores materiales y equipos certificados con garantía de 10 años.'
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Cada cliente recibe un servicio completamente personalizado y seguimiento post-instalación.'
  },
  {
    icon: Leaf,
    title: 'Compromiso Ambiental',
    description: 'Promovemos un futuro sostenible con soluciones energéticas limpias y renovables.'
  },
  {
    icon: TrendingUp,
    title: 'Innovación Constante',
    description: 'Mantenemos la vanguardia tecnológica para ofrecer las mejores soluciones del mercado.'
  }
]

const team = [
  {
    name: 'Carlos Rodríguez',
    position: 'Director Técnico',
    experience: '15 años',
    specialization: 'Instalaciones Industriales'
  },
  {
    name: 'María González',
    position: 'Ingeniera Senior',
    experience: '12 años',
    specialization: 'Proyectos Residenciales'
  },
  {
    name: 'Antonio López',
    position: 'Especialista en Subvenciones',
    experience: '10 años',
    specialization: 'Gestión de Ayudas'
  }
]

const milestones = [
  {
    year: '2012',
    title: 'Fundación de ODS Energy',
    description: 'Inicio de operaciones con el objetivo de democratizar la energía solar en Alicante.'
  },
  {
    year: '2015',
    title: 'Primera Instalación Industrial',
    description: 'Completamos nuestra primera planta solar industrial de 100 kWp.'
  },
  {
    year: '2018',
    title: '100 Instalaciones Completadas',
    description: 'Alcanzamos el hito de 100 instalaciones residenciales exitosas.'
  },
  {
    year: '2020',
    title: 'Expansión Provincial',
    description: 'Ampliamos nuestros servicios a toda la provincia de Alicante.'
  },
  {
    year: '2023',
    title: '500 Proyectos Completados',
    description: 'Celebramos medio millar de proyectos completados con éxito.'
  },
  {
    year: '2024',
    title: 'Líder en Innovación',
    description: 'Implementamos tecnologías de vanguardia y nuevos modelos de negocio.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-green-500 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre ODS Energy
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
              Más de 12 años liderando la transición energética en Alicante. 
              Nuestra misión es hacer la energía solar accesible para todos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-orange-100">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300">150+</div>
                <div className="text-sm text-orange-100">MWp Instalados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300">1000+</div>
                <div className="text-sm text-orange-100">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300">12</div>
                <div className="text-sm text-orange-100">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Target className="w-6 h-6 mr-3 text-orange-500" />
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Democratizar el acceso a la energía solar ofreciendo soluciones personalizadas, 
                  de alta calidad y con el mejor servicio del mercado. Creemos que cada persona 
                  y empresa merece tener acceso a energía limpia y económica.
                </p>
                <p className="text-gray-600">
                  Trabajamos cada día para contribuir a un futuro sostenible, 
                  ayudando a nuestros clientes a reducir su huella de carbono 
                  mientras ahorran significativamente en sus facturas energéticas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Leaf className="w-6 h-6 mr-3 text-green-500" />
                  Nuestra Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Ser la empresa líder en soluciones fotovoltaicas en la Comunidad Valenciana, 
                  reconocida por nuestra innovación, calidad y compromiso con el medio ambiente.
                </p>
                <p className="text-gray-600">
                  Aspiramos a crear un mundo donde la energía solar sea la principal 
                  fuente de energía, contribuyendo decisivamente a la lucha 
                  contra el cambio climático.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600">
              Un camino de crecimiento y innovación continua
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-orange-500 to-green-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <Card className={`border-0 shadow-lg ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                          <span className="text-orange-500 font-bold">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales expertos comprometidos con tu proyecto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{member.position}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>{member.experience} de experiencia</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Award className="w-4 h-4 text-orange-500 mr-2" />
                      <span>{member.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Quieres formar parte de nuestra historia?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Únete a los miles de clientes que ya confían en ODS Energy para su proyecto solar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50">
                Contactar ahora
              </Button>
            </Link>
            <Link to="/servicios">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Ver nuestros servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}