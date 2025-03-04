import './CardEquipe.css';

const CardEquipe = ({ image,name, role }) => {
    return (
        <div className="card">
            <div className="card__header">
                <img src={image} alt={name} className="card__image" />
                <h2 className="card__title">{name}</h2>
                <p className="card__subtitle">{role}</p>
            </div>
        </div>
    );
};

export default CardEquipe;
