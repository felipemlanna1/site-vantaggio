import { useInView } from 'react-intersection-observer'
import { MusicNote, Wine, Baby, WifiHigh, CreditCard, WhatsappLogo } from '@phosphor-icons/react'
import './Experiencia.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Vantaggio%20Restaurante.'

const features = [
  {
    icon: MusicNote,
    title: 'Musica ao Vivo',
    desc: 'Noites especiais com música ao vivo criando a atmosfera perfeita para seu jantar',
  },
  {
    icon: Wine,
    title: 'Carta de Vinhos',
    desc: 'Selecao curada de vinhos nacionais e importados para harmonizar com cada prato',
  },
  {
    icon: Baby,
    title: 'Espaco Kids',
    desc: 'Area dedicada para os pequenos se divertirem enquanto você aprecia o rodizio',
  },
  {
    icon: WifiHigh,
    title: 'Wi-Fi Gratis',
    desc: 'Internet de alta velocidade em todo o restaurante para sua comodidade',
  },
  {
    icon: CreditCard,
    title: 'Todas as Bandeiras',
    desc: 'Aceitamos cartao de credito, debito, Pix e dinheiro. Parcelamos no cartao',
  },
]

export default function Experiencia() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="experiencia" id="experiencia" ref={ref}>
      <div className="experiencia__bg">
        <img
          src="./images/grupo-amigos.jpg"
          alt="Grupo de amigos jantando no Vantaggio"
          loading="lazy"
        />
        <div className="experiencia__overlay" />
      </div>

      <div className="container experiencia__content">
        <div className={`experiencia__text reveal ${inView ? 'revealed' : ''}`}>
          <span className="section-label">A Experiencia</span>
          <h2 className="section-title">
            Muito mais que um <em className="text-gold">rodizio</em>
          </h2>
          <p className="experiencia__desc">
            No Vantaggio, cada detalhe foi pensado para transformar sua refeicao
            em um momento especial. Ambiente aconchegante, música ao vivo e o
            melhor atendimento de Canasvieiras.
          </p>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsappLogo size={18} weight="fill" />
            <span>Reservar Mesa</span>
          </a>
        </div>

        <div className="experiencia__features">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className={`experiencia__feature reveal ${inView ? 'revealed' : ''}`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="experiencia__feature-icon">
                  <Icon size={24} weight="duotone" />
                </div>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
