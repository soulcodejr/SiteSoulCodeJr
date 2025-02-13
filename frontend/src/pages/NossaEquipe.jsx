import CardEquipe from "../components/CardEquipe"

function NossaEquipe() {
    return (
        <div>
            <h1>Uma equipe de excelência    </h1>
            <div className="card__container">
                <CardEquipe image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_XL5idt8CoBA0djjHXy0D4SI_39oiHfu3A&s" name="Estefanio Silva" role="Presidente e PM"/>
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