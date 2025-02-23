import './PlansCard.css'
import { PiStackSimple } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";



const PlansCard = ( { plan }) => {
    
    return (
        <div className="plans-card__div outfit-normal">
            <div className="plans-card__header">
                <div className="plan-card__title">
                    <PiStackSimple size={15} className='plan-card__icon--basic'/> 
                    <p>{plan.name}</p>
                </div>
                
                <div className='plans-card__prices'>
                    <h1 className='plans-card__price'>
                        {plan.price} 
                        <span className='plans-card__price-period'>
                            {plan.price === 'Custom' ? '' : '/month'}
                        </span>
                    </h1>
                    <p className='plans-card__description'>{plan.description}</p>
                </div>

                

                
            </div>

            <div className='plans-card__button-wrapper'>
                <button className='plans-card__button'>Go with this plan <MdArrowOutward size={16}/></button>
            </div>

            <div className='plan-card__benefits'>
                {plan.benefits.map((benefit, index) => (
                    <div key={index} className='plan-card__benefit'>
                        <FaCheck className='plan-card__benefit-icon'/>
                        <p>{benefit}</p>
                    </div>

                ))}
      
                    
                </div>
            

        </div>

    );
}
 
export default PlansCard;