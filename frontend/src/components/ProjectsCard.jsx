import React from 'react';

import './ProjectsCard.css'


const CardProjects = ( { 
        icon = null,
        image = null,
        title = null,
        subtitle = null,
        description = null ,
        client_name = null,
        client_role = null,        
        className = '' 
    } ) => {
    return (
        
            <div className={`card__div ${className}`}>
                {icon && <div className='card-icon'>{icon}</div>}

                {title && <div className='card-title'><h2>{title}</h2></div>}
                {subtitle && <div className='card-subtitle'><p>{subtitle}</p></div>}
                {description && <div className='card-description'><p>{description}</p></div>}
            

                
                
                {client_name && (
                    <div className='client-info__div'>                    
                        {image && (
                            <div className='card-image'><img src={image} />
                            </div>
                        )}
                        <div className='card-client__header'>
                            <p className='client-name'>{client_name}</p>
                            <p className='client-role'>{client_role}</p>
                        </div> 
                        
                    </div>
                )}
                    
                
            </div>

        
    );
}
 
export default CardProjects;