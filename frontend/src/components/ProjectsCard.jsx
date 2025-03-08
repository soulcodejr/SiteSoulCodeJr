import React from 'react';

import './ProjectsCard.css'
import { Check, TrendDown, TrendUp } from '@phosphor-icons/react';


const CardProjects = ( { project } ) => {
    const getProjectIcon = () => {
        const icons = {
            'Site SCTI2024': TrendDown,
            'Site SCjr': Check,
            NaRede: TrendUp
        }
        return icons[project.name] || TrendUp
    }
    return (
        
            <div className='project-card__div'>
                <div>
                    {React.createElement(getProjectIcon(), {size: 28, className:'project__icon'})}
                </div>
                <h3> {project.name} </h3>
                

                <p>zzzzzzz</p>
            </div>

        
    );
}
 
export default CardProjects;