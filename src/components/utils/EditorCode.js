import "./EditorCode.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import Editor from "@monaco-editor/react";
const EditorCode = ({ icon, lang, setContent, content }) => {

    return (
        <code className="editor-code">
            <div className="editor-code__tab">
                <span className="editor-code__title">
                    <FontAwesomeIcon className={`editor-code__icon-${lang.toLowerCase()}`} icon={icon} /> 
                    {lang}
                </span>
                <div className="editor-code__actions">
                    <button className="editor-code__button">
                        <FontAwesomeIcon icon={faCopy} />
                        <span className="editor-code__button-text">Copiar</span>
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
