import "./Item.css"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Item = ({ name, url, icon, dropdown }) => {
    const [toggleDropdown, setToggleDropdown] = useState(false)    
    const listItems = dropdown && Object.entries(dropdown).map( value => ({
        slug : value[0],
        name: value[1][0]
    }))

    return (
        <li className={`item `}>
            {listItems ? (
                <>
                    <button
                        className="item__link item__link--dropdown"
                        data-open={toggleDropdown}
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                    >
                        <span className="item__icon"> <FontAwesomeIcon icon={icon} /> </span>
                        <span className="item__text">{name}</span>
                        <span className="item__caret"> <FontAwesomeIcon icon={faAngleDown} /> </span>

                    </button>
                    <ul className="item__dropdown">
                        {listItems.map( ({slug, name}) => (
                            <li key={slug} className={`item`}>
                                <NavLink className="item__link" to={`${url}/${slug}`}>
                                    <span className="item__icon item__icon--line"></span>
                                    <span className="item__text">{name}</span>
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
