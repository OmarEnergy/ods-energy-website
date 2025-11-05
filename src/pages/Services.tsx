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
  ArrowRight,
  CheckCircle,
  Euro,
  Clock,
  Shield
} from 'lucide-react'

const services = [
  {
    id: 'autoconsumo-domestico',
    name: 'Autoconsumo Doméstico',
    description: 'Soluciones solares completas para viviendas unifamiliares y apartamentos. Reduce tu factura eléctrica hasta un 80%.',
    price: 'Desde 3.500€',
    duration: '1-2 días',
    warranty: '10 años',
    icon: HomeIcon,
    image: '/service-domestic.jpg',
    benefits: [
      'Reducción de factura hasta 80%',
      'Instalación en 1-2 días',
      'Mantenimiento mínimo',
      'Garantía de 10 años',
      'Financiación disponible'
    ],
    idealFor: ['Viviendas unifamiliares', 'Apartamentos', 'Segunda residencia']
  },
  {
    id: 'autoconsumo-industrial',
    name: 'Autoconsumo Industrial',
    description: 'Plantas solares de gran potencia diseñadas para empresas, fábricas y centros comerciales.',
    price: 'Desde 50.000€',
    duration: '1-3 semanas',
    warranty: '10 años',
    icon: Building2,
    image: '/service-industrial.jpg',
    benefits: [
      'ROI en 5-7 años',
      'Escalabilidad total',
      'Máximo ahorro energético',
      'Gestión integral del proyecto',
      'Monitoreo remoto'
    ],
    idealFor: ['Empresas', 'Fábricas', 'Centros comerciales', 'Oficinas']
  },
  {
    id: 'huerto-solar',
    name: 'Huerto Solar',
    description: 'Proyectos de energía comunitaria donde varias familias comparten una planta solar.',
    price: 'Desde 150.000€',
    duration: '2-4 meses',
    warranty: '10 años',
    icon: Leaf,
    image: '/service-community.jpg',
    benefits: [
      'Energía comunitaria',
      'Ingresos adicionales',
      'Sostenibilidad total',
      'Propiedad compartida',
      'Gestión profesional'
    ],
    idealFor: ['Comunidades', 'Ayuntamientos', 'Cooperativas', 'Desarrollos residenciales']
  },
  {
    id: 'bombeo-solar',
    name: 'Bombeo Solar',
    description: 'Sistemas de bombeo solar para riego agrícola y abastecimiento de agua sin facturas eléctricas.',
    price: 'Desde 2.800€',
    duration: '1-3 días',
    warranty: '5 años',
    icon: Droplet,
    image: '/service-pumping.jpg',
    benefits: [
      'Sin facturas eléctricas',
      'Funcionamiento 24/7',
      'Mantenimiento mínimo',
      'Ideal para riego',
      'Retorno de inversión rápido'
    ],
    idealFor: ['Agricultura', 'Riego de cultivos', 'Abastecimiento de agua', 'Ganadería']
  },
  {
    id: 'placas-flotantes',
    name: 'Placas Flotantes',
    description: 'Instalaciones fotovoltaicas sobre embalses, lagos y balsas de riego con doble beneficio.',
    price: 'Desde 15.000€',
    duration: '1-2 semanas',
    warranty: '10 años',
    icon: Wind,
    image: '/service-floating.jpg',
    benefits: [
      'Eficiencia superior',
      'Reducción de evaporación',
      'Instalación rápida',
      'Mantenimiento sencillo',
      'Impacto ambiental mínimo'
    ],
    idealFor: ['Embalses', 'Balsas de riego', 'Lagos artificiales', 'Depósitos de agua']
  },
  {
    id: 'agrovoltaica',
    name: 'Agrovoltaica',
    description: 'Combinación perfecta entre agricultura y energía solar, protegiendo cultivos y generando electricidad.',
    price: 'Desde 8.000€',
    duration: '1-2 semanas',
    warranty: '10 años',
    icon: Zap,
    image: '/service-agrovoltaic.jpg',
    benefits: [
      'Doble rendimiento',
      'Cultivos protegidos',
      'Ahorro energético',
      'Rentabilidad doble',
      'Innovación sostenible'
    ],
    idealFor: ['Agricultura protegida', 'Horticultura', 'Fruticultura', 'Invernaderos']
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios Solares
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones fotovoltaicas completas para cada necesidad. Desde viviendas hasta proyectos industriales, 
            siempre con la máxima calidad y garantía.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 p-6 text-white">
                  <div className="flex items-center">
                    <Icon className="w-8 h-8 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                      <p className="text-orange-100">{service.description}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <Euro className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-600">Inversión</div>
                    </div>
                    <div>
                      <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.duration}</div>
                      <div className="text-sm text-gray-600">Instalación</div>
                    </div>
                    <div>
                      <Shield className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.warranty}</div>
                      <div className="text-sm text-gray-600">Garantía</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Beneficios principales:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ideal para:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((target, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link to={`/servicio/${service.id}`} className="flex-1">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Ver detalles
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">
                      Solicitar presupuesto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿No encuentras el servicio que necesitas?
            </h2>
            <p className="text-xl mb-6 text-orange-100">
              Cada proyecto es único. Contacta con nosotros y diseñaremos una solución personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50">
                Solicitar consulta personalizada
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Llamar: +34 900 000 000
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}