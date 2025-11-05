import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, AlertCircle, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Página no encontrada
            </h2>
            <p className="text-gray-600 mb-8">
              La página que buscas no existe o ha sido movida. 
              Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
            </p>
            
            <div className="space-y-4">
              <Link to="/">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Home className="w-4 h-4 mr-2" />
                  Ir al inicio
                </Button>
              </Link>
              
              <div className="grid grid-cols-2 gap-3">
                <Link to="/servicios">
                  <Button variant="outline" className="w-full">
                    Servicios
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button variant="outline" className="w-full">
                    Contacto
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Quick Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Páginas más visitadas</h3>
          <div className="space-y-2">
            <Link to="/servicios" className="block text-orange-500 hover:text-orange-600 transition-colors">
              Nuestros servicios solares
            </Link>
            <Link to="/calculadora" className="block text-orange-500 hover:text-orange-600 transition-colors">
              Calculadora de ahorro
            </Link>
            <Link to="/portfolio" className="block text-orange-500 hover:text-orange-600 transition-colors">
              Portfolio de proyectos
            </Link>
            <Link to="/subvenciones" className="block text-orange-500 hover:text-orange-600 transition-colors">
              Subvenciones disponibles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}