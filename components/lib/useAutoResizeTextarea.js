import { useEffect, useRef, useCallback } from 'react'


function useAutoResizeTextarea(value) {
  const textareaRef = useRef(null)

  // Resize the textarea whenever the value changes
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [value])

  const resizeTextarea = useCallback(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [])

  return { textareaRef, resizeTextarea }
}

export default useAutoResizeTextarea
