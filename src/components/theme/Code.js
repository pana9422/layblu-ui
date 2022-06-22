import "./Code.css";
import { useParams } from "react-router-dom";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";

import EditorCode from "../utils/EditorCode";
import { useSearchFile } from "../../hooks/useFetch";
import { LIST_COMPONENTS } from "../../data/components";

const Code = () => {
    const { component } = useParams()
    const { code } = useParams()
    const { tags } = LIST_COMPONENTS.filter(({ path }) => path === code)[0]
    const { html, css, js, preview } = useSearchFile(`/components/${component.toLocaleLowerCase()}/${code}`, tags)


    const handlerResizer = (size, e) => {


        const controller = new AbortController()
        const { signal } = controller

        const $prevElement = e.target.previousElementSibling
        const $nextElement = e.target.nextElementSibling

        let sizePrevElement = parseInt(window.getComputedStyle($prevElement)[size]);
        let sizeNextElement = parseInt(window.getComputedStyle($nextElement)[size]);

        
        size === "width" && $nextElement.style.setProperty('min-width', `320px`)
        size === "width" && $nextElement.classList.add("code__preview-resize")

        size === "width" || $prevElement.style.setProperty('min-height', `40px`)
        size === "width" || $nextElement.style.setProperty('min-height', `40px`)

        const addSize = (element, value) => element.style.setProperty(size, value)
        
        $prevElement.style[size] || addSize($prevElement, `${sizePrevElement}px`)
        $nextElement.style[size] || addSize($nextElement, `${sizeNextElement}px`)

        document.addEventListener('mousemove', (event) => {
            let diffSizePrev = size === "width" ? event.clientX - e.clientX : event.clientY - e.clientY
            let diffSizeNext = size === "width" ? e.clientX - event.clientX : e.clientY - event.clientY
            let prevSizeResizer = diffSizePrev + sizePrevElement
            let nextSizeResizer = diffSizeNext + sizeNextElement

            $prevElement.style.setProperty(size, `${prevSizeResizer}px`)
            $nextElement.style.setProperty(size, `${nextSizeResizer}px`)

        }, { signal })

        document.addEventListener('mouseup', () => {
            controller.abort()
            size === "width" && $nextElement.classList.remove("code__preview-resize")
        }, { signal })
    }
    return (
        <div className="code">

            <div className="code__editor">
                <EditorCode content={html?.contentHTML} setContent={html?.setContentHTML} icon={faHtml5} lang="HTML" />

                <div className="code__resizerH" onMouseDown={ (e) => handlerResizer('height', e) }></div>

                <EditorCode content={css?.contentCSS} setContent={css?.setContentCSS} icon={faCss3} lang="CSS" />

                <div className="code__resizerH" onMouseDown={ (e) => handlerResizer('height', e) }></div>

                <EditorCode content={js?.contentJS} setContent={js?.setContentJS} icon={faJs} lang="JavaScript" />

            </div>

            <div className="code__resizerV" onMouseDown={ (e) => handlerResizer('width', e) }></div>

            <iframe className="code__preview" title={code} srcDoc={preview} />

        </div>
    );
};

export default Code;