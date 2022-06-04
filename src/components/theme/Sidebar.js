import "./Sidebar.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import SIDEBAR_ITEMS from "../../data/sidebar";
import Item from "../utils/Item";

const Sidebar = () => {
    const inputSearch = useRef();

    const searchLink = (input) => {
        const searchList = document.querySelectorAll(".item__input-search");
        const message = document.querySelector(".sidebar__message");

        searchList.forEach((el) => {
            if (el.textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                el.classList.remove("item__filter");
                message.textContent = "";
            } else {
                const searchListFilter = document.querySelectorAll(".item__filter");
                el.classList.add("item__filter");
                if (searchList.length === searchListFilter.length) message.textContent = "No hay resultados de busqueda";
            }
        });
    };
    return (
        <>
            <aside className={`sidebar`}>
                <NavLink to="/" className="sidebar__header">
                    <img className="sidebar__image" src="/assets/brand.svg" alt="Logo de LayBlu" />
                    <span className="sidebar__brand">LayBlu UI</span>
                </NavLink>
                <ul className="sidebar__content scroll">
                    <li className="sidebar__item">
                        <label className="sidebar__search">
                            <span className="sidebar__icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            <input ref={inputSearch} className="sidebar__input" type="search" placeholder="Buscar" 
                                onChange={() => searchLink(inputSearch.current.value)} />
                        </label>
                        <span className="sidebar__message"></span>
                    </li>
                    {SIDEBAR_ITEMS.map(({ name, icon, url, dropdown }, index) => (
                        <Item key={index} url={url} name={name} icon={icon} dropdown={dropdown} />
                    ))}
                </ul>
            </aside>

            <div className="sidebar__overflow"></div>
        </>
    );
};

export default Sidebar;
