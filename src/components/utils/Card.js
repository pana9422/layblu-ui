import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Card.css";

const Card = ({ avatar, username, tags, link, name, group }) => {

    const [contentHTML, setContentHTML] = useState("")
    const [contentCSS, setContentCSS] = useState("")
    const [contentJS, setContentJS] = useState("")
    const [contentPreview, setContentPreview] = useState("")
    const card = useRef()
    useEffect(() => {
        const getFile = (tag, state) => {
            fetch(`https://source-orpin.vercel.app${link}.${tag.toLowerCase()}`)
                .then(res => res ? res.text() : "")
                .then(res => state(res))
                .catch( err => console.log(err))
        }
        
        card.current.style.setProperty( "--min-height-row", `${group.min_height_item}px` )
        const template = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="https://source-orpin.vercel.app/components/presets.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <style>${contentCSS}</style>
            </head>
            <body style="display: flex; justify-content: center; align-items: center;">
                <div style="width:100%; display:flex; justify-content: center; align-items: center; flex-direction: column; gap: 12px">${contentHTML}</div>
                <script>${contentJS}</script>
            </body>
            </html>`;
        tags.forEach(tag => {
            const state = tag === "JS" ? setContentJS : tag === "CSS" ? setContentCSS : setContentHTML
            getFile(tag, state)
        })
        setContentPreview(template)
        
    }, [contentHTML, contentCSS, contentJS])



    return (
        <article ref={card} className="card">
            <header className="card__author">
                <img className="card__avatar" src={avatar} alt={username} />
                <span className="card__username">{username}</span>
            </header>
            <iframe className="card__component" title={name} srcDoc={contentPreview || "Cargando..."} />
            <footer className="card__footer">
                {tags.map((tag, index) => (
                    <span key={index} className={`card__tech card__tech--${tag.toLowerCase()}`}>{tag}</span>
                ))}
                <Link className="card__view" to={link}> Ver codigo </Link>
            </footer>
        </article>
    );
};

export default Card;