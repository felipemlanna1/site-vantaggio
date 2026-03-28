import { WhatsappLogo, InstagramLogo, FacebookLogo, Phone, EnvelopeSimple, MapPin, Clock } from '@phosphor-icons/react'
import './Footer.css'

const WHATSAPP_URL = 'https://wa.me/5548984552026?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Vantaggio%20Restaurante.'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="./images/logo.svg" alt="Vantaggio Restaurante" className="footer__logo" />
            <p className="footer__tagline">
              Pioneiro e 1o Rodizio de Mini Hamburguer Gourmet
              de Florianopolis. Pizzas artesanais, massas caseiras
              e muita paixao pela gastronomia.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com/vantaggiorestaurante" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramLogo size={22} weight="regular" />
              </a>
              <a href="https://facebook.com/VantaggioCanasvieiras" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookLogo size={22} weight="regular" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsappLogo size={22} weight="regular" />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Contato</h4>
            <ul>
              <li>
                <WhatsappLogo size={16} weight="duotone" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">(48) 98455-2026</a>
              </li>
              <li>
                <Phone size={16} weight="duotone" />
                <a href="tel:+5548984552026">(48) 98455-2026</a>
              </li>
              <li>
                <EnvelopeSimple size={16} weight="duotone" />
                <a href="mailto:contato@vantaggiorestaurante.com.br">contato@vantaggiorestaurante.com.br</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Endereco</h4>
            <ul>
              <li>
                <MapPin size={16} weight="duotone" />
                <span>R. Prof. Milton Leite da Costa, 586<br />Canasvieiras, Florianopolis - SC</span>
              </li>
              <li>
                <Clock size={16} weight="duotone" />
                <span>Todos os dias<br />18h00 as 23h30</span>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Navegacao</h4>
            <ul>
              <li><a href="#sobre">Sobre Nos</a></li>
              <li><a href="#rodizio">O Rodizio</a></li>
              <li><a href="#cardapio">Cardapio</a></li>
              <li><a href="#depoimentos">Avaliacoes</a></li>
              <li><a href="#reserva">Reservas</a></li>
              <li><a href="#localizacao">Como Chegar</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Vantaggio Restaurante. Todos os direitos reservados.</p>
          <p className="footer__cnpj">CNPJ: 00.000.000/0001-00 | Canasvieiras, Florianopolis - SC</p>
        </div>
      </div>
    </footer>
  )
}
