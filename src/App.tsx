import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Sectors from './pages/Sectors'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Subsidies from './pages/Subsidies'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicio/:id" element={<ServiceDetail />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/sectores" element={<Sectors />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/subvenciones" element={<Subsidies />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App