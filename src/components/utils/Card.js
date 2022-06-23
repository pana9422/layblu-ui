import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Card.css";
import { useSearchFile } from "../../hooks/useFetch";

const Card = ({ avatar, username, tags, link, group }) => {
    const card = useRef()

    const { min_height_item } = group
    const {preview } = useSearchFile(link, tags)       


    useEffect(() => {
        card.current.style.setProperty("--min-height-row", `${min_height_item}px`)
    }, [min_height_item])



    return (
        <article ref={card} className="card">
            <iframe className="card__component" title="preview" src={`data:text/html;base64,${preview}`} />
            <footer className="card__footer">
                <div className="card__author">
                    <img className="card__avatar" src={avatar} alt={username} />
                    <span className="card__username">{username}</span>
                </div>
                <div className="card__tags">
                    {tags.map((tag, index) => (
                        <span key={index} className={`card__tech card__tech--${tag.toLowerCase()}`}>{tag}</span>
                    ))}
                    <Link className="card__view" to={link}> Ver codigo </Link>
                </div>
            </footer>
        </article>
    );
};

export default Card;