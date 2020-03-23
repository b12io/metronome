// @flow

import { useState, useEffect } from 'react'

type Ref = { current: null | HTMLDivElement }

function useClickOutside (containerRef: Ref) {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(function () {
    function onDocumentClick (event: MouseEvent | TouchEvent) {
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
