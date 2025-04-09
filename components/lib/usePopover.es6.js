import { useState, useCallback } from 'react'

function usePopover (isProcessing) {
  const [activePopover, setActivePopover] = useState(null)

  const togglePopover = useCallback(
    (popoverName) => {
      if (isProcessing) return

      setActivePopover((current) => (current === popoverName ? null : popoverName))
    },
    [isProcessing],
  )

  return { activePopover, togglePopover }
}

export default usePopover
