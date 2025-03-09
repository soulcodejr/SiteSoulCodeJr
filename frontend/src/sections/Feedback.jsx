import ProjectsCard from '../components/ProjectsCard'
import './Feedback.css'
import data from '../data/Projects.json'
import HeaderSection from '../components/HeaderSection'
// import './Projetos.css'
const Feedback = () => {
    return ( 
        <div>         
            <HeaderSection 
                title={"Clientes verdadeiramentes satisfeitos"}
                subtitle={"Descubra como colaboramos com a inovação na sua empresa"}
                button_title={"Clientes"}
            />
                <div className='card__container'>
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
    );
}
 
export default Feedback;