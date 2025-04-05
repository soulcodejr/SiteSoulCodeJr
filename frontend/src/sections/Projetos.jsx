import ProjectsCard from '../components/ProjectsCard';
import './Projetos.css'
import { TrendDown, Check, TrendUp } from '@phosphor-icons/react';

import data from '../data/Projects.json'
import HeaderSection from '../components/HeaderSection';

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

            <div className='projects__div three-cards' id='projects'>
                <HeaderSection
                    title={"Um pouco do nosso trabalho"}
                    subtitle={"Projetos concluídos pela SCjr"}
                    button_title={"Projetos"}
                />

                <div className='card__container three-cards'>
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
