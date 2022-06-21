import "./Item.css"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Item = ({ name, url, icon, dropdown }) => {

    const [toggleDropdown, setToggleDropdown] = useState(false)
    const $buttonDropdown = useRef()

    useEffect(() => {
        if (dropdown) {
            $buttonDropdown.current.setAttribute("data-open", toggleDropdown)
        }
    }, [toggleDropdown, dropdown])


    return (
        <li className={`item `}>
            {dropdown ? (
                <>
                    <button
                        ref={$buttonDropdown}
                        className="item__link item__link--dropdown"
                        data-open={false}
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                    >
                        <span className="item__icon"> <FontAwesomeIcon icon={icon} /> </span>
                        <span className="item__text">{name}</span>
                        <span className="item__caret"> <FontAwesomeIcon icon={faAngleDown} /> </span>
                        
                    </button>
                    <ul className="item__dropdown">
                        {dropdown.map(item => (
                            <li key={item.slug} className={`item ${name}`}>
                                <NavLink className="item__link" to={`${url}/${item.slug}`}>
                                    <span className="item__icon item__icon--line"></span>
                                    <span className="item__text">{item.name}</span>
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
