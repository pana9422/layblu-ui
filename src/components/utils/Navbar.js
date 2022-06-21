import "./Navbar.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Button from "../utils/Button"

import { useContext } from "react";
import SidebarContext from "../../context/SidebarContext";

const Navbar = () => {
    const {toggle, setToggle} = useContext(SidebarContext)
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Button icon={faBars} evenClick={ () => setToggle({...toggle, open:!toggle.open}) } />
                <Button icon={faGithub} link={ { target:"_blank", href:"https://github.com/LB-UI/Componentes-UI"} } />
            </div>
        </nav>
    )
}

export default Navbar