import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function PromptInputSelectors ({ children, className }) {
  return (
    <div className={classnames('ds-prompt-input__actions-selectors', className)}>
      {children}
    </div>
  )
}
PromptInputSelectors.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

PromptInputSelectors.defaultProps = {
  className: '',
  children: null,
}
export default PromptInputSelectors

