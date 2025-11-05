import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Home as HomeIcon, 
  Building2, 
  Leaf, 
  Droplet, 
  Wind, 
  Zap, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import SolarCalculator from '@/components/SolarCalculator'
import { useState } from 'react'

const services = [
  {
    id: 'autoconsumo-domestico',
    name: 'Autoconsumo Doméstico',
    description: 'Soluciones solares para viviendas',
    price: 'Desde 3.500€',
    icon: HomeIcon,
    benefits: ['Reducción hasta 80%', 'Instalación rápida', '10 años garantía']
  },
  {
    id: 'autoconsumo-industrial',
    name: 'Autoconsumo Industrial',
    description: 'Plantas solares para empresas',
    price: 'Desde 50.000€',
    icon: Building2,
    benefits: ['ROI 5-7 años', 'Escalabilidad', 'Ahorro máximo']
  },
  {
    id: 'huerto-solar',
    name: 'Huerto Solar',
    description: 'Proyectos de energía comunitaria',
    price: 'Personalizado',
    icon: Leaf,
    benefits: ['Energía comunitaria', 'Ingresos extra', 'Sostenibilidad']
  },
  {
    id: 'bombeo-solar',
    name: 'Bombeo Solar',
    description: 'Sistemas de bombeo sostenible',
    price: 'Desde 2.800€',
    icon: Droplet,
    benefits: ['Sin facturas eléctricas', 'Funcionamiento 24/7', 'Mantenimiento mínimo']
  },
  {
    id: 'placas-flotantes',
    name: 'Placas Flotantes',
    description: 'Energía en embalses y lagos',
    price: 'Desde 15.000€',
    icon: Wind,
    benefits: ['Eficiencia mayor', 'Menos evaporación', 'Instalación rápida']
  },
  {
    id: 'agrovoltaica',
    name: 'Agrovoltaica',
    description: 'Agricultura + Energía Solar',
    price: 'Desde 8.000€',
    icon: Zap,
    benefits: ['Doble rendimiento', 'Cultivos protegidos', 'Ahorro energético']
  }
]

const stats = [
  { label: 'Proyectos Completados', value: '500+' },
  { label: 'MWp Instalados', value: '150+' },
  { label: 'Clientes Satisfechos', value: '1000+' },
  { label: 'Años de Experiencia', value: '12' },
]

const testimonials = [
  {
    name: 'María González',
    location: 'Elche',
    rating: 5,
    text: 'Excelente servicio. Mi instalación está funcionando perfectamente y he reducido mi factura en un 75%.'
  },
  {
    name: 'Carlos Pérez',
    location: 'Alicante',
    rating: 5,
    text: 'Profesionales de primera. La instalación se completó en 2 días y el seguimiento post-venta es excelente.'
  },
  {
    name: 'Ana Martínez',
    location: 'Torrevieja',
    rating: 5,
    text: 'Muy contento con la inversión. El ROI llegó antes de lo esperado y la calidad de los materiales es sobresaliente.'
  }
]

export default function Home() {
  const [showCalculator, setShowCalculator] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-green-500 text-white py-20 lg:py-32">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Tu <span className="text-yellow-300">Energía Solar</span><br />
                del Futuro
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-orange-100">
                Más de 500 proyectos completados en Alicante. Instalaciones desde 2.800€ con garantía de 10 años.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-500 hover:bg-orange-50"
                  onClick={() => setShowCalculator(true)}
                >
                  Calculadora Gratuita
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500"
                >
                  Ver Servicios
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Instalación Gratuita</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Garantía 10 años</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Financiación disponible</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Estadísticas 2024</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                      <div className="text-sm text-orange-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Solares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones personalizadas para cada necesidad energética, desde viviendas hasta proyectos industriales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-orange-500">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/servicio/${service.id}`}>
                      <Button className="w-full group-hover:bg-orange-600">
                        Más información
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/servicios">
              <Button variant="outline" size="lg">
                Ver todos los servicios
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      {showCalculator && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Calculadora de Ahorro Solar
              </h2>
              <p className="text-xl text-gray-600">
                Descubre cuánto puedes ahorrar con tu instalación solar
              </p>
            </div>
            <SolarCalculator />
            <div className="text-center mt-8">
              <Button onClick={() => setShowCalculator(false)} variant="outline">
                Cerrar Calculadora
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              Más de 1000 clientes satisfechos en Alicante y provincia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
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
            ¿Listo para generar tu propia energía?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Contacta con nosotros y recibe un presupuesto personalizado sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50">
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora: +34 900 000 000
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              <Mail className="w-5 h-5 mr-2" />
              Solicitar Presupuesto
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Alcance: Alicante y provincia</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>+1000 instalaciones</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              <span>Certificados oficiales</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}