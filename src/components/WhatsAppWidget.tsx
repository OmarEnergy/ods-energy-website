import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = '34900000000' // Reemplazar con número real
    const message = encodeURIComponent('Hola, me interesa conocer más sobre las instalaciones solares de ODS Energy.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">ODS Energy</h3>
              <p className="text-sm text-gray-600 mt-1">
                ¡Hola! 👋 ¿Te gustaría hablar con un especialista en energía solar?
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Iniciar conversación
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-colors"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        ¿Necesitas ayuda? Chatea con nosotros
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}