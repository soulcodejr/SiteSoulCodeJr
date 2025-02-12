import Card from './Card';
import perguntas from '../data/FAQ.json'
import './Duvidas.css'

const Duvidas = () => {
    return ( 
        <div className='duvidas-container beam'>
            <h1 className='outfit-bold'>Dúvidas gerais</h1>
            <h3 className='outfit-normal'>Informações gerais</h3>
            <div className="duvidas-lista">
                {perguntas.map((item, index) => (
                    <Card 
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