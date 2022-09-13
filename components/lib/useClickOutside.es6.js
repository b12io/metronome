
import { useState, useEffect } from 'react'


function useClickOutside (containerRef) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(function () {
    function onDocumentClick (event) {
      if (!isVisible || !containerRef.current) {
        return
      }

      if (!containerRef.current.contains(event.target) && isVisible) {
        setIsVisible(false)
      }
    }

    document.addEventListener('click', onDocumentClick, false)
    document.addEventListener('touchend', onDocumentClick, false)

    return function () {
      document.removeEventListener('click', onDocumentClick, false)
      document.removeEventListener('touchend', onDocumentClick, false)
    }
  })

  return {
    isVisible,
    setIsVisible
  }
}

export default useClickOutside
