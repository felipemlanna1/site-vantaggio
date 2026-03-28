import { useEffect, useState, useRef } from 'react'
import { WhatsappLogo, ArrowDown, Star } from '@phosphor-icons/react'
import './Hero.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Vantaggio%20Restaurante.'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const steamRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img
          src="./images/hero-bg.jpg"
          alt="Ambiente do Vantaggio Restaurante"
          className="hero__bg-img"
          loading="eager"
        />
        <div className="hero__overlay" />
      </div>

      {/* Animated steam particles */}
      <div className="hero__steam" ref={steamRef}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`steam-particle steam-particle--${i + 1}`} />
        ))}
      </div>

      <div className="hero__content container">
        <div className={`hero__badge reveal ${loaded ? 'revealed' : ''}`}>
          <Star size={14} weight="fill" />
          <span>4.5</span>
          <span className="hero__badge-sep">|</span>
          <span>26K seguidores</span>
        </div>

        <h1 className={`hero__title reveal delay-1 ${loaded ? 'revealed' : ''}`}>
          O Primeiro Rodizio
          <br />
          <em className="text-gold">Gourmet</em> de Floripa
        </h1>

        <p className={`hero__subtitle reveal delay-2 ${loaded ? 'revealed' : ''}`}>
          Mini hamburgueres artesanais, pizzas de massa fina crocante
          <br className="hide-mobile" />
          e massas caseiras irresistiveis. Tudo em um so rodizio.
        </p>

        <div className={`hero__actions reveal delay-3 ${loaded ? 'revealed' : ''}`}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsappLogo size={20} weight="fill" />
            <span>Reservar Mesa</span>
          </a>
          <a href="#cardapio" className="btn-secondary">
            <span>Ver Cardapio</span>
          </a>
        </div>

        <div className={`hero__info reveal delay-4 ${loaded ? 'revealed' : ''}`}>
          <div className="hero__info-item">
            <span className="hero__info-label">Aberto todos os dias</span>
            <span className="hero__info-value">18h - 23h30</span>
          </div>
          <div className="hero__info-divider" />
          <div className="hero__info-item">
            <span className="hero__info-label">Canasvieiras</span>
            <span className="hero__info-value">Florianopolis, SC</span>
          </div>
        </div>
      </div>

      <a href="#sobre" className="hero__scroll">
        <span>Descubra</span>
        <ArrowDown size={16} weight="bold" />
      </a>
    </section>
  )
}
