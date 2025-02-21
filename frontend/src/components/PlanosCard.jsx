import './PlanosCard.css'
import { PiStackSimple } from "react-icons/pi";

const PlanosCard = () => {
    return (
        <div className="planos-card-div">
            <div className="planos-card-header">
                <div className="plan-title">
                    <div className='basic-card-icon-div'>
                        <PiStackSimple size={15} className='basic-card-icon'/> 
                    </div>
                        <p>Basic</p>
                </div>
                
                <div className='prices'>
                    <h1>$480 <span className='prices-span'>/month</span></h1>
                    <p>Essential tools and features for starting your journey with ease.</p>
                    <button className='prices-button'>Go with this plan</button>
                </div>
            </div>
            

        </div>

    );
}
 
export default PlanosCard;

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