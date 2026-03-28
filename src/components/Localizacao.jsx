import { useInView } from 'react-intersection-observer'
import { MapPin, NavigationArrow, Car, WhatsappLogo } from '@phosphor-icons/react'
import './Localizacao.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20saber%20como%20chegar%20no%20Vantaggio%20Restaurante.'
const MAPS_URL = 'https://maps.google.com/?q=Vantaggio+Restaurante+Canasvieiras+Florianópolis'

export default function Localização() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="localizacao" id="localizacao" ref={ref}>
      <div className="localizacao__map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5!2d-48.4622!3d-27.4282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI1JzQyLjEiUyA0OMKwMjcnNDMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2) saturate(0.3)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Vantaggio Restaurante"
        />
        <div className="localizacao__map-overlay" />
      </div>

      <div className="container">
        <div className={`localização__card reveal ${inView ? 'revealed' : ''}`}>
          <div className="localizacao__card-pin">
            <MapPin size={28} weight="fill" />
          </div>

          <h3 className="localizacao__card-title">Vantaggio Restaurante</h3>
          <p className="localizacao__card-address">
            Rua Professor Milton Leite da Costa, 586
            <br />Canasvieiras, Florianópolis - SC
          </p>

          <div className="localizacao__card-details">
            <div className="localizacao__card-detail">
              <Car size={18} weight="duotone" />
              <span>Estacionamento na rua e no entorno</span>
            </div>
            <div className="localizacao__card-detail">
              <NavigationArrow size={18} weight="duotone" />
              <span>5 min da Praia de Canasvieiras</span>
            </div>
          </div>

          <div className="localizacao__card-actions">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary localização__btn">
              <NavigationArrow size={16} weight="bold" />
              <span>Abrir no Maps</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary localização__btn">
              <WhatsappLogo size={16} weight="fill" />
              <span>Como Chegar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Beach image strip */}
      <div className={`localização__beach reveal delay-2 ${inView ? 'revealed' : ''}`}>
        <img src="./images/canasvieiras-praia.jpg" alt="Praia de Canasvieiras" loading="lazy" />
        <div className="localizacao__beach-overlay" />
        <p className="localizacao__beach-text">A poucos passos da praia de Canasvieiras</p>
      </div>
    </section>
  )
}
