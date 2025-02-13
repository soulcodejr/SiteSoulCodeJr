import { useState } from "react";
import './Card.css'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";


const Card = ({ pergunta, resposta }) => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className='card-container' onClick={() => setIsOpen(!isOpen)}>
            <div className="content">
                <div className='duvidas-pergunta'>{pergunta}</div>
                {isOpen ? (
                    <div className={`duvidas-icon-div ${isOpen ? 'open' : ''}`}>
                        <MdOutlineKeyboardArrowUp className="duvidas-icon" />
                    </div>
                ) : (
                    <div className={`duvidas-icon-div ${isOpen ? 'open' : ''}`}>
                        <MdOutlineKeyboardArrowDown className="duvidas-icon" />
                    </div>
                )}
            </div>
                
                <div className={`duvidas-resposta ${isOpen ? 'open' : ''}`}>
                    <p>{resposta}</p>
                    
                </div>
        </div>
    );
}
 
export default Card;