import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft,
  CheckCircle,
  Euro,
  Clock,
  Shield,
  Star,
  TrendingUp,
  Phone,
  Mail
} from 'lucide-react'

const servicesData = {
  'autoconsumo-domestico': {
    name: 'Autoconsumo Doméstico',
    shortDescription: 'Soluciones solares para viviendas',
    fullDescription: 'Nuestras instalaciones de autoconsumo doméstico están diseñadas para maximizar el ahorro en tu factura eléctrica. Con tecnologías de última generación y un diseño personalizado, ofrecemos soluciones que se adaptan perfectamente a cualquier tipo de vivienda.',
    price: 'Desde 3.500€',
    duration: '1-2 días',
    warranty: '10 años',
    savings: 'Hasta 80%',
    icon: 'Home',
    features: [
      'Análisis de consumo personalizado',
      'Diseño 3D de la instalación',
      'Panel de monitorización en tiempo real',
      'Mantenimiento incluido primer año',
      'Gestión de permisos y trámites'
    ],
    benefits: [
      'Ahorro inmediato en la factura eléctrica',
      'Aumento del valor de la vivienda',
      'Contribución al medio ambiente',
      'Independencia energética',
      'Retorno de inversión en 6-8 años'
    ],
    testimonials: [
      {
        name: 'María González',
        location: 'Elche',
        text: 'Excelente servicio desde el primer día. Mi factura se redujo un 75% y el equipo fue muy profesional.',
        rating: 5
      }
    ],
    projects: [
      { location: 'Alicante Centro', panels: 8, power: '3.2 kWp', savings: '85%' },
      { location: 'Elche', panels: 6, power: '2.4 kWp', savings: '78%' },
      { location: 'Torrevieja', panels: 10, power: '4.0 kWp', savings: '82%' }
    ]
  },
  'autoconsumo-industrial': {
    name: 'Autoconsumo Industrial',
    shortDescription: 'Plantas solares para empresas',
    fullDescription: 'Desarrollamos plantas solares de gran potencia para empresas, fábricas y centros comerciales. Nuestro enfoque integral incluye desde el diseño hasta el mantenimiento, garantizando el máximo retorno de la inversión.',
    price: 'Desde 50.000€',
    duration: '1-3 semanas',
    warranty: '10 años',
    savings: 'Hasta 90%',
    icon: 'Building',
    features: [
      'Estudio de viabilidad técnico-económica',
      'Diseño optimizado para máxima producción',
      'Sistema de monitorización avanzado',
      'Integración con sistemas existentes',
      'Mantenimiento preventivo incluido'
    ],
    benefits: [
      'Reducción significativa de costes operativos',
      'Imagen corporativa sostenible',
      'ROI garantizado en 5-7 años',
      'Escalabilidad para crecimiento futuro',
      'Cumplimiento de objetivos ESG'
    ],
    testimonials: [
      {
        name: 'Carlos Ruiz',
        location: 'Polígono Industrial',
        text: 'La instalación industrial ha superado nuestras expectativas. Ahorro del 88% en costes energéticos.',
        rating: 5
      }
    ],
    projects: [
      { location: 'Polígono Finca Matola', panels: 120, power: '50 kWp', savings: '90%' },
      { location: 'Núcleo Empresarial', panels: 200, power: '80 kWp', savings: '85%' }
    ]
  }
  // Añadir más servicios según necesidad
}

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const service = servicesData[id as keyof typeof servicesData]

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Servicio no encontrado
            </h2>
            <p className="text-gray-600 mb-6">
              El servicio que buscas no está disponible.
            </p>
            <Link to="/servicios">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Volver a servicios
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/servicios">
            <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a servicios
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 lg:p-12 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {service.name}
              </h1>
              <p className="text-xl mb-6 text-orange-100">
                {service.fullDescription}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Euro className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">{service.price}</div>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">{service.duration}</div>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">{service.warranty}</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">{service.savings} ahorro</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <Card className="bg-white/10 backdrop-blur-sm border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Solicita tu presupuesto</h3>
                  <p className="text-orange-100 mb-6">
                    Sin compromiso, te responderemos en menos de 24 horas
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-white text-orange-500 hover:bg-orange-50">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar: +34 900 000 000
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-orange-500">
                      <Mail className="w-4 h-4 mr-2" />
                      Solicitar presupuesto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Características del Servicio</CardTitle>
                <CardDescription>
                  Todo lo que incluye nuestra solución completa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Beneficios Principales</CardTitle>
                <CardDescription>
                  Ventajas competitivas de nuestra solución
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects Examples */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Ejemplos de Proyectos</CardTitle>
                <CardDescription>
                  Casos reales de instalaciones completadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.projects.map((project, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{project.location}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Paneles: {project.panels}</div>
                        <div>Potencia: {project.power}</div>
                        <div>Ahorro: {project.savings}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-green-500 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">¿Interesado en este servicio?</h3>
                <p className="text-orange-100 mb-6">
                  Contacta con nuestros expertos para una consulta gratuita
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-orange-500 hover:bg-orange-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar ahora
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-orange-500">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            {service.testimonials && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h3>
                  {service.testimonials.map((testimonial, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-3 italic">"{testimonial.text}"</p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-500">{testimonial.location}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* WhatsApp Widget */}
            <Card className="border-0 shadow-lg bg-green-500 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">¿Dudas? ¡Pregúntanos!</h3>
                <p className="text-green-100 mb-4">
                  Responde rápido por WhatsApp
                </p>
                <Button className="w-full bg-white text-green-500 hover:bg-green-50">
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}