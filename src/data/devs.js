import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

const DEVS = [
    {
        id: 1,
        username: "Miguel J Medina",
        avatar: "/assets/devs/miguel-j-medina.jpg",

        background: "/assets/devs/background-miguel-j-medina.jpg",
        role: "Coordinar & Desarrollador Front End",
        flag: "/assets/image/flag-peru.png",
        links: [
            {
                target: "_blank",
                icon: faLinkedinIn,
                href: "https://www.linkedin.com/in/miguel-j-medina/"
            },
            {
                target: "_blank",
                icon: faGithubAlt,
                href: "https://github.com/pana9422"
            },
            {
                target: "_blank",
                icon: faEarthAmerica,
                href: "https://miguel-medina.dev/"
            }
        ]
    }, {
        id: 2,
        username: "Braider Perez",
        avatar: "/assets/devs/braider-perez.jpg",

        background: "/assets/devs/background-300x200.jpg",
        role: "Colaborador & Desarrollador Front End",
        flag: "/assets/image/flag-colombia.png",
        links: []
    }
]

export default DEVS