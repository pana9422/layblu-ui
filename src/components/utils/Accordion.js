import { useEffect } from "react"
import "./Accordion.css"
const Accordion = () => {

    useEffect( ()=> {
        const toggleAccordion = (e) => {
            e.currentTarget.parentElement.classList.toggle("accordion--collapsed");
        };
        const accordions_group = document.querySelectorAll(".accordion__header");
        accordions_group.forEach((accordion) => accordion.addEventListener("click", toggleAccordion));
    } , [])

    return (
        <ul className="accordions-group">
            <li className="accordion accordion--collapsed">
                <div className="accordion__header">
                    <span className="accordion__title">Primer Grupo de Colapsado</span>
                    <div className="accordion__icon">
                        <svg width="16" height="16" viewBox="0 0 46 46">
                            <path
                                d="M42.4173 14.3836C42.8081 14.7741 42.8081 15.4076 42.4173 15.7982L23.7069 34.4979C23.3164 34.8881 22.6836 34.8881 22.2931 34.4979L3.58271 15.7982C3.19192 15.4076 3.19192 14.7741 3.58271 14.3836L7.19914 10.7692C7.5897 10.3789 8.22271 10.379 8.61315 10.7694L22.2929 24.4491C22.6834 24.8397 23.3166 24.8397 23.7071 24.4491L37.3868 10.7694C37.7773 10.379 38.4103 10.3789 38.8009 10.7692L42.4173 14.3836Z"
                            />
                        </svg>
                    </div>
                </div>
                <p className="accordion__body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet laudantium, et optio commodi eum perspiciatis vero itaque. Dolore.
                </p>
            </li>
            <li className="accordion">
                <div className="accordion__header">
                    <span className="accordion__title">Segundo Grupo de Colapsado</span>
                    <div className="accordion__icon">
                        <svg width="16" height="16" viewBox="0 0 46 46">
                            <path
                                d="M42.4173 14.3836C42.8081 14.7741 42.8081 15.4076 42.4173 15.7982L23.7069 34.4979C23.3164 34.8881 22.6836 34.8881 22.2931 34.4979L3.58271 15.7982C3.19192 15.4076 3.19192 14.7741 3.58271 14.3836L7.19914 10.7692C7.5897 10.3789 8.22271 10.379 8.61315 10.7694L22.2929 24.4491C22.6834 24.8397 23.3166 24.8397 23.7071 24.4491L37.3868 10.7694C37.7773 10.379 38.4103 10.3789 38.8009 10.7692L42.4173 14.3836Z"
                            />
                        </svg>
                    </div>
                </div>
                <p className="accordion__body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cumque quisquam officiis aliquid molestiae nemo sed, incidunt
                    at?
                </p>
            </li>
        </ul>
    )
}

export default Accordion