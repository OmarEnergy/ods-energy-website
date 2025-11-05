import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Calendar, User, Tag, ArrowRight, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Novedades en Subvenciones 2025 para Energía Solar',
    excerpt: 'Descubre las nuevas ayudas y subvenciones disponibles para instalaciones fotovoltaicas en la Comunidad Valenciana durante 2025.',
    author: 'Antonio López',
    date: '2025-01-15',
    category: 'Subvenciones',
    readTime: '5 min',
    image: '/blog-subsidies-2025.jpg',
    tags: ['subvenciones', '2025', 'valencia', 'ayudas']
  },
  {
    id: 2,
    title: 'Mantenimiento de Placas Solares: Guía Completa 2025',
    excerpt: 'Todo lo que necesitas saber para mantener tu instalación solar en perfecto estado y maximizar su vida útil.',
    author: 'Carlos Rodríguez',
    date: '2025-01-10',
    category: 'Mantenimiento',
    readTime: '8 min',
    image: '/blog-maintenance.jpg',
    tags: ['mantenimiento', 'placas', 'guía', '2025']
  },
  {
    id: 3,
    title: 'Agrovoltaica: El Futuro de la Agricultura Sostenible',
    excerpt: 'Conoce cómo la combinación de agricultura y energía solar está revolucionando el sector primario.',
    author: 'María González',
    date: '2025-01-05',
    category: 'Agricultura',
    readTime: '6 min',
    image: '/blog-agrovoltaic.jpg',
    tags: ['agrovoltaica', 'agricultura', 'sostenible']
  },
  {
    id: 4,
    title: 'Inversores Solares: Tecnologías y Recomendaciones 2025',
    excerpt: 'Análisis comparativo de las mejores marcas y modelos de inversores fotovoltaicos disponibles en el mercado.',
    author: 'Carlos Rodríguez',
    date: '2024-12-28',
    category: 'Tecnología',
    readTime: '10 min',
    image: '/blog-inverters.jpg',
    tags: ['inversores', 'tecnología', 'comparativa']
  },
  {
    id: 5,
    title: 'Baterías para Autoconsumo: ¿Vale la Pena la Inversión?',
    excerpt: 'Analizamos la viabilidad económica y técnica de las baterías para almacenamiento de energía solar.',
    author: 'María González',
    date: '2024-12-20',
    category: 'Tecnología',
    readTime: '7 min',
    image: '/blog-batteries.jpg',
    tags: ['baterías', 'autoconsumo', 'almacenamiento']
  },
  {
    id: 6,
    title: 'Placas Flotantes: Innovación en Aprovechamiento del Agua',
    excerpt: 'Descubre las ventajas de las instalaciones fotovoltaicas sobre embalses y láminas de agua.',
    author: 'Antonio López',
    date: '2024-12-15',
    category: 'Innovación',
    readTime: '5 min',
    image: '/blog-floating.jpg',
    tags: ['flotantes', 'embalses', 'innovación']
  },
  {
    id: 7,
    title: 'Normativa y Permisos para Instalaciones Solares 2025',
    excerpt: 'Guía actualizada sobre todos los trámites y permisos necesarios para instalar paneles solares.',
    author: 'Carlos Rodríguez',
    date: '2024-12-10',
    category: 'Legal',
    readTime: '12 min',
    image: '/blog-permits.jpg',
    tags: ['normativa', 'permisos', 'trámites']
  },
  {
    id: 8,
    title: 'ROI de la Energía Solar: Calculadora de Retorno de Inversión',
    excerpt: 'Aprende a calcular el retorno de inversión de tu instalación solar y factores que influyen en el ROI.',
    author: 'María González',
    date: '2024-12-05',
    category: 'Economía',
    readTime: '9 min',
    image: '/blog-roi.jpg',
    tags: ['roi', 'calculadora', 'inversión', 'ahorro']
  }
]

const categories = [
  { name: 'Todas', count: blogPosts.length },
  { name: 'Subvenciones', count: blogPosts.filter(post => post.category === 'Subvenciones').length },
  { name: 'Tecnología', count: blogPosts.filter(post => post.category === 'Tecnología').length },
  { name: 'Mantenimiento', count: blogPosts.filter(post => post.category === 'Mantenimiento').length },
  { name: 'Agricultura', count: blogPosts.filter(post => post.category === 'Agricultura').length },
  { name: 'Legal', count: blogPosts.filter(post => post.category === 'Legal').length },
  { name: 'Innovación', count: blogPosts.filter(post => post.category === 'Innovación').length }
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Blog ODS Energy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades, tendencias y consejos 
            sobre energía solar fotovoltaica.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8">
          <p className="text-gray-600">
            Mostrando {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'Todas' && ` en "${selectedCategory}"`}
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group cursor-pointer">
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-orange-500 to-green-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500">
                  Leer artículo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-600 mb-6">
              Intenta con otros términos de búsqueda o selecciona una categoría diferente.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('Todas')
              }}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <Card className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Mantente al día con nuestras novedades
            </h2>
            <p className="text-xl mb-6 text-orange-100">
              Suscríbete a nuestro newsletter y recibe los últimos artículos directamente en tu email
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-orange-500 hover:bg-orange-50 px-6">
                Suscribirse
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}