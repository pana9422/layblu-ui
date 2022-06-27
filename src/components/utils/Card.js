import { Link } from "react-router-dom";
import "./Card.css";
import { useSearchFile } from "../../hooks/useFetch";

const Card = ({ avatar, username, tags, link, group }) => {
    const { min_height_item } = group

    const { preview } = useSearchFile(link, tags)

    let styleCard = {
        minHeight: `${min_height_item}px`
    }
    return (
        <article className="card" style={styleCard}>
            <iframe className="card__component" title="preview" src={`data:text/html;base64,${preview}`} />
            <footer className="card__footer">
                <div className="card__author">
                    <img className="card__avatar" src={avatar} alt={username} />
                    <span className="card__username">{username}</span>
                </div>
                <div className="card__tags">
                    {tags.map(tag => (
                        <span key={tag} className={`card__tech card__tech--${tag.toLowerCase()}`}>{tag}</span>
                    ))}
                    <Link className="card__view" to={link}> Ver codigo </Link>
                </div>
            </footer>
        </article>
    );
};

export default Card;