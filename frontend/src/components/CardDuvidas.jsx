import { useState } from "react";
import './CardDuvidas.css'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";


const CardDuvidas = ({ pergunta, resposta }) => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className='cardDuvidas-container beam' onClick={() => setIsOpen(!isOpen)}>
            <div className="content">
                <div className='duvidas-pergunta'>{pergunta}</div>
                {isOpen ? (
                    <div className={`duvidas-icon-div ${isOpen ? 'open' : ''}`}>
                        <MdOutlineKeyboardArrowUp className="duvidas-icon" size={22} />
                    </div>
                ) : (
                    <div className={`duvidas-icon-div ${isOpen ? 'open' : ''}`}>
                        <MdOutlineKeyboardArrowDown className="duvidas-icon" size={22} />
                    </div>
                )}
            </div>
                
                <div className={`duvidas-resposta ${isOpen ? 'open' : ''}`}>
                    <p>{resposta}</p>
                    
                </div>
        </div>
    );
}
 
export default CardDuvidas;