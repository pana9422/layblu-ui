import { faGauge, faCubes, faUsers } from "@fortawesome/free-solid-svg-icons";
import { GROUP_COMPONENT } from "./components";
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
    {
        name: "Colaboradores",
        icon: faUsers,
        url: "/team",
    },
];

export default SIDEBAR_ITEMS;
