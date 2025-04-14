import { useState, useCallback } from 'react'

function usePopover (isProcessing) {
  const [activePopover, setActivePopover] = useState(null)

  const togglePopover = useCallback(
    (popoverName) => {
      if (isProcessing) return

      // If the clicked popover name is the same, set it to null to close it. Otherwise set it to the name of the clicked popover to open it
      setActivePopover((current) => (current === popoverName ? null : popoverName))
    },
    [isProcessing],
  )

  return { activePopover, togglePopover }
}

export default usePopover
