import "./Item.css"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Item = ({ url, name, icon, dropdown }) => {
    const buttonDropdown = useRef();

    const toggleDropdown = (ref) => {
        const str = ref.current.getAttribute("data-open");
        ref.current.setAttribute("data-open", str === "show" ? "hidden" : "show");
    };
    return (
        <li className="item item__input-search">
            {dropdown ? (
                <>
                    <button
                        ref={buttonDropdown}
                        className="item__link item__link--dropdown"
                        data-open="hidden"
                        onClick={() => {
                            toggleDropdown(buttonDropdown);
                        }}
                    >
                        <span className="item__icon">
                            <FontAwesomeIcon icon={icon} />
                        </span>
                        <span className="item__text">{name}</span>
                        <span className="item__caret">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </button>
                    <ul className="item__dropdown">
                        {dropdown.map((item, index) => (
                            <li key={index} className="item__item item__input-search">
                                <NavLink  className="item__link" to={`${url}/${item.toLowerCase().replaceAll(" ","-")}`}>
                                    <span className="item__icon item__icon--line"></span>
                                    <span className="item__text">{item}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <NavLink className="item__link" to={url}>
                    <span className="item__icon">
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <span className="item__text">{name}</span>
                </NavLink>
            )}
        </li>
    );
};

export default Item;
