import './Planos.css'
import PlanosCard from './PlanosCard';


const Planos = () => {
    return ( 
        <div className='planos-container'>
            <button className='planos-button'>Planos</button>
            <h1 className='outfit-bold'>Planos de assinatura</h1>
            <h3 className='outfit-normal'>Preços</h3>
            <div className="planos-lista beam">
                <PlanosCard />
                <PlanosCard />
                <PlanosCard />
                
            </div>
        </div>
    );
}
 
export default Planos;