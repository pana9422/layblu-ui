import "./ListComponents.css"
import { useParams } from "react-router-dom"
import { LIST_COMPONENTS } from "../../data/components"
import Card from "../utils/Card"
import { replaceStr } from "../../helpers/func";
import { useRef, useEffect } from "react";

const ListComponents = () => {
    const { component } = useParams()
    const cards = LIST_COMPONENTS.filter(({ group }) => replaceStr(group.name) === component)
    const wrapper = useRef()

    useEffect( () => {
        wrapper.current.style.setProperty( "--max-width-column", `${cards[0]["group"]["max_width_item"]}px` )
    })


    return (
        <div className="wrapper">
            <div ref={wrapper} className="wrapper__content container components">
                {cards.length > 0
                    ? cards.map(({ id, author, tags, path, group }) => (
                        <Card
                            key={id}
                            avatar={author.avatar}
                            username={author.username}
                            tags={tags}
                            name={`${path}`}
                            group={group}
                            link={`/components/${component.toLocaleLowerCase()}/${path}.html`} />
                    ))
                    : "Cargando..."}
            </div>
        </div>
    )
}

export default ListComponents