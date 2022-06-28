import "./Components.css"
import { useParams } from "react-router-dom"
import { GROUP_COMPONENT, LIST_COMPONENTS } from "../../data/components"
import Card from "../utils/Card"

const ListComponents = () => {
    const { component } = useParams()

    const cards = LIST_COMPONENTS.filter((item) => item.group === component)
    const [name, max_width, min_height] = GROUP_COMPONENT[cards[0].group]

    let myStyle = {'--max-width-column':`${max_width}px`}


    return (
        <div className="wrapper">
            <div className="wrapper__container-full">
                <h1 className="wrapper__header"> Componentes / {name} </h1>
                <div className="wrapper__component" style={myStyle}>
                    {cards
                        ? cards.map(({ id, author, tags, path, group }) => (
                            <Card
                                key={id}
                                avatar={author.avatar}
                                username={author.username}
                                tags={tags}
                                min_height={min_height}
                                link={`/components/${component.toLocaleLowerCase()}/${path}`} />
                        ))
                        : "Cargando..."}
                </div>
            </div>
        </div>
    )
}

export default ListComponents