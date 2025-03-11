
import CardDuvidas from '../components/CardDuvidas';
import HeaderSection from '../components/HeaderSection';

import perguntas from '../data/FAQ.json';

import './Duvidas.css';

const Duvidas = () => {
    return (
        <div className='duvidas-container'>
            <HeaderSection 
                title="Dúvidas Gerais"
                subtitle="Informações Gerais"
                button_title="Dúvidas"
            />
                {perguntas.map((item, index) => (
                    <CardDuvidas
                        key={index}
                        pergunta={item.pergunta}
                        resposta={item.resposta}
                    />
                ))}

           
        </div>
    );
}

export default Duvidas;
