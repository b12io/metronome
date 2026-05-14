import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function PromptInputActions ({ children = null, className = '' }) {
  return (
    <div className={classnames('ds-prompt-input__actions', className)}>
      {children}
    </div>
  )
}

PromptInputActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default PromptInputActions

