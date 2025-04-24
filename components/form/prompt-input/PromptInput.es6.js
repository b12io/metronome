import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function PromptInput ({ className, children }) {
  let textarea = null
  let actions = null
  let overlay = null
  const otherChildren = []

  const identifyChildComponent = (child) => {
    if (child && child.type) {
      if (child.type.displayName === 'PromptInputTextarea') {
        return 'textarea'
      } else if (child.type.displayName === 'PromptInputActions') {
        return 'actions'
      } else if (child.type.name === 'TextRevealOverlay') {
        return 'overlay'
      } else {
        return 'other'
      }
    }
    return null
  }

  React.Children.forEach(children, child => {
    const componentType = identifyChildComponent(child)

    switch (componentType) {
      case 'textarea':
        textarea = child
        break
      case 'actions':
        actions = child
        break
      case 'overlay':
        overlay = child
        break
      case 'other':
        otherChildren.push(child)
        break
      default:
        break
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

