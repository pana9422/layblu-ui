import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ avatar, username, tags, link, name }) => {

    const [contentHTML, setContentHTML] = useState("")
    const [contentCSS, setContentCSS] = useState("")
    const [contentJS, setContentJS] = useState("")
    const [contentPreview, setContentPreview] = useState("")

    useEffect(() => {
        const getFile = (tag, state) => {
            fetch(`https://source-orpin.vercel.app${link}.${tag.toLowerCase()}`)
                .then(res => res ? res.text() : "")
                .then(res => state(res));
        }
        const template = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="https://source-orpin.vercel.app/components/presets.css" />
                <style>${contentCSS}</style>
            </head>
            <body style="display: flex; align-items: flex-start; justify-content: center;">
                <div style="transform: scale(.7); transform-origin: top;">${contentHTML}</div>
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
        <article className="card">
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