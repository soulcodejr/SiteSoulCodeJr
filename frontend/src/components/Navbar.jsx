import React from "react";
import { MdArrowOutward } from "react-icons/md";


import logo from "../assets/react.svg"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="image-container">
        <img src={logo} alt="SoulCode Logo" id="logo" />
        <h2>SoulCodeJr</h2>
      </div>
      <div className="center-navs-container">
      <nav>
        <a href="">Equipe</a>
      </nav>
      <nav>
        <a href="">Serviços</a>
      </nav>
      <nav>
        <a href="">Projetos</a>
      </nav>
      <nav>
        <a href="">Planos</a>
      </nav>
      <nav>
        <a href="">Contato</a>
      </nav>
</div>

        <a href="/processo-seletivo">
      <button id="process-btn" className="primary-btn">
          Processo Seletivo
          <MdArrowOutward/>
        </button>
        </a>
    </div>
  );
};

export default Navbar;
