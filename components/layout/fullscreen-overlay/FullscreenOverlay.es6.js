
import React from 'react'



function FullscreenOverlay ({ children, leftIcon }) {
  const leftIconNode = (
    <div className="ds-overlay__header-icon">
      {leftIcon}
    </div>
  )
  return (
    <div className="overlay-container">
      <div className="ds-overlay">
        {leftIcon && leftIconNode}
        {children}
      </div>
    </div>
  )
}

export default FullscreenOverlay
