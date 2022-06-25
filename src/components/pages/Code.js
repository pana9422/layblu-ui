import "./Code.css";
import { useParams } from "react-router-dom";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";

import EditorCode from "../utils/EditorCode";
import { useSearchFile } from "../../hooks/useFetch";
import { LIST_COMPONENTS } from "../../data/components";

document.addEventListener('keydown', e => {
  if(e.ctrlKey && e.key === 's') {
    e.preventDefault();
  }
})

const Code = () => {
    const { component } = useParams()
    const { code } = useParams()
    const { tags } = LIST_COMPONENTS.filter(({ path }) => path === code)[0]
    const { html, css, js, preview } = useSearchFile(`/components/${component.toLocaleLowerCase()}/${code}`, tags)

    const getStyle = (element, prop) => window.getComputedStyle(element)[prop]

    const handlerResizer = (size, e) => {
        const controller = new AbortController()
        const { signal } = controller

        const $prevElement = e.target.previousElementSibling
        const $nextElement = e.target.nextElementSibling

        const sizePrevElement = parseFloat(getStyle($prevElement, size));
        const sizeNextElement = parseFloat(getStyle($nextElement, size));

        size === "width" && $nextElement.classList.add("code__preview-resize")
        document.addEventListener('mousemove', (event) => {

            const limitPrev = parseFloat(getStyle($prevElement, size))
            const limitNext = parseFloat(getStyle($nextElement, size))
            const axis = (ev, val) => val === "width" ? ev.clientX : ev.clientY
            const sizeResizerPrevElement = axis(event, size) - axis(e, size) + sizePrevElement
            const sizeResizerNextElement = axis(e, size) - axis(event, size) + sizeNextElement

            limitNext > 40 && $prevElement.style.setProperty(size, `${sizeResizerPrevElement}px`)
            limitPrev > 40 && $nextElement.style.setProperty(size, `${sizeResizerNextElement}px`)

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
                <div className="code__resizerH" onMouseDown={(e) => handlerResizer('height', e)}></div>
                <EditorCode content={css?.contentCSS} setContent={css?.setContentCSS} icon={faCss3} lang="CSS" />
                <div className="code__resizerH" onMouseDown={(e) => handlerResizer('height', e)}></div>
                <EditorCode content={js?.contentJS} setContent={js?.setContentJS} icon={faJs} lang="JavaScript" />
            </div>
            <div className="code__resizerV" onMouseDown={(e) => handlerResizer('width', e)}></div>
            <iframe className="code__preview" title={code} src={`data:text/html;base64,${preview}`} />
        </div>
    );
};

export default Code;
