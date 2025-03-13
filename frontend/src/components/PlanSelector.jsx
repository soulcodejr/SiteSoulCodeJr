import './PlanSelector.css'

const PlanSelector = ( { planType, onPlanChange } ) => {
    console.log(`PLAN TYPE AQUI:${planType}`)
    console.log(`ON PLAN CHANGE AQUI:${onPlanChange}`)
    
    return (
        <div className="plan-selector__div">      
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
                    onClick={() => onPlanChange('annual')}
                >
                    Anually
                </button>
                <button
                    className={`plans__button ${planType === 'monthly' ? 'plans__button--active' : ''}`}
                    onClick={() => onPlanChange('monthly')}
                >
                    Monthly
                </button>


            </div>
                        
        </div>
    );
}
 
export default PlanSelector;