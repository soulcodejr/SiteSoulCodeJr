import { useState } from 'react';
import './Plans.css'
import PlansCard from '../components/PlansCard';
import PlansData from '../data/PlansData.json'
import PlanSelector from '../components/PlanSelector';
import HeaderSection from '../components/HeaderSection';


const Plans = () => {

    const [planType, setPlanType] = useState('annual');

    const getAdjustedPlans = () => {
        return PlansData.plans.map((plan) => {
            if (planType === 'annual' && plan.price !== 'Custom') {
                const monthlyPrice = plan.price;
                const annualPrice = (monthlyPrice * 0.8);
                return {
                    ...plan,
                    price: `${annualPrice}`,
                };
            }
            return plan;
        });
    };

    return (
        <div className='plans__container outfit-normal'>
            <HeaderSection 
                 title="Planos de assinatura"
                 subtitle="Preços"
                 button_title="Planos"
            />
            <PlanSelector
                        planType={planType}
                        onPlanChange={setPlanType}
                        className='plans-selector__container'
            />
            <div className="plans__list beam">
                {getAdjustedPlans().map((plan, index) => (
                    <PlansCard key={index} plan={plan} />
                ))}

            </div>
        </div>
    );
}

export default Plans;
