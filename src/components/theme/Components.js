import { useParams } from "react-router-dom"
import { LIST_COMPONENTS } from "../../data/components"

const Components = () => {
    const { component } = useParams()
    const components = LIST_COMPONENTS.filter( ( element ) => (element.group.name).toLowerCase().replaceAll(" ", "-") === component )

    console.log(components)
    return (
        <div className="wrapper">
            <div className="wrapper__content container"> {component} </div>
        </div>
    )
}

export default Components