import './HeaderSection.css'

const HeaderSection = (props) => {
    return (
        <div className='header__section'>
            <div className='header__div outfit-normal'>
                <button className="section-button">{props.button_title}</button>
                <div className='header-text__div'>
                    <h2 className=''>{props.title}</h2>
                    <h3>{props.subtitle}</h3>
                </div>
            </div>
        </div>

    );
}
 
export default HeaderSection;