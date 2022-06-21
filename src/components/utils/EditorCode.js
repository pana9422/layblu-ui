import "./EditorCode.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import Editor from "@monaco-editor/react";

import React, { useState } from 'react';

const EditorCode = ({ icon, lang, setContent, content }) => {
    
  const [ isCopied, setIsCopied ] = useState(false);

  const handlerCopyCode = (codeToCopy) => {
    navigator.clipboard.writeText(codeToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => console.error('Cannot write to clipboard',err));
  }
  
    return (
        <code className="editor-code">
            <div className="editor-code__tab">
                <span className="editor-code__title">
                    <FontAwesomeIcon className={`editor-code__icon-${lang.toLowerCase()}`} icon={icon} /> 
                    {lang}
                </span>
                <div className="editor-code__actions">
                    {
                      isCopied && <span className="editor-code__state">Copied to clipboad!</span>
                    }
                    <button className="editor-code__button" onClick={() => handlerCopyCode(content)}>
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
