import "./Components.css"
import { useParams } from "react-router-dom"
import { LIST_COMPONENTS } from "../../data/components"
import Card from "../utils/Card"
import { useEffect, useRef } from "react";

const ListComponents = () => {
    const { component } = useParams()
    const cards = LIST_COMPONENTS.filter(({ group }) => group.slug === component)
    
    const { max_width_item } = cards[0].group

    const wrapper = useRef()

    useEffect(() => {
        wrapper.current.style.setProperty("--max-width-column", `${max_width_item ?? 0}px`)
    }, [max_width_item])

    return (
        <div className="wrapper">
            <div className="wrapper__container-full">
                <h1 className="wrapper__header"> Componentes </h1>
                <div  ref={wrapper} className="wrapper__component">
                    {cards
                        ? cards.map(({ id, author, tags, path, group }) => (
                            <Card
                                key={id}
                                avatar={author.avatar}
                                username={author.username}
                                tags={tags}
                                group={group}
                                link={`/components/${component.toLocaleLowerCase()}/${path}`} />
                        ))
                        : "Cargando..."}
                </div>
            </div>
        </div>
    )
}

export default ListComponents