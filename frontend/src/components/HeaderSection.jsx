import './HeaderSection.css'
import { Children } from 'react';
const HeaderSection = ( { title, subtitle, button_title, children } ) => {
  
        
    
    return (
        <div className='header__section'>
            <div className='header__div outfit-normal'>
                <button className="section-button">{button_title}</button>
                
                {(title || subtitle) && (
                    <div className='header-text__div'>
                        <h2 className=''>{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>
                )}
                               
                {children && (
                    <div className='header-extra-content'>
                    {children}
                    </div>
                )}
            </div>
        </div>

    );
}
 
export default HeaderSection;