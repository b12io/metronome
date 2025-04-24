import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import get from 'lodash/get'

function PromptInput ({ className, children }) {
  let textarea = null
  let actions = null
  let overlay = null
  const otherChildren = []

  React.Children.forEach(children, child => {
    const isTextarea = get(child, 'type.displayName') === 'PromptInputTextarea'
    const isActions = get(child, 'type.displayName') === 'PromptInputActions'
    const isOverlay = get(child, 'type.name') === 'TextRevealOverlay'

    if (isTextarea) {
      textarea = child
    } else if (isActions) {
      actions = child
    } else if (isOverlay) {
      overlay = child
    } else if (child) {
      otherChildren.push(child)
    }
  })

  return (
    <div className={classnames('ds-prompt-input', className)}>
      {textarea}
      {overlay}
      {actions}
      {otherChildren}
    </div>
  )
}

PromptInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default PromptInput

