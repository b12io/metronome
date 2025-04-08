import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function PromptInputActions ({ children, className }) {
  return (
    <div className={classnames({
      'ds-prompt-input__actions': true,
    }, className)}>
      {children}
    </div>
  )
}

PromptInputActions.defaultProps = {
  className: '',
  children: null
}

PromptInputActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default PromptInputActions

