import React from 'react';

import './ProjectsCard.css'


const CardProjects = ( { 
        icon = null,
        image = null,
        title = null,
        subtitle = null,
        description = '...' ,
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
                {image && <div className='card-image'><img src={image}></img></div>}
                {client_name && <div className='card-client_name'><p>{client_name}</p></div>}
                {client_role && <div className='card-client_role'><p>{client_role}</p></div>}
                 
                
            </div>

        
    );
}
 
export default CardProjects;