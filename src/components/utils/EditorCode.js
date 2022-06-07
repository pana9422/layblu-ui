import "./EditorCode.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faAngleDown, faCopy } from "@fortawesome/free-solid-svg-icons";

import Editor from "@monaco-editor/react";
import { useEffect } from "react";
const EditorCode = ({ icon, lang, group, setContent, content, file, tag, nameFile }) => {



    useEffect(() => {
        if (tag) {
            fetch(`https://source-orpin.vercel.app/components/${group}/${file}`)
                .then((res) => res ? res.text() : false)
                .then( res => res.replaceAll(`.${nameFile} `, ""))
                .then((res) => setContent(res));
        }
        
    }, [])

    return (
        <code className="code__editor">
            <div className="code__tab">
                <span className="code__title">
                    <FontAwesomeIcon className={`code__icon-${lang.toLowerCase()}`} icon={icon} /> {lang}
                </span>
                <div className="code__actions">
                    <button className="code__button">
                        <FontAwesomeIcon icon={faCopy} />
                        <span className="code__button-text">Copiar</span>
                    </button>
                    <button className="code__button">
                        <FontAwesomeIcon icon={faSave} />
                        <span className="code__button-text">Guardar</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                </div>
            </div>

            <Editor
                theme="vs-dark"
                options={{ minimap: { enabled: false } }}
                onChange={(value) => setContent(value)}
                defaultLanguage={lang.toLowerCase()}
                value={content}
            />
        </code>
    );
};

export default EditorCode;
