import { useState, useEffect } from 'react';

export const useSearchFile = url => {

  const [response, setResponse] = useState({
    data: null,
    message: null
  })

  useEffect(() => {

    fetch(url)
      .then(res => res && res.text())
      .then(res => {
        const $element = document.createElement("div")
        
        setResponse({ data: res, message: "success" })
      })
      .catch(err => setResponse({ data: null, message: err }))

  }, [url])

  return response
}
