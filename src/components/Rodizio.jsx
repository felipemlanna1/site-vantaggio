import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Hamburger, Pizza, CookingPot, ArrowRight, WhatsappLogo } from '@phosphor-icons/react'
import './Rodizio.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Vantaggio%20Restaurante.'

const categories = [
  {
    id: 'hamburgueres',
    icon: Hamburger,
    title: 'Mini Hamburgueres',
    subtitle: 'Gourmet Artesanais',
    description: 'Nosso carro-chefe e orgulho: o 1o rodizio de mini hamburgueres gourmet de Florianopolis. Cada mini burguer e uma explosao de sabor com blend de carnes premium, queijos especiais e molhos autorais.',
    image: './images/hamburguer-gourmet.jpg',
    items: ['Blend Angus com cheddar defumado', 'Smash burguer com bacon crocante', 'Costela desfiada com geleia de pimenta', 'Vegano com cogumelos grelhados', 'Blue cheese com cebola caramelizada', 'Caprese com tomate seco e rucula'],
    accent: '#E67E22',
  },
  {
    id: 'pizzas',
    icon: Pizza,
    title: 'Pizzas Artesanais',
    subtitle: 'Massa Fina e Crocante',
    description: 'Massas feitas na hora com farinha especial importada, fermentacao natural de 48 horas e assadas em forno de alta temperatura. O resultado: crocancia perfeita por fora, maciez por dentro.',
    image: './images/pizza-artesanal.jpg',
    items: ['Margherita com mucarela de bufala', 'Pepperoni com oregano fresco', 'Quatro Queijos com mel trufa', 'Parma com rucula e parmesao', 'Calabresa com cebola roxa', 'Funghi com mix de cogumelos'],
    accent: '#C0392B',
  },
  {
    id: 'massas',
    icon: CookingPot,
    title: 'Massas Caseiras',
    subtitle: 'Frescas e Irresistiveis',
    description: 'Massas artesanais produzidas diariamente em nossa cozinha. Cada receita combina a tradicao italiana com toques brasileiros, usando ingredientes frescos e selecionados.',
    image: './images/massa-caseira.jpg',
    items: ['Fettuccine ao ragu bolonhesa', 'Penne alla carbonara', 'Ravioli recheado de ricota', 'Nhoque ao pesto genovese', 'Tagliatelle com frutos do mar', 'Lasanha quatro queijos'],
    accent: '#27AE60',
  },
]

export default function Rodizio() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const current = categories[active]
  const Icon = current.icon

  return (
    <section className="rodizio" id="rodizio" ref={ref}>
      <div className="container">
        <div className={`rodizio__header reveal ${inView ? 'revealed' : ''}`}>
          <span className="section-label">O Rodizio</span>
          <h2 className="section-title">Tres experiencias em <em className="text-gold">um so rodizio</em></h2>
          <p className="section-subtitle">Coma a vontade: mini hamburgueres, pizzas e massas.</p>
        </div>

        {/* Category Tabs */}
        <div className={`rodizio__tabs reveal delay-1 ${inView ? 'revealed' : ''}`}>
          {categories.map((cat, i) => {
            const TabIcon = cat.icon
            return (
              <button
                key={cat.id}
                className={`rodizio__tab ${active === i ? 'rodizio__tab--active' : ''}`}
                onClick={() => setActive(i)}
                style={active === i ? { '--tab-accent': cat.accent } : {}}
              >
                <TabIcon size={24} weight={active === i ? 'duotone' : 'regular'} />
                <span>{cat.title}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="rodizio__content" key={current.id}>
          <div className="rodizio__image-col">
            <div className="rodizio__image-container">
              <img
                src={current.image}
                alt={current.title}
                loading="lazy"
              />
              <div className="rodizio__image-badge" style={{ background: current.accent }}>
                <Icon size={20} weight="fill" color="#fff" />
              </div>
            </div>
          </div>

          <div className="rodizio__info-col">
            <div className="rodizio__info-header">
              <span className="rodizio__info-subtitle">{current.subtitle}</span>
              <h3 className="rodizio__info-title">{current.title}</h3>
            </div>
            <p className="rodizio__info-desc">{current.description}</p>

            <ul className="rodizio__items">
              {current.items.map((item, i) => (
                <li key={i} className="rodizio__item">
                  <ArrowRight size={14} weight="bold" style={{ color: current.accent }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappLogo size={18} weight="fill" />
              <span>Quero Reservar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
