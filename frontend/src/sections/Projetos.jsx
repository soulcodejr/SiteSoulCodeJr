import ProjectsCard from '../components/ProjectsCard';
import './Projetos.css'

const Projetos = () => {
    return (
        <div className='projects__div outfit-normal'>
            <button className="section-button">Projetos</button>
            <div className='projects-header__div'>
                <h2>Um pouco do nosso trabalho</h2>
                <h3>Projetos concluídos pela SCjr</h3>
            </div>
            <div className='projects-card__div'>
                <ProjectsCard />    
                <ProjectsCard />    
                <ProjectsCard />    
            </div>
        </div>
    );
}
 
export default Projetos;