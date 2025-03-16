import CardEquipe from "./CardEquipe"
import estefanioImage from '../assets/estefanio.jpg'; 

function NossaEquipe() {
    return (
        <div>
            <h1>Uma equipe de excelência</h1>
            <div className="card__container">
                <CardEquipe image={estefanioImage}  name="Estefanio Silva" role="Presidente e PM"/>
                <CardEquipe name="Ausberto" role="Eng. de Software" />
                <CardEquipe name="José Lúcio" role="Dev SecOps" />
                <CardEquipe name="Maria Oliveira" role="Desenvolvedora Front-end" />
                <CardEquipe name="Carlos Souza" role="Desenvolvedor Back-end" />
                <CardEquipe name="Ana Costa" role="Arquiteta de Software" />
                <CardEquipe name="Pedro Rocha" role="Engenheiro de DevOps"/>
            </div>
        </div>
    );
}

export default NossaEquipe;