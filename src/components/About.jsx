import { useInView } from 'react-intersection-observer'
import { Medal, Users, Clock, Fire } from '@phosphor-icons/react'
import './About.css'

const highlights = [
  {
    icon: Medal,
    title: 'Pioneiro',
    desc: '1o rodizio de mini hamburguer gourmet da regiao de Florianópolis',
  },
  {
    icon: Fire,
    title: 'Forno a Lenha',
    desc: 'Pizzas de massa fina e crocante, assadas na hora em forno artesanal',
  },
  {
    icon: Users,
    title: 'Para Todos',
    desc: 'Ambiente acolhedor para casais, familias e grupos de amigos',
  },
  {
    icon: Clock,
    title: 'Todos os Dias',
    desc: 'Atendimento das 18h as 23h30, aberto todos os dias da semana',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className="about" id="sobre" ref={ref}>
      <div className="about__inner container">
        <div className={`about__text reveal ${inView ? 'revealed' : ''}`}>
          <span className="section-label">Nossa Historia</span>
          <h2 className="section-title">
            Onde cada sabor conta uma <em className="text-gold">historia</em>
          </h2>
          <p className="about__desc">
            O Vantaggio nasceu da paixao por reunir o melhor da gastronomia
            em uma unica experiência. Somos o pioneiro e 1o Rodizio de Mini Hamburguer
            Gourmet da regiao, unindo a suculencia do hamburguer artesanal a
            tradicao das pizzas crocantes e massas irresistiveis.
          </p>
          <p className="about__desc">
            Em Canasvieiras, a poucos passos do mar, criamos um espaco onde cada
            detalhe foi pensado para proporcionar momentos memoraveis.
            Com ingredientes frescos e de alta qualidade, cada prato e
            preparado com dedicação e carinho.
          </p>
        </div>

        <div className="about__image-wrapper">
          <div className={`about__image reveal delay-2 ${inView ? 'revealed' : ''}`}>
            <img
              src="./images/restaurante-ambiente.jpg"
              alt="Ambiente interno do Vantaggio Restaurante"
              loading="lazy"
            />
            <div className="about__image-accent" />
          </div>
        </div>
      </div>

      <div className="about__highlights container">
        {highlights.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className={`about__highlight reveal ${inView ? 'revealed' : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="about__highlight-icon">
                <Icon size={28} weight="duotone" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
