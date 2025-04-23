import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function PromptInput ({ className, children }) {

  let textarea = null
  let actions = null
  let overlay = null

  React.Children.forEach(children, child => {
    if (child.type && child.type.displayName === 'PromptInputTextarea') {
      textarea = child
    } else if (child.type && child.type.displayName === 'PromptInputActions') {
      actions = child
    } else if (child.type && child.type.name === 'TextRevealOverlay') {
      overlay = child
    }
  })

  return (
    <div className={classnames('ds-prompt-input', className)}>
      {textarea}
      {overlay}
      {actions}
      {React.Children.map(children, child => {
        if ((child.type && child.type.displayName !== 'PromptInputTextarea' &&
             child.type.displayName !== 'PromptInputActions') &&
            (child.type && child.type.name !== 'TextRevealOverlay')) {
          return child
        }
        return null
      })}
    </div>
  )
}

PromptInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default PromptInput

