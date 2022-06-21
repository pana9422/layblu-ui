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

    const controller = new AbortController()
    const { signal } = controller

    const handlerMouseDownVertical = (e) => {

        const $prevEditorCode = e.target.previousElementSibling
        const $nextEditorCode = e.target.nextElementSibling

        let heightPrevEditorCode = parseInt(window.getComputedStyle($prevEditorCode).height);
        let heightNextEditorCode = parseInt(window.getComputedStyle($nextEditorCode).height);
        
        $prevEditorCode.style.height || $prevEditorCode.style.setProperty('height', `${heightPrevEditorCode}px`)
        $nextEditorCode.style.height || $nextEditorCode.style.setProperty('height', `${heightNextEditorCode}px`)

        const handlerMouseMove = (event) => {
            let prevHeightResizer = event.clientY - e.clientY
            let nextHeightResizer = e.clientY - event.clientY

            $prevEditorCode.style.setProperty('height', `${(prevHeightResizer + heightPrevEditorCode)}px`)
            $nextEditorCode.style.setProperty('height', `${(nextHeightResizer + heightNextEditorCode)}px`)

        }

        document.addEventListener('mousemove', handlerMouseMove, { signal })

        document.addEventListener('mouseup', (e) => {
            controller.abort()
        }, { signal })
    }

    const handlerMouseDownHorizontal = (e) => {

        const $prevEditorCode = e.target.previousElementSibling
        const $nextEditorCode = e.target.nextElementSibling

        let widthPrevEditorCode = parseInt(window.getComputedStyle($prevEditorCode).width);
        let widthNextEditorCode = parseInt(window.getComputedStyle($nextEditorCode).width);
        
        $prevEditorCode.style.width || $prevEditorCode.style.setProperty('width', `${widthPrevEditorCode}px`)
        $nextEditorCode.style.width || $nextEditorCode.style.setProperty('width', `${widthNextEditorCode}px`)

        const handlerMouseMove = (event) => {
            let prevWidthResizer = event.clientX - e.clientX
            let nextWidthResizer = e.clientX - event.clientX

            console.log(widthPrevEditorCode + prevWidthResizer)

            $prevEditorCode.style.setProperty('width', `${(widthPrevEditorCode + prevWidthResizer)}px`)
            $nextEditorCode.style.setProperty('width', `${(widthNextEditorCode + nextWidthResizer)}px`)

        }

        document.addEventListener('mousemove', handlerMouseMove, { signal })

        document.addEventListener('mouseup', (e) => {
            controller.abort()
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