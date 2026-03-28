import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rodizio from './components/Rodizio'
import Cardapio from './components/Cardapio'
import Experiencia from './components/Experiencia'
import Depoimentos from './components/Depoimentos'
import Reserva from './components/Reserva'
import Localizacao from './components/Localizacao'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vantaggio Restaurante | Rodizio Gourmet em Canasvieiras</title>
        <meta name="description" content="Pioneiro e 1o Rodizio de Mini Hamburguer Gourmet de Florianópolis. Pizzas artesanais, massas caseiras, música ao vivo. Canasvieiras, SC." />
      </Helmet>
      <Hero />
      <About />
      <Rodizio />
      <Cardapio />
      <Experiencia />
      <Depoimentos />
      <Reserva />
      <Localizacao />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
