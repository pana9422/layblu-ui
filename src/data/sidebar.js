import { faGauge,faLayerGroup, faCubes, faUsers } from "@fortawesome/free-solid-svg-icons";
import { GROUP_COMPONENT } from "./components";
import { GROUP_LIBRARY } from "./libraries";
const SIDEBAR_ITEMS = [
    {
        name: "Dashboard",
        icon: faGauge,
        url: "/",
    },
    {
        name: "Componentes",
        icon: faCubes,
        url: "/components",
        dropdown: GROUP_COMPONENT,
    },
    // {
    //     name: "Librerias",
    //     icon: faLayerGroup,
    //     url: "/libraries",
    //     dropdown: GROUP_LIBRARY,
    // },
    {
        name: "Colaboradores",
        icon: faUsers,
        url: "/team",
    },
];

export default SIDEBAR_ITEMS;
