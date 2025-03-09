import ProjectsCard from '../components/ProjectsCard'
import './Feedback.css'
import data from '../data/Projects.json'

const Feedback = () => {
    return ( 
        <div>
            <div className='projects__div outfit-normal'>
                <button className="section-button">Clientes</button>
                <div className='projects-header__div'>
                    <h2>Clientes verdadeiramentes satisfeitos</h2>
                    <h3>Descubra como colaboramos com a inovação na sua empresa</h3>
                </div>
                <div className='projects-card__div'>
                    {data.feedbacks.map((feedback, index) => (
                        <ProjectsCard 
                            key={index} 
                            image={feedback.profile_picture}
                            client_name={feedback.client_name}
                            client_role={feedback.client_role}
                            description={feedback.description}  
                        />
                    ))} 
                </div>
            </div>
        </div>
    );
}
 
export default Feedback;