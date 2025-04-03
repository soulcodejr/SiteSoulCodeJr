
import "./Inicio.css";
import php from '../assets/img/icon-php.png';
import react from '../assets/img/icon-ruby.webp';
import ruby from '../assets/img/icon-react.png';
import js from '../assets/img/icon-js.png';



export default function Inicio() {
  return (
    <main>
      <div class="centraliza">
        <div class="principal">
          <h1 class="soulcodejr">SoulCode jr</h1>
          <p class="texto">Experimente o futuro dos negócios com soluções de automação <br/> inteligentes e dimensionáveis, adaptadas às suas necessidades</p>
          <div class="botoes">
            <button class="botao"> <p class="transicao1">Serviços &#129125;</p> <p class="transicao2">Serviços &#129122;</p> </button>
            <button class="botao preto"> <p class="transicao1">Planos</p> <p class="transicao2">Planos</p> </button>
          </div>
          <div class="carrossel">
            <div class="itens_carrossel">
              <img class="imagem_carrossel" src={php} alt=""/>
              <img class="imagem_carrossel" src={react} alt=""/>
              <img class="imagem_carrossel" src={js}/>
              <img class="imagem_carrossel" src={ruby} alt=""/>
              <img class="imagem_carrossel" src={php} alt=""/>
              <img class="imagem_carrossel" src={react} alt=""/>
              <img class="imagem_carrossel" src={js}/>
              <img class="imagem_carrossel" src={ruby} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </main>  
  );
}
