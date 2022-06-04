import SidebarContext from "./SidebarContext"
import { useState } from "react";

const SidebarProvider = ({children}) => {
    const [toggle, setToggle] = useState({ open: false})
    return (
        <SidebarContext.Provider value={{toggle, setToggle}}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider