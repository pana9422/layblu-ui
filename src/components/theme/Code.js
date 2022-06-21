import "./Code.css";

import { useEffect, useRef } from "react";
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


    const handlerMouseDownVertical = (e) => {
        const controller = new AbortController()
        const { signal } = controller

        const $prevEditorCode = e.target.previousElementSibling
        const $nextEditorCode = e.target.nextElementSibling

        const setHeight = (element, value) => element.style.setProperty('height', value)
        
        $prevEditorCode.style.setProperty('min-height', `40px`)

        let heightPrevEditorCode = parseInt(window.getComputedStyle($prevEditorCode).height);
        let heightNextEditorCode = parseInt(window.getComputedStyle($nextEditorCode).height);


        $prevEditorCode.style.height || setHeight($prevEditorCode, `${heightPrevEditorCode}px`)
        $prevEditorCode.style.height || setHeight($nextEditorCode, `${heightNextEditorCode}px`)

        const handlerMouseMove = (event) => {
            let prevHeightResizer = event.clientY - e.clientY + heightPrevEditorCode
            let nextHeightResizer = e.clientY - event.clientY + heightNextEditorCode

            setHeight($prevEditorCode, `${(prevHeightResizer)}px`)
            setHeight($nextEditorCode, `${(nextHeightResizer)}px`)

        }

        document.addEventListener('mousemove', handlerMouseMove, { signal })

        document.addEventListener('mouseup', (e) => {
            controller.abort()
        }, { signal })
    }

    const handlerMouseDownHorizontal = (e) => {

        const controller = new AbortController()
        const { signal } = controller

        const $prevEditorCode = e.target.previousElementSibling
        const $nextPreview = e.target.nextElementSibling

        let widthPrevEditorCode = parseInt(window.getComputedStyle($prevEditorCode).width);
        let widthNextPreview = parseInt(window.getComputedStyle($nextPreview).width);
        
        $nextPreview.style.setProperty('min-width', `320px`)

        $nextPreview.classList.add("code__preview-resize")
        document.addEventListener('mousemove', (event) => {
            let prevWidthResizer = event.clientX - e.clientX + widthPrevEditorCode
            let nextWidthResizer = e.clientX - event.clientX + widthNextPreview

            $prevEditorCode.style.setProperty('width', `${prevWidthResizer}px`)
            $nextPreview.style.setProperty('width', `${nextWidthResizer}px`)

        }, { signal })

        document.addEventListener('mouseup', () => {
            controller.abort()
            $nextPreview.classList.remove("code__preview-resize")
        }, { signal })
    }
    return (
        <div className="code">

            <div className="code__editor">
                <EditorCode content={html?.contentHTML} setContent={html?.setContentHTML} icon={faHtml5} lang="HTML" />

                <div className="code__resizerH" onMouseDown={handlerMouseDownVertical}></div>

                <EditorCode content={css?.contentCSS} setContent={css?.setContentCSS} icon={faCss3} lang="CSS" />

                <div className="code__resizerH" onMouseDown={handlerMouseDownVertical}></div>

                <EditorCode content={js?.contentJS} setContent={js?.setContentJS} icon={faJs} lang="JavaScript" />

            </div>

            <div className="code__resizerV" onMouseDown={handlerMouseDownHorizontal}></div>

            <iframe className="code__preview" title={code} srcDoc={preview} />

        </div>
    );
};

export default Code;