import './Plans.css'
import PlansCard from './PlansCard';


const Plans = () => {
    return ( 
        <div className='plans__container'>
            <div className='plans__button-group'>
                <button className='plans__button--annual'>
                    Anually
                </button>
                <button className='plans__button--monthly'>
                    Monthly
                </button>


            </div>
            <h1 className='plans__title outfit-bold'>Planos de assinatura</h1>
            <h3 className='plans__subtitle outfit-normal'>Preços</h3>
            <div className="plans__list beam">
                <PlansCard />
                <PlansCard />
                <PlansCard />
                
            </div>
        </div>
    );
}
 
export default Plans;