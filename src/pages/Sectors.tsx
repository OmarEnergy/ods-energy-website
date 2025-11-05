import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Home as HomeIcon,
  Building2,
  Sprout,
  Factory,
  Droplets,
  Building,
  Wind,
  ArrowRight,
  TrendingUp,
  Euro,
  CheckCircle
} from 'lucide-react'

const sectors = [
  {
    id: 'residential',
    name: 'Sector Residencial',
    description: 'Soluciones solares para viviendas unifamiliares, apartamentos y comunidades de propietarios',
    icon: HomeIcon,
    examples: ['Casas unifamiliares', 'Apartamentos', 'Comunidades', 'Segundas residencias'],
    benefits: [
      'Ahorro inmediato del 70-85%',
      'Aumento del valor de la vivienda',
      'Independencia energética',
      'Financiación disponible'
    ],
    priceRange: '3.500€ - 15.000€',
    roi: '6-8 años',
    featured: true
  },
  {
    id: 'commercial',
    name: 'Sector Comercial',
    description: 'Instalaciones para oficinas, tiendas, centros comerciales y edificios corporativos',
    icon: Building2,
    examples: ['Oficinas corporativas', 'Tiendas y retail', 'Centros comerciales', 'Hoteles'],
    benefits: [
      'Reducción significativa de costes operativos',
      'Imagen corporativa sostenible',
      'ROI garantizado',
      'Fiscalidad favorable'
    ],
    priceRange: '15.000€ - 100.000€',
    roi: '5-7 años',
    featured: true
  },
  {
    id: 'industrial',
    name: 'Sector Industrial',
    description: 'Plantas solares de gran potencia para fábricas, almacenes y procesos industriales',
    icon: Factory,
    examples: ['Fábricas y naves', 'Almacenes logísticos', 'Plantas de producción', 'Mineras'],
    benefits: [
      'Ahorro energético masivo',
      'Competitividad mejorada',
      'Cumplimiento normativo',
      'Escalabilidad total'
    ],
    priceRange: '50.000€ - 2.000.000€',
    roi: '4-6 años',
    featured: false
  },
  {
    id: 'agricultural',
    name: 'Sector Agrícola',
    description: 'Sistemas solares para riego, bombeo y operaciones agrícolas',
    icon: Sprout,
    examples: ['Riego por goteo', 'Bombeo de agua', 'Invernaderos', 'Granjas'],
    benefits: [
      'Ahorro en riego del 100%',
      'Funcionamiento 24/7',
      'Reducción de costes operativos',
      'Eficiencia hídrica'
    ],
    priceRange: '2.800€ - 50.000€',
    roi: '3-5 años',
    featured: false
  },
  {
    id: 'municipal',
    name: 'Sector Municipal',
    description: 'Proyectos públicos para ayuntamientos, centros educativos y edificios municipales',
    icon: Building,
    examples: ['Colegios y universidades', 'Ayuntamientos', 'Centros deportivos', 'Hospitales'],
    benefits: [
      'Ahorro en presupuesto público',
      'Ejemplo de sostenibilidad',
      'Educación ambiental',
      'Propio energético'
    ],
    priceRange: '25.000€ - 500.000€',
    roi: '6-8 años',
    featured: false
  },
  {
    id: 'floating',
    name: 'Sector Flotante',
    description: 'Instalaciones solares sobre embalses, balsas y láminas de agua',
    icon: Droplets,
    examples: ['Embalses', 'Balsas de riego', 'Lagos artificiales', 'Depósitos industriales'],
    benefits: [
      'Eficiencia superior',
      'Reducción de evaporación',
      'Instalación rápida',
      'Mantenimiento mínimo'
    ],
    priceRange: '15.000€ - 100.000€',
    roi: '5-7 años',
    featured: false
  }
]

const process = [
  {
    step: 1,
    title: 'Análisis y diseño',
    description: 'Estudio del consumo y diseño personalizado',
    duration: '3-5 días'
  },
  {
    step: 2,
    title: 'Permisos y financiación',
    description: 'Gestión de trámites y opciones de pago',
    duration: '2-3 semanas'
  },
  {
    step: 3,
    title: 'Instalación',
    description: 'Montaje profesional y conexión',
    duration: '1-7 días'
  },
  {
    step: 4,
    title: 'Activación',
    description: 'Puesta en marcha y monitorización',
    duration: '1 día'
  }
]

export default function Sectors() {
  const featuredSectors = sectors.filter(sector => sector.featured)
  const otherSectors = sectors.filter(sector => !sector.featured)

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sectores de Aplicación
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones fotovoltaicas especializadas para cada sector. 
            Adaptamos nuestra tecnología a las necesidades específicas de cada industria.
          </p>
        </div>

        {/* Featured Sectors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sectores Principales
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredSectors.map((sector) => {
              const Icon = sector.icon
              return (
                <Card key={sector.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="bg-gradient-to-r from-orange-500 to-green-500 p-6 text-white">
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold">{sector.name}</h3>
                        <p className="text-orange-100">{sector.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Euro className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-gray-900">{sector.priceRange}</div>
                        <div className="text-xs text-gray-600">Inversión</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-gray-900">{sector.roi}</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Ejemplos de aplicación:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {sector.examples.map((example, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Beneficios principales:</h4>
                      <ul className="space-y-1">
                        {sector.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to={`/servicios?sector=${sector.id}`}>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Ver servicios para {sector.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Other Sectors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Otros Sectores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherSectors.map((sector) => {
              const Icon = sector.icon
              return (
                <Card key={sector.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{sector.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 text-center">{sector.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="text-center">
                        <span className="text-sm font-semibold text-gray-900">{sector.priceRange}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-xs text-gray-600">ROI: {sector.roi}</span>
                      </div>
                    </div>
                    <Link to={`/servicios?sector=${sector.id}`}>
                      <Button variant="outline" className="w-full">
                        Ver más
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestro Proceso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <Card key={step.step} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <span className="text-orange-500 text-sm font-medium">
                    ⏱️ {step.duration}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Experiencia en todos los sectores
                </h2>
                <p className="text-xl text-orange-100">
                  Más de 500 proyectos completados con éxito
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">200+</div>
                  <div className="text-sm text-orange-100">Proyectos Residenciales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">150+</div>
                  <div className="text-sm text-orange-100">Proyectos Comerciales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">80+</div>
                  <div className="text-sm text-orange-100">Proyectos Industriales</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">70+</div>
                  <div className="text-sm text-orange-100">Proyectos Agrícolas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Tu sector no está en la lista?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Cada proyecto es único. Contacta con nosotros para una consulta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Consulta personalizada
                </Button>
              </Link>
              <Link to="/servicios">
                <Button size="lg" variant="outline">
                  Ver todos los servicios
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}