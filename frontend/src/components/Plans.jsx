import { useState } from 'react';
import './Plans.css'
import PlansCard from './PlansCard';
import PlansData from '../data/PlansData.json'


const Plans = () => {

    const [planType, setPlanType] = useState('annual');

    const handlePlanChange = (type) => {
        setPlanType(type);
    }

    return ( 
        <div className='plans__container outfit-normal'>
            <div className='plans__button-group'>
                <div 
                    className='plans__button-background'
                    style={{
                        left: planType === 'annual' ? '25%' : '75%',
                        transform: 'translateX(-50%)',
                    }} 
                />
                <button 
                    className={`plans__button ${planType === 'annual' ? 'plans__button--active' : ''}`}
                    onClick={() => handlePlanChange('annual')}
                >
                    Anually
                </button>
                <button 
                    className={`plans__button ${planType === 'monthly' ? 'plans__button--active' : ''}`}
                    onClick={() => handlePlanChange('monthly')}
                >
                    Monthly
                </button>


            </div>
            <h1 className='plans__title outfit-bold'>Planos de assinatura</h1>
            <h3 className='plans__subtitle outfit-normal'>Preços</h3>
            <div className="plans__list beam">
                {PlansData.plans.map((plan, index) => (
                    <PlansCard key={index} plan={plan} />
                ))}
                
            </div>
        </div>
    );
}
 
export default Plans;