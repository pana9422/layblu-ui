import "./Button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, text, link, evenClick }) => {
    return link ? (
        <a target={link.target} rel="noreferrer" className="btn btn__solid" href={link.href}>
            {icon && <span className="btn__icon"> <FontAwesomeIcon icon={icon} /> </span>}
            {text && <span className="btn__text">{text}</span>}
        </a>
    ) : (
        <button className="btn btn__outline" onClick={evenClick || ""}>
            {icon && <span className="btn__icon"> <FontAwesomeIcon icon={icon} /> </span>}
            {text && <span className="btn__text">{text}</span>}
        </button>
    );
};

export default Button;
