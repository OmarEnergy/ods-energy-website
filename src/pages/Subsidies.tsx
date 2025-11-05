import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Euro, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  FileText,
  Calculator,
  Phone,
  Mail,
  AlertCircle,
  Calendar
} from 'lucide-react'

const subsidies = [
  {
    id: 1,
    name: 'Programa Nacional de Autoconsumo',
    description: 'Subvenciones directas para instalaciones de autoconsumo residencial y empresarial',
    amount: 'Hasta 40% de la inversión',
    deadline: '31 de diciembre de 2025',
    status: 'Activa',
    type: 'Nacional',
    eligible: ['Residencial', 'Empresas', 'Comunidades'],
    coverage: 'Toda España',
    maxAmount: '15.000€'
  },
  {
    id: 2,
    name: 'Subvenciones IVACE 2025',
    description: 'Programa de ayudas de la Generalitat Valenciana para energías renovables',
    amount: 'Hasta 30% de la inversión',
    deadline: '30 de septiembre de 2025',
    status: 'Activa',
    type: 'Autonómico',
    eligible: ['Residencial', 'Empresas'],
    coverage: 'Comunidad Valenciana',
    maxAmount: '10.000€'
  },
  {
    id: 3,
    name: 'Ayudas Ayuntamiento Alicante',
    description: 'Subvenciones municipales para instalaciones solares en el término municipal',
    amount: '20% de la inversión',
    deadline: '31 de octubre de 2025',
    status: 'Activa',
    type: 'Municipal',
    eligible: ['Residencial'],
    coverage: 'Alicante ciudad',
    maxAmount: '2.500€'
  },
  {
    id: 4,
    name: 'Plan de Recuperación Europeo',
    description: 'Fondos europeos Next Generation para proyectos de transición energética',
    amount: 'Hasta 50% de la inversión',
    deadline: '31 de diciembre de 2026',
    status: 'Activa',
    type: 'Europeo',
    eligible: ['Empresas', 'Comunidades'],
    coverage: 'Unión Europea',
    maxAmount: '100.000€'
  }
]

const financeOptions = [
  {
    name: 'Financiación Bancaria',
    description: 'Préstamos especializados para instalaciones solares con condiciones preferenciales',
    interest: 'Desde 2.5% TIN',
    term: 'Hasta 10 años',
    requirements: ['Domiciliación de nómina', 'Seguro de vida', 'Avalista (opcional)']
  },
  {
    name: 'Leasing Solar',
    description: 'Alquiler de la instalación con opción de compra al final del periodo',
    interest: 'Desde 3.8% TIN',
    term: '5-7 años',
    requirements: ['Facturación anual mínima', 'Antigüedad en actividad', 'Informe financiero']
  },
  {
    name: 'Pago fraccionado',
    description: 'Pago en cuotas mensuales sin intereses durante el primer año',
    interest: '0% primer año',
    term: '12 meses',
    requirements: ['Entrada del 30%', 'Antigüedad laboral o empresarial']
  }
]

const steps = [
  {
    step: 1,
    title: 'Consulta inicial gratuita',
    description: 'Analizamos tu caso y calculamos las ayudas disponibles',
    icon: Phone,
    duration: '24 horas'
  },
  {
    step: 2,
    title: 'Estudio de viabilidad',
    description: 'Diseño personalizado y cálculo de retorno de inversión',
    icon: Calculator,
    duration: '3-5 días'
  },
  {
    step: 3,
    title: 'Gestión de subvenciones',
    description: 'Nos encargamos de toda la tramitación y documentación',
    icon: FileText,
    duration: '2-4 semanas'
  },
  {
    step: 4,
    title: 'Instalación y puesta en marcha',
    description: 'Ejecución profesional y activación del sistema',
    icon: CheckCircle,
    duration: '1-2 días'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Activa': return 'bg-green-500'
    case 'Pendiente': return 'bg-yellow-500'
    case 'Cerrada': return 'bg-red-500'
    default: return 'bg-gray-500'
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Nacional': return 'bg-blue-500'
    case 'Autonómico': return 'bg-purple-500'
    case 'Municipal': return 'bg-orange-500'
    case 'Europeo': return 'bg-green-500'
    default: return 'bg-gray-500'
  }
}

export default function Subsidies() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Subvenciones y Ayudas 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprovecha las múltiples ayudas disponibles para tu instalación solar. 
            Nos encargamos de toda la gestión para que ahorres hasta un 50% de tu inversión.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-12 bg-orange-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">¡Importante!</h3>
                <p className="text-orange-700">
                  Las ayudas son limitadas y se asignan por orden de solicitud. 
                  Contacta con nosotros cuanto antes para asegurar tu financiación.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Subsidies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Subvenciones Activas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {subsidies.map((subsidy) => (
              <Card key={subsidy.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{subsidy.name}</CardTitle>
                      <p className="text-gray-600 text-sm">{subsidy.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getStatusColor(subsidy.status)}`}>
                        {subsidy.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getTypeColor(subsidy.type)}`}>
                        {subsidy.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Euro className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-green-800">{subsidy.amount}</div>
                      <div className="text-xs text-green-600">Subvención</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-blue-800">{subsidy.maxAmount}</div>
                      <div className="text-xs text-blue-600">Máximo</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">Plazo: {subsidy.deadline}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <FileText className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">Cobertura: {subsidy.coverage}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Elegible para:</h4>
                    <div className="flex flex-wrap gap-2">
                      {subsidy.eligible.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Solicitar información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestro Proceso de Gestión
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={step.step} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-2">Paso {step.step}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <span className="text-orange-500 text-sm font-medium">
                      ⏱️ {step.duration}
                    </span>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Financing Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Opciones de Financiación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financeOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interés:</span>
                      <span className="font-semibold text-green-600">{option.interest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plazo:</span>
                      <span className="font-semibold">{option.term}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Requisitos:</h4>
                    <ul className="space-y-1">
                      {option.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Quieres saber cuánto puedes ahorrar?
            </h2>
            <p className="text-xl mb-6 text-orange-100">
              Calcula tus ayudas disponibles y solicita tu presupuesto personalizado sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50">
                <Phone className="w-5 h-5 mr-2" />
                Llamar: +34 900 000 000
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Mail className="w-5 h-5 mr-2" />
                Solicitar presupuesto
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}