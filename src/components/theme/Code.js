
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";

import "./Code.css";
import EditorCode from "../utils/EditorCode";
import { LIST_COMPONENTS } from "../../data/components";

const Code = () => {
    const replaceStr = (str) => str.toLowerCase().replaceAll(" ", "-")

    const { codeComponent } = useParams();
    const { tags, group } = LIST_COMPONENTS.filter( el => replaceStr(`${el.name} ${el.id}`) === codeComponent)[0]

    const [contentHTML, setContentHTML] = useState("");
    const [contentCSS, setContentCSS] = useState("");
    const [contentJavaScript, setContentJavaScript] = useState("");
    const [contentPreview, setContentPreview] = useState("");
    

    useEffect(() => {

        const template = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet" href="https://source-orpin.vercel.app/components/presets.css" />
                <style>${contentCSS}</style>
            </head>
            <body style="display: flex; align-items: center; justify-content: center; padding: 3rem">
                ${contentHTML}
                <script>
                const $a = document.querySelectorAll("a")
                $a.forEach( element => element.addEventListener("click", e => e.preventDefault() ))
                
                ${contentJavaScript}
                </script>
            </body>
            </html>`;
        setContentPreview(template);
    }, [contentCSS, contentHTML, contentJavaScript]);

    return (
        <div className="code">
            <EditorCode nameFile={codeComponent} file={`${codeComponent}.html`} group={ group.name} icon={faHtml5} lang="HTML" setContent={setContentHTML} content={contentHTML} tag={ tags.includes("HTML")} />
            <EditorCode nameFile={codeComponent} file={`${codeComponent}.css`} group={ group.name} icon={faCss3} lang="CSS" setContent={setContentCSS} content={contentCSS} tag={ tags.includes("CSS")} />
            <EditorCode nameFile={codeComponent} file={`${codeComponent}.js`} group={ group.name} icon={faJs} lang="JavaScript" setContent={setContentJavaScript} content={contentJavaScript} tag={ tags.includes("JS")} />

            <iframe className="code__preview" title={codeComponent} srcDoc={contentPreview} />
        </div>
    );
};

export default Code;