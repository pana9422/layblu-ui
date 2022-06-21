import { useState, useEffect } from 'react';

export const useSearchFile = (url, tags) => {

  const [contentHTML, setContentHTML] = useState("")
  const [contentCSS, setContentCSS] = useState("")
  const [contentJS, setContentJS] = useState("")

  const [data, setData] = useState({
    html: null,
    css: null,
    js: null,
    preview: null
  })
  useEffect(() => {
    const getFileFetch = async (path, setState) => {
      fetch(path)
        .then(res => {
          if (!res.ok) throw new Error("Ocurrio un error")
          return res.text()
        })
        .then(res => setState(res))
        .catch(err => {
          console.error(err)
          setData(null)
        })
    }
    const ext = {
      js: setContentJS,
      css: setContentCSS,
      html: setContentHTML
    }

    tags.forEach(tag => {
      const file = `https://source-orpin.vercel.app${url}.${tag.toLowerCase()}`
      getFileFetch(file, ext[tag.toLowerCase()])
    });
  }, [url, tags])

  useEffect(() => {
    const template = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * { box-sizing: border-box; }
                body { margin: 2rem 0; font-family: sans-serif; font-size: 16px; line-height: 1.5; overflow-x: hidden; width: 100%; display: flex; flex-direction: column; gap: 10px; align-items: center; }
            </style>
            <style>${contentCSS}</style>
        </head>
        <body>
            ${contentHTML}
            <script>
              document.querySelectorAll("a").forEach( element => element.addEventListener("click", e => e.preventDefault() ))
              ${contentJS}
            </script>
        </body>
        </html>
        `;
    setData({
      html: { contentHTML, setContentHTML },
      css: { contentCSS, setContentCSS },
      js: { contentJS, setContentJS },
      preview: template
    })

  }, [contentCSS, contentHTML, contentJS])
  return data
}