import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { WhatsappLogo, ForkKnife } from '@phosphor-icons/react'
import './Cardapio.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Vantaggio%20Restaurante.'
const IFOOD_URL = 'https://www.ifood.com.br'

const menuCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'hamburgueres', label: 'Hamburgueres' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'massas', label: 'Massas' },
  { id: 'bebidas', label: 'Bebidas' },
]

const menuItems = [
  {
    category: 'hamburgueres',
    name: 'Smash Angus',
    desc: 'Blend angus 120g, cheddar ingles derretido, cebola caramelizada, picles artesanal',
    image: './images/hamburguer-gourmet.jpg',
    tag: 'Mais Pedido',
  },
  {
    category: 'hamburgueres',
    name: 'Costela BBQ',
    desc: 'Costela desfiada 14h, molho BBQ defumado, coleslaw, cebola crispy',
    image: './images/hamburguer-2.jpg',
    tag: null,
  },
  {
    category: 'hamburgueres',
    name: 'Trufado',
    desc: 'Blend premium, queijo brie, cogumelos salteados, azeite trufado, rucula',
    image: null,
    tag: 'Chef',
  },
  {
    category: 'pizzas',
    name: 'Margherita DOP',
    desc: 'Molho San Marzano, mucarela de bufala, manjericao fresco, azeite extra virgem',
    image: './images/pizza-artesanal.jpg',
    tag: 'Classica',
  },
  {
    category: 'pizzas',
    name: 'Pepperoni',
    desc: 'Pepperoni importado, mucarela, oregano fresco, pimenta calabresa',
    image: './images/pizza-forno.jpg',
    tag: 'Mais Pedida',
  },
  {
    category: 'pizzas',
    name: 'Quatro Queijos',
    desc: 'Gorgonzola, brie, parmesao, mucarela com fio de mel trufado',
    image: null,
    tag: null,
  },
  {
    category: 'massas',
    name: 'Fettuccine Bolonhesa',
    desc: 'Massa fresca ao ragu de carne cozido lentamente por 6 horas com ervas frescas',
    image: './images/massa-caseira.jpg',
    tag: null,
  },
  {
    category: 'massas',
    name: 'Ravioli de Ricota',
    desc: 'Recheio cremoso de ricota e espinafre, molho de tomate fresco, parmesao ralado',
    image: './images/massa-2.jpg',
    tag: 'Artesanal',
  },
  {
    category: 'massas',
    name: 'Carbonara',
    desc: 'Penne al dente, guanciale crocante, gema de ovo caipira, pecorino romano',
    image: null,
    tag: 'Italiana',
  },
  {
    category: 'bebidas',
    name: 'Vinho da Casa',
    desc: 'Selecao especial de vinhos tintos e brancos para harmonizar com seu rodizio',
    image: null,
    tag: null,
  },
  {
    category: 'bebidas',
    name: 'Chopp Artesanal',
    desc: 'Chopp gelado tipo Pilsen e IPA, direto do barril para sua mesa',
    image: null,
    tag: null,
  },
  {
    category: 'bebidas',
    name: 'Drinks Autorais',
    desc: 'Coqueteis exclusivos preparados pelo nosso bartender com ingredientes frescos',
    image: null,
    tag: 'Exclusivo',
  },
]

export default function Cardapio() {
  const [filter, setFilter] = useState('all')
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const filtered = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter)

  return (
    <section className="cardapio" id="cardapio" ref={ref}>
      <div className="container">
        <div className={`cardapio__header reveal ${inView ? 'revealed' : ''}`}>
          <span className="section-label">Cardapio</span>
          <h2 className="section-title">
            Sabores que <em className="text-gold">encantam</em>
          </h2>
          <p className="section-subtitle">
            Rodizio completo com hamburgueres, pizzas e massas. Tudo a vontade.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`cardapio__filters reveal delay-1 ${inView ? 'revealed' : ''}`}>
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              className={`cardapio__filter ${filter === cat.id ? 'cardapio__filter--active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="cardapio__grid">
          {filtered.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className={`cardapio__card reveal ${inView ? 'revealed' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
            >
              {item.image ? (
                <div className="cardapio__card-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  {item.tag && <span className="cardapio__card-tag">{item.tag}</span>}
                </div>
              ) : (
                <div className="cardapio__card-placeholder">
                  <ForkKnife size={32} weight="duotone" />
                  {item.tag && <span className="cardapio__card-tag">{item.tag}</span>}
                </div>
              )}
              <div className="cardapio__card-info">
                <h4 className="cardapio__card-name">{item.name}</h4>
                <p className="cardapio__card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing info */}
        <div className={`cardapio__pricing reveal delay-3 ${inView ? 'revealed' : ''}`}>
          <div className="cardapio__pricing-box">
            <span className="cardapio__pricing-label">Rodizio Completo</span>
            <div className="cardapio__pricing-value">
              <span className="cardapio__pricing-from">a partir de</span>
              <span className="cardapio__pricing-price">R$ 79,90</span>
              <span className="cardapio__pricing-per">/pessoa</span>
            </div>
            <p className="cardapio__pricing-note">
              Hamburgueres + Pizzas + Massas. Coma a vontade.
            </p>
            <div className="cardapio__pricing-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WhatsappLogo size={18} weight="fill" />
                <span>Reservar Mesa</span>
              </a>
              <a href={IFOOD_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <span>Pedir no iFood</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
