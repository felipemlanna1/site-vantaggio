import { useState, useEffect } from 'react'
import { List, X, WhatsappLogo } from '@phosphor-icons/react'
import './Navbar.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Vantaggio%20Restaurante.'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#rodizio', label: 'Rodizio' },
  { href: '#cardápio', label: 'Cardápio' },
  { href: '#experiência', label: 'Experiencia' },
  { href: '#depoimentos', label: 'Avaliacoes' },
  { href: '#reserva', label: 'Reserva' },
  { href: '#localização', label: 'Como Chegar' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="./images/logo.svg" alt="Vantaggio Restaurante" />
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta-mobile"
            onClick={() => setMenuOpen(false)}
          >
            <WhatsappLogo size={20} weight="fill" />
            Reservar Mesa
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
        >
          Reservar Mesa
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
