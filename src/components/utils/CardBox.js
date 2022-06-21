import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardBox.css"
const CardBox = ({ color, icon, mount, text, description }) => {
    return <div className={`card-box card-box--color-${color}`}>
        <div className="card-box__content">
            <FontAwesomeIcon className="card-box__logo" icon={icon} />
            <div className="card-box__info">
                <span className="card-box__money"> {mount}</span>
                <span className="card-box__txt">{text}</span>
            </div>
        </div>
        <div className="card-box__footer">{description}</div>
    </div>
}

export default CardBox