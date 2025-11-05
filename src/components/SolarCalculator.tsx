import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Home as HomeIcon, Building2, Sprout, TrendingUp, Calculator, Share2, Phone, Mail } from 'lucide-react'

interface CalculatorResult {
  installationType: string
  panelsNeeded: number
  powerCapacity: string
  monthlySavings: number
  annualSavings: number
  totalInvestment: number
  roiYears: number
  withBatteries: boolean
}

const INSTALLATION_TYPES = [
  {
    id: 'domestic',
    name: 'Residencial',
    icon: HomeIcon,
    description: 'Viviendas unifamiliares y apartamentos',
    pricePerPanel: 350,
    averagePanels: 6
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: Building2,
    description: 'Empresas y fábricas',
    pricePerPanel: 400,
    averagePanels: 50
  },
  {
    id: 'agricultural',
    name: 'Agrícola',
    icon: Sprout,
    description: 'Fincas y explotaciones agrícolas',
    pricePerPanel: 320,
    averagePanels: 20
  }
]

export default function SolarCalculator() {
  const [formData, setFormData] = useState({
    installationType: 'domestic',
    currentBill: 100,
    hasBatteries: false,
    region: 'alicante'
  })
  const [results, setResults] = useState<CalculatorResult | null>(null)
  const [showShareModal, setShowShareModal] = useState(false)

  const calculateInstallation = () => {
    const installation = INSTALLATION_TYPES.find(type => type.id === formData.installationType)
    if (!installation) return

    // Cálculos simplificados pero realistas
    const panelsNeeded = Math.ceil(formData.currentBill / 100) * installation.averagePanels
    const totalInvestment = panelsNeeded * installation.pricePerPanel + (formData.hasBatteries ? 3000 : 0)
    
    const monthlySavings = formData.currentBill * 0.75 // 75% de ahorro promedio
    const annualSavings = monthlySavings * 12
    const roiYears = Math.ceil(totalInvestment / annualSavings)
    
    const result: CalculatorResult = {
      installationType: installation.name,
      panelsNeeded,
      powerCapacity: `${(panelsNeeded * 0.3).toFixed(1)} kWp`,
      monthlySavings,
      annualSavings,
      totalInvestment,
      roiYears,
      withBatteries: formData.hasBatteries
    }

    setResults(result)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateInstallation()
  }

  const handleShare = () => {
    setShowShareModal(true)
  }

  const shareToWhatsApp = () => {
    const message = `🏠 *Calculadora ODS Energy*\n\n` +
      `📊 *Resultados:*\n` +
      `• Tipo: ${results?.installationType}\n` +
      `• Paneles: ${results?.panelsNeeded} unidades\n` +
      `• Potencia: ${results?.powerCapacity}\n` +
      `• Inversión: €${results?.totalInvestment.toLocaleString()}\n` +
      `• Ahorro anual: €${results?.annualSavings.toLocaleString()}\n` +
      `• ROI: ${results?.roiYears} años\n\n` +
      `¡Quiero más información sobre esta instalación!`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/34900000000?text=${encodedMessage}`, '_blank')
  }

  const shareToEmail = () => {
    const subject = encodeURIComponent('Resultados Calculadora Solar - ODS Energy')
    const body = encodeURIComponent(
      `Hola,\n\n` +
      `Aquí tienes los resultados de mi calculadora solar:\n\n` +
      `Tipo de instalación: ${results?.installationType}\n` +
      `Número de paneles: ${results?.panelsNeeded}\n` +
      `Potencia: ${results?.powerCapacity}\n` +
      `Inversión total: €${results?.totalInvestment.toLocaleString()}\n` +
      `Ahorro anual: €${results?.annualSavings.toLocaleString()}\n` +
      `ROI: ${results?.roiYears} años\n\n` +
      `Me gustaría recibir más información sobre esta instalación.\n\n` +
      `Saludos`
    )
    window.open(`mailto:info@odsenergy.es?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-2xl border-0">
        <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center justify-center">
            <Calculator className="w-8 h-8 mr-3" />
            Calculadora de Ahorro Solar
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tipo de instalación */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Tipo de instalación
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {INSTALLATION_TYPES.map((type) => {
                  const Icon = type.icon
                  return (
                    <label key={type.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="installationType"
                        value={type.id}
                        checked={formData.installationType === type.id}
                        onChange={(e) => setFormData({...formData, installationType: e.target.value})}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg text-center transition-all ${
                        formData.installationType === type.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <Icon className={`w-8 h-8 mx-auto mb-2 ${
                          formData.installationType === type.id ? 'text-orange-500' : 'text-gray-400'
                        }`} />
                        <h3 className="font-semibold text-gray-900">{type.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Factura eléctrica mensual */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Factura eléctrica mensual (€)
              </label>
              <input
                type="number"
                min="50"
                max="1000"
                value={formData.currentBill}
                onChange={(e) => setFormData({...formData, currentBill: Number(e.target.value)})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Ej: 120"
              />
              <p className="text-sm text-gray-500 mt-1">
                Promedio de facturas de los últimos 3 meses
              </p>
            </div>

            {/* Baterías */}
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasBatteries}
                  onChange={(e) => setFormData({...formData, hasBatteries: e.target.checked})}
                  className="mr-3 h-4 w-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Incluir baterías (autoconsumo 24h)
                </span>
                <span className="ml-2 text-sm text-orange-600">+€3.000</span>
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600">
              <TrendingUp className="w-5 h-5 mr-2" />
              Calcular mi ahorro
            </Button>
          </form>

          {/* Resultados */}
          {results && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-green-800">Resultados de tu instalación</h3>
                <Button onClick={handleShare} variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{results.panelsNeeded}</div>
                  <div className="text-sm text-gray-600">Paneles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{results.powerCapacity}</div>
                  <div className="text-sm text-gray-600">Potencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    €{results.totalInvestment.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Inversión</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{results.roiYears}</div>
                  <div className="text-sm text-gray-600">Años ROI</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Ahorro mensual:</span>
                  <span className="font-bold text-green-600">€{results.monthlySavings.toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ahorro anual:</span>
                  <span className="font-bold text-green-600 text-lg">€{results.annualSavings.toFixed(0)}</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal de compartir */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Compartir resultados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={shareToWhatsApp} className="w-full bg-green-500 hover:bg-green-600">
                <Phone className="w-4 h-4 mr-2" />
                Enviar a mi WhatsApp
              </Button>
              <Button onClick={shareToEmail} variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Enviar a mi Email
              </Button>
              <Button 
                onClick={() => setShowShareModal(false)} 
                variant="ghost" 
                className="w-full"
              >
                Cerrar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}