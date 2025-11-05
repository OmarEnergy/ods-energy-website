import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle,
  HelpCircle
} from 'lucide-react'

const faqs = [
  {
    question: '¿Cuánto tiempo tarda la instalación?',
    answer: 'El tiempo varía según el tipo de instalación: viviendas (1-2 días), proyectos industriales (1-3 semanas), hortos solares (2-4 meses). Te informamos del plazo exacto en tu presupuesto.'
  },
  {
    question: '¿Qué garantía ofrecen las instalaciones?',
    answer: 'Ofrecemos 10 años de garantía en paneles y inversores, y 25 años de garantía de producción. La garantía cubre tanto materiales como mano de obra.'
  },
  {
    question: '¿Hay financiación disponible?',
    answer: 'Sí, trabajamos con entidades financieras para ofrecer financiación hasta en 10 años. También puedes aprovechar las subvenciones y ayudas disponibles.'
  },
  {
    question: '¿Qué mantenimiento requiere?',
    answer: 'Las instalaciones solares requieren muy poco mantenimiento. Recomendamos una limpieza anual de paneles y una revisión técnica cada 2-3 años.'
  },
  {
    question: '¿Puedo vender la energía sobrante?',
    answer: 'Sí, puedes vender el exceso de energía a la red eléctrica al precio vigente del mercado. Nosotros nos encargamos de gestionar toda la documentación.'
  },
  {
    question: '¿Qué pasa si me mudo?',
    answer: 'Las instalaciones son fácilmente transferibles al nuevo propietario. De hecho, aumentan el valor de la propiedad y son un atractivo para compradores.'
  },
  {
    question: '¿Funcionan con mal tiempo?',
    answer: 'Los paneles solares generan electricidad incluso con días nublados, aunque la producción es menor. Las baterías garantizan suministro continuo.'
  },
  {
    question: '¿Necesito permisos especiales?',
    answer: 'Nos encargamos de gestionar todos los permisos necesarios: licencia de obras, permisos de conexión, etc. Tú solo necesitas aprobar el presupuesto.'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envío del formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Mensaje enviado!
            </h2>
            <p className="text-gray-600 mb-6">
              Gracias por contactar con nosotros. Te responderemos en menos de 24 horas.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              Enviar otro mensaje
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre instalaciones solares? Nuestro equipo de expertos está aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="w-6 h-6 mr-3 text-orange-500" />
                Solicitar Información
              </CardTitle>
              <CardDescription>
                Completa el formulario y te contactaremos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="domestico">Autoconsumo Doméstico</option>
                    <option value="industrial">Autoconsumo Industrial</option>
                    <option value="comunitario">Huerto Solar</option>
                    <option value="bombeo">Bombeo Solar</option>
                    <option value="flotantes">Placas Flotantes</option>
                    <option value="agrovoltaica">Agrovoltaica</option>
                    <option value="otro">Otro (especificar en mensaje)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Cuéntanos sobre tu proyecto, ubicación, consumo actual..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & FAQs */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-orange-500" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">+34 900 000 000</div>
                    <div className="text-sm text-gray-600">Llamadas y WhatsApp</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">info@odsenergy.es</div>
                    <div className="text-sm text-gray-600">Consultas generales</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Alicante, España</div>
                    <div className="text-sm text-gray-600">Cobertura: toda la provincia</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-500 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">L-V: 9:00-18:00</div>
                    <div className="text-sm text-gray-600">S: 9:00-14:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-green-500 text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¿Necesitas ayuda inmediata?</h3>
                <p className="mb-4 text-green-100">
                  Chatea con nosotros por WhatsApp y te atenderemos al instante
                </p>
                <Button className="bg-white text-green-500 hover:bg-green-50">
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-start">
                      <HelpCircle className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}