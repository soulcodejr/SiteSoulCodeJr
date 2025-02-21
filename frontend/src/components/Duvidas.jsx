
import CardDuvidas from './CardDuvidas';

import perguntas from '../data/FAQ.json';

import './Duvidas.css';

const Duvidas = () => {
    return ( 
        <div className='duvidas-container'>
            <button className='duvidas-button'>Dúvidas</button>
            <h1 className='outfit-bold'>Dúvidas gerais</h1>
            <h3 className='outfit-normal'>Informações gerais</h3>
            <div className="duvidas-lista beam">
                {perguntas.map((item, index) => (
                    <CardDuvidas
                        key={index}
                        pergunta={item.pergunta}
                        resposta={item.resposta}
                    />
                ))}
               
            </div>
        </div>
    );
}
 
export default Duvidas;