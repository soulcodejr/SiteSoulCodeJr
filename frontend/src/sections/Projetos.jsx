import ProjectsCard from '../components/ProjectsCard';
import './Projetos.css'

import data from '../data/Projects.json'

const Projetos = () => {
    return (
        <div className='projects__div outfit-normal'>
            <button className="section-button">Projetos</button>
            <div className='projects-header__div'>
                <h2>Um pouco do nosso trabalho</h2>
                <h3>Projetos concluídos pela SCjr</h3>
            </div>
            <div className='projects-card__div'>
                {data.projects.map((project, index) => (
                    <ProjectsCard 
                        key={index} 
                        project={project} />
                ))} 
            </div>
        </div>
    );
}
 
export default Projetos;