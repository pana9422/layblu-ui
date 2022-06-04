import { faGauge, faBook, faIcons, faCubes, faLayerGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
const SIDEBAR_ITEMS = [
    {
        name: "Dashboard",
        icon: faGauge,
        url: "/",
    },
    {
        name: "Documentación",
        icon: faBook,
        url: "/docs",
    },
    {
        name: "Iconos",
        icon: faIcons,
        url: "/icons",
    },
    {
        name: "Componentes",
        icon: faCubes,
        url: "/components",
        dropdown: [
            "Accordions",
            "Alerts",
            "Avatars",
            "Badges",
            "Breadcrumbs",
            "Buttons",
            "List Groups",
            "Modals",
            "Navbars",
            "Navigations",
            "Popovers",
            "Steppers",
            "Tables",
            "Tabs",
            "Tags",
            "Timeline",
        ],
    },
    {
        name: "Librerias",
        icon: faLayerGroup,
        url: "/libraries",
        dropdown: [
            "Monaco Editor",
            "Count Js",
            "Charts Js",
            "DataTables",
            "DatePicker",
            "FullCalendar",
            "Glider Js",
            "Lightbox",
            "Moment Js",
            "jsPDF",
            "Rater Js",
            "Sortable Js",
            "Summernote",
            "Typed Js",
        ],
    },
    {
        name: "Colaboradores",
        icon: faUsers,
        url: "/team",
    },
];

export default SIDEBAR_ITEMS;
