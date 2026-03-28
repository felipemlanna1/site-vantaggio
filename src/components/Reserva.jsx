import { useInView } from 'react-intersection-observer'
import { WhatsappLogo, Phone, InstagramLogo, CalendarBlank, Clock, UsersThree } from '@phosphor-icons/react'
import './Reserva.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Vantaggio%20Restaurante.'
const IFOOD_URL = 'https://www.ifood.com.br'

export default function Reserva() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="reserva" id="reserva" ref={ref}>
      <div className="container">
        <div className="reserva__grid">
          <div className={`reserva__info reveal ${inView ? 'revealed' : ''}`}>
            <span className="section-label">Reservas</span>
            <h2 className="section-title">
              Garanta sua <em className="text-gold">mesa</em>
            </h2>
            <p className="reserva__desc">
              Para garantir a melhor experiencia, recomendamos fazer sua reserva com
              antecedencia, especialmente aos finais de semana e feriados.
              Entre em contato pelo WhatsApp ou telefone.
            </p>

            <div className="reserva__details">
              <div className="reserva__detail">
                <CalendarBlank size={20} weight="duotone" />
                <div>
                  <strong>Aberto todos os dias</strong>
                  <span>Segunda a domingo</span>
                </div>
              </div>
              <div className="reserva__detail">
                <Clock size={20} weight="duotone" />
                <div>
                  <strong>18h00 as 23h30</strong>
                  <span>Cozinha fecha as 23h</span>
                </div>
              </div>
              <div className="reserva__detail">
                <UsersThree size={20} weight="duotone" />
                <div>
                  <strong>Grupos e eventos</strong>
                  <span>Consulte disponibilidade</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`reserva__cta-box reveal delay-2 ${inView ? 'revealed' : ''}`}>
            <div className="reserva__cta-card reserva__cta-card--whatsapp">
              <WhatsappLogo size={32} weight="duotone" />
              <h3>WhatsApp</h3>
              <p>Reserva rapida e facil pelo nosso WhatsApp</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary reserva__btn">
                <WhatsappLogo size={18} weight="fill" />
                <span>(48) 98455-2026</span>
              </a>
            </div>

            <div className="reserva__cta-card reserva__cta-card--phone">
              <Phone size={32} weight="duotone" />
              <h3>Telefone</h3>
              <p>Ligue diretamente para o restaurante</p>
              <a href="tel:+5548984552026" className="btn-secondary reserva__btn">
                <Phone size={18} weight="bold" />
                <span>Ligar Agora</span>
              </a>
            </div>

            <div className="reserva__cta-card reserva__cta-card--ifood">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="reserva__ifood-icon">
                <rect width="32" height="32" rx="8" fill="#EA1D2C" />
                <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">iF</text>
              </svg>
              <h3>iFood</h3>
              <p>Peca delivery pelo iFood</p>
              <a href={IFOOD_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary reserva__btn reserva__btn--ifood">
                <span>Pedir no iFood</span>
              </a>
            </div>

            <div className="reserva__cta-card reserva__cta-card--instagram">
              <InstagramLogo size={32} weight="duotone" />
              <h3>Instagram</h3>
              <p>Siga-nos para novidades e promocoes</p>
              <a href="https://instagram.com/vantaggiorestaurante" target="_blank" rel="noopener noreferrer" className="btn-secondary reserva__btn">
                <InstagramLogo size={18} weight="bold" />
                <span>@vantaggiorestaurante</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
