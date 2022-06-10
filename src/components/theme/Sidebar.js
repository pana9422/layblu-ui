import "./Sidebar.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useRef, useContext } from "react";
import SIDEBAR_ITEMS from "../../data/sidebar";
import SidebarContext from "../../context/SidebarContext";
import Item from "../utils/Item";

const Sidebar = () => {
    const { toggle, setToggle } = useContext(SidebarContext)

    const inputSearch = useRef();
    const message = useRef();

    const searchLink = (input) => {
        const searchList = document.querySelectorAll(".item__input-search");


        searchList.forEach((el) => {

            if (el.textContent.toLowerCase().includes(input.toLowerCase())) {

                el.classList.remove("item__filter");
                message.current.textContent = "";

            } else {

                const searchListFilter = document.querySelectorAll(".item__filter");

                el.classList.add("item__filter");

                if (searchList.length === searchListFilter.length) message.current.textContent = "No hay resultados de busqueda";

            }
        });
    };

    return (
        <>
            <aside className={`sidebar ${toggle.open ? 'sidebar--full' : ''}`}>
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
                        <span ref={message} className="sidebar__message"></span>
                    </li>
                    {SIDEBAR_ITEMS.map(({ name, icon, url, dropdown }, index) => (
                        <Item key={index} url={url} name={name} icon={icon} dropdown={dropdown} />
                    ))}
                </ul>
            </aside>

            <div className="sidebar__overflow" onClick={() => setToggle({ open: false })}></div>
        </>
    );
};

export default Sidebar;
