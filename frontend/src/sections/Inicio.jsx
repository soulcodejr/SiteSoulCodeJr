
import "./Inicio.css";
import php from '../assets/img/icon-php.png';
import react from '../assets/img/icon-ruby.webp';
import ruby from '../assets/img/icon-react.png';
import js from '../assets/img/icon-js.png';



export default function Inicio() {
  return (
    <main>
      <div className="outfit-normal centraliza">
        <div className="principal">
          <h1 className="soulcodejr">SoulCode jr</h1>
          <p className="texto">Experimente o futuro dos negócios com soluções de automação <br/> inteligentes e dimensionáveis, adaptadas às suas necessidades</p>
          <div className="botoes">
            <button className="botao"> <p className="transicao1">Serviços &#129125;</p> <p className="transicao2">Serviços &#129122;</p> </button>
            <button className="botao preto"> <p className="transicao1">Planos</p> <p className="transicao2">Planos</p> </button>
          </div>
          <div className="carrossel">
            <div className="itens_carrossel">
              <img className="imagem_carrossel" src={php} alt=""/>
              <img className="imagem_carrossel" src={react} alt=""/>
              <img className="imagem_carrossel" src={js}/>
              <img className="imagem_carrossel" src={ruby} alt=""/>
              <img className="imagem_carrossel" src={php} alt=""/>
              <img className="imagem_carrossel" src={react} alt=""/>
              <img className="imagem_carrossel" src={js}/>
              <img className="imagem_carrossel" src={ruby} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </main>  
  );
}
