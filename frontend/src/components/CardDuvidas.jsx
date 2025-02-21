import { useState } from "react";
import './CardDuvidas.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const CardDuvidas = ({ pergunta, resposta }) => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className='card-duvidas__container' onClick={() => setIsOpen(!isOpen)}>
            <div className="card-duvidas__content">
                <div className='card-duvidas__pergunta'>
                    {pergunta}
                    <div className={`card-duvidas__icon-div ${isOpen ? 'open' : ''}`}>
                        <MdOutlineKeyboardArrowDown className="duvidas-icon" size={22} />
                    </div>
                </div>
                <div className={`card-duvidas__resposta ${isOpen ? 'open' : ''} outfit-normal`}>
                    <p>{resposta}</p>
                </div>
                     
            </div>
            
                
        </div>
    );
}
 
export default CardDuvidas;