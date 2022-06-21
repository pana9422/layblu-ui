import "./Sidebar.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import SidebarContext from "../../context/SidebarContext";
import SIDEBAR_ITEMS from "../../data/sidebar";

import Item from "./Item";

const Sidebar = () => {
    const { toggle, setToggle } = useContext(SidebarContext)
    const [search, setSearch] = useState("")
    const handlerSearching = ({ target }) => setSearch(target.value)

    useEffect(() => {
        const searchList = document.querySelectorAll(".item");
        searchList.forEach(el => {
            el.textContent.toLowerCase().includes(search.toLowerCase())
                ? el.classList.remove("item__filter")
                : el.classList.add("item__filter");
        });
    }, [search])

    return (
        <>
            <aside className={`sidebar ${toggle.open && 'sidebar--full'}`}>
                <NavLink to="/" className="sidebar__header">
                    <img className="sidebar__image" src="/assets/brand.svg" alt="Logo de LayBlu" />
                    <span className="sidebar__brand">LayBlu UI</span>
                </NavLink>
                <ul className="sidebar__content scroll">
                    <li className="sidebar__item">
                        <label className="sidebar__search">
                            <span className="sidebar__icon"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
                            <input className="sidebar__input" type="search" placeholder="Buscar" onChange={handlerSearching} />
                        </label>
                    </li>
                    { !!SIDEBAR_ITEMS && SIDEBAR_ITEMS.map(({ ...props }) => props && <Item key={props.url} {...props} />) }
                </ul>
            </aside>
            <div className="sidebar__overflow" onClick={() => setToggle({ open: false })}></div>
        </>
    );
};

export default Sidebar;
