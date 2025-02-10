import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import './Footer.css'
import logo from "../assets/react.svg"
import { FaXTwitter, FaThreads } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-container">
        <div className="presentation-container">
          <div className="logo-container">
            <img src={logo} alt="SoulCodeLogo" />
            <h2>SoulCodeJr</h2>
          </div>
          <p>Empresa Júnior de Tecnologia</p>
        </div>
        <div className="social-icons-container">
          <a href="" className="social-icons">
            <FaLinkedin />
          </a>
          <a href="" className="social-icons">
            <FaXTwitter />
          </a>
          <a href="" className="social-icons">
            <FaInstagram />
          </a>
          <a href="" className="social-icons">
            <FaFacebook />
          </a>
          <a href="" className="social-icons">
            <FaThreads />
          </a>
        </div>
      </div>
      <div className="infos-container">
        <div className="text-box">
          <h2>Seções</h2>
          <a href="">Equipe</a>
          <a href="">Serviços</a>
          <a href="">Projetos</a>
          <a href="">Planos</a>
          <a href="">Contato</a>
        </div>
        <div className="text-box">
          <h2>Páginas</h2>
          <a href="">Home</a>
          <a href="">Coming soon</a>
          <a href="">404</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
