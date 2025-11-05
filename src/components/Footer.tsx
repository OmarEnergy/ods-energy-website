import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Autoconsumo Doméstico', href: '/servicio/autoconsumo-domestico' },
    { name: 'Autoconsumo Industrial', href: '/servicio/autoconsumo-industrial' },
    { name: 'Huerto Solar', href: '/servicio/huerto-solar' },
    { name: 'Bombeo Solar', href: '/servicio/bombeo-solar' },
    { name: 'Placas Flotantes', href: '/servicio/placas-flotantes' },
    { name: 'Agrovoltaica', href: '/servicio/agrovoltaica' },
  ],
  company: [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Sectores', href: '/sectores' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Subvenciones', href: '/subvenciones' },
    { name: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos de Servicio', href: '/terminos' },
    { name: 'Cookies', href: '/cookies' },
  ],
}

const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OE</span>
                </div>
                <span className="ml-3 text-xl font-bold text-white">ODS Energy</span>
              </div>
              <p className="mt-4 text-gray-300 text-sm">
                Empresa líder en energía solar fotovoltaica en Alicante. Más de 500 proyectos completados y 1000+ clientes satisfechos.
              </p>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+34 900 000 000</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@odsenergy.es</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Alicante, España</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>L-V 9:00-18:00, S 9:00-14:00</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Servicios</h3>
              <ul className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Empresa</h3>
              <ul className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Síguenos</h3>
              <div className="mt-6 flex space-x-6">
                {social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>
              
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mt-8">Legal</h4>
              <ul className="mt-4 space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-xs text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 ODS Energy. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Hecho con ❤️ en Alicante, España
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}