import './PlansCard.css'
import { PiStackSimple } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";


const PlansCard = () => {
    return (
        <div className="plans-card__div">
            <div className="planos-card__header">
                <div className="plan-card__title">
                    <PiStackSimple size={15} className='basic-card__icon'/> 
                    <p>Basic</p>
                </div>
                
                <div className='plans-card__prices'>
                    <h1 className='plans-card__price'>
                        $480 
                        <span className='plans-card__price-period'>
                            /month
                        </span>
                    </h1>
                    <p>Essential tools and features for starting your journey with ease.</p>
                    <button className='plans-card__button'>Go with this plan</button>
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
            

        </div>

    );
}
 
export default PlansCard;

// width: auto;
// height: auto;
// white-space: pre;
// font-weight: 500;
// font-style: normal;
// font-family: "Outfit", "Outfit Placeholder", sans-serif;
// color: var(--Primary_Text, #ffffff);
// font-size: 35px;
// letter-spacing: -0.02em;
// line-height: 1.2;
// position: absolute;