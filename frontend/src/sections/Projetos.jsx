import ProjectsCard from '../components/ProjectsCard';
import './Projetos.css'
import { TrendDown, Check, TrendUp } from '@phosphor-icons/react';

import data from '../data/Projects.json'

const Projetos = () => {

    const getProjectIcon = (name) => {
        const icons = {
            'Site SCTI2024': <TrendDown size={28} className="project__icon" />,
            'Site SCjr': <Check size={28} className="project__icon" />,
            'NaRede': <TrendUp size={28} className="project__icon" />,
        };
        return icons[name] || <TrendUp size={28} className="project__icon" />;
    }; 

    return (
        <div className='projects__div outfit-normal'>
            <button className="section-button">Projetos</button>
            <div className='projects-header__div'>
                <h2>Um pouco do nosso trabalho</h2>
                <h3>Projetos concluídos pela SCjr</h3>
            </div>
            <div className='projects-card__div three-cards'>
                {data.projects.map((project, index) => (
                    <ProjectsCard 
                        key={index}
                        icon={getProjectIcon(project.name)} 
                        title={project.name}
                        description={project.description}  
                    />
                ))} 
            </div>
        </div>
    );
}
 
export default Projetos;