import './PlansCard.css'
import { PiStackSimple } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";



const PlansCard = () => {
    return (
        <div className="plans-card__div outfit-normal">
            <div className="plans-card__header">
                <div className="plan-card__title">
                    <PiStackSimple size={15} className='plan-card__icon--basic'/> 
                    <p>Basic</p>
                </div>
                
                <div className='plans-card__prices'>
                    <h1 className='plans-card__price'>
                        $480 
                        <span className='plans-card__price-period'>
                            /month
                        </span>
                    </h1>
                    <p className='plans-card__description'>Essential tools and features for starting your journey with ease.</p>
                </div>

                

                
            </div>

            <div className='plans-card__button-wrapper'>
                <button className='plans-card__button'>Go with this plan <MdArrowOutward size={16}/></button>
            </div>

            <div className='plan-card__benefits'>
                    <div className='plan-card__benefit'>
                        <FaCheck className='plan-card__benefit-icon'/>
                        <p>Basic Workflow Automation</p>
                    </div>
                    <div className='plan-card__benefit'>
                        <FaCheck className='plan-card__benefit-icon'/>
                        <p>Basic Workflow Automation</p>
                    </div>
                    <div className='plan-card__benefit'>
                        <FaCheck className='plan-card__benefit-icon'/>
                        <p>Basic Workflow Automation</p>
                    </div>
                    <div className='plan-card__benefit'>
                        <FaCheck className='plan-card__benefit-icon'/>
                        <p>Basic Workflow Automation</p>
                    </div>
                    <div className='plan-card__benefit'>
                        <FaCheck className='plan-card__benefit-icon'/>
                        <p>Basic Workflow Automation</p>
                    </div>
                    
                </div>
            

        </div>

    );
}
 
export default PlansCard;