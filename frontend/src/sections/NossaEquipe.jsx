import CardEquipe from "../components/CardEquipe"
import estefanioImage from '../assets/estefanio.jpg'; 
import HeaderSection from "../components/HeaderSection";

function NossaEquipe() {
    return (
        <div>

            <HeaderSection 
                 title="Uma equipe de excelência"
                 subtitle="Equipe SoulCodejr"
                 button_title="Equipe"
            />
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