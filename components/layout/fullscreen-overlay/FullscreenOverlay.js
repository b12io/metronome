// @flow

import React from 'react'

import type { Node } from 'react'

type Props = {
  children?: Node,
  leftIcon?: Node,
}

function FullscreenOverlay ({ children, leftIcon }: Props) {
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
