import { useState, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { Star, Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react'
import './Depoimentos.css'

const reviews = [
  {
    name: 'Maria Fernanda S.',
    rating: 5,
    text: 'Melhor rodizio que ja fui em Floripa! Os mini hamburgueres sao incriveis, cada um com um sabor diferente. O atendimento e impecavel e o ambiente super aconchegante. Voltarei com certeza!',
    date: 'Fev 2026',
    source: 'Google',
  },
  {
    name: 'Ricardo B.',
    rating: 5,
    text: 'Levei minha familia inteira e todos amaram. A pizza de massa fina e espetacular, crocante na medida. O espaco kids deixou as criancas felizes. Preco justo pelo que oferece.',
    date: 'Jan 2026',
    source: 'Google',
  },
  {
    name: 'Juliana C.',
    rating: 5,
    text: 'Que surpresa incrivel! O rodizio de mini hamburgueres e algo unico, nunca tinha visto algo assim. A qualidade dos ingredientes e notavel. O molho trufa e divino!',
    date: 'Mar 2026',
    source: 'TripAdvisor',
  },
  {
    name: 'Eduardo M.',
    rating: 4,
    text: 'Ambiente muito agradável, com música ao vivo que completa a experiência. As massas caseiras sao maravilhosas, especialmente o fettuccine. Recomendo para um jantar romântico.',
    date: 'Fev 2026',
    source: 'Google',
  },
  {
    name: 'Ana Paula R.',
    rating: 5,
    text: 'Turista de SP e esse restaurante foi o ponto alto da viagem. Rodizio completo com opcoes para todos os gostos. A vista de Canasvieiras a noite e linda. Nota 10!',
    date: 'Jan 2026',
    source: 'Instagram',
  },
]

export default function Depoimentos() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning])

  const next = useCallback(() => goTo((current + 1) % reviews.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + reviews.length) % reviews.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const review = reviews[current]

  return (
    <section className="depoimentos" id="depoimentos" ref={ref}>
      <div className="container">
        <div className={`depoimentos__header reveal ${inView ? 'revealed' : ''}`}>
          <span className="section-label">Avaliacoes</span>
          <h2 className="section-title">
            O que nossos <em className="text-gold">clientes</em> dizem
          </h2>
        </div>

        <div className={`depoimentos__carousel reveal delay-2 ${inView ? 'revealed' : ''}`}>
          <button className="depoimentos__arrow" onClick={prev} aria-label="Anterior">
            <CaretLeft size={24} weight="bold" />
          </button>

          <div className={`depoimentos__card ${isTransitioning ? 'depoimentos__card--fade' : ''}`}>
            <Quotes size={40} weight="duotone" className="depoimentos__quote-icon" />

            <div className="depoimentos__stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  weight="fill"
                  className={i < review.rating ? 'star--filled' : 'star--empty'}
                />
              ))}
            </div>

            <blockquote className="depoimentos__text">
              &ldquo;{review.text}&rdquo;
            </blockquote>

            <div className="depoimentos__author">
              <div className="depoimentos__author-avatar">
                {review.name.charAt(0)}
              </div>
              <div>
                <span className="depoimentos__author-name">{review.name}</span>
                <span className="depoimentos__author-meta">{review.date} via {review.source}</span>
              </div>
            </div>
          </div>

          <button className="depoimentos__arrow" onClick={next} aria-label="Proximo">
            <CaretRight size={24} weight="bold" />
          </button>
        </div>

        <div className="depoimentos__dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`depoimentos__dot ${current === i ? 'depoimentos__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>

        <div className={`depoimentos__stats reveal delay-3 ${inView ? 'revealed' : ''}`}>
          <div className="depoimentos__stat">
            <span className="depoimentos__stat-number">4.5</span>
            <div className="depoimentos__stat-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} weight="fill" className={i < 4 ? 'star--filled' : 'star--half'} />
              ))}
            </div>
            <span className="depoimentos__stat-label">Google Reviews</span>
          </div>
          <div className="depoimentos__stat-sep" />
          <div className="depoimentos__stat">
            <span className="depoimentos__stat-number">26K+</span>
            <span className="depoimentos__stat-label">Seguidores no Instagram</span>
          </div>
          <div className="depoimentos__stat-sep" />
          <div className="depoimentos__stat">
            <span className="depoimentos__stat-number">1o</span>
            <span className="depoimentos__stat-label">Rodizio Gourmet de Floripa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
