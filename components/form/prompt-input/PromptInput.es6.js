import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function PromptInput ( { children, className }) {
  return (
    <div className={classnames({
      'ds-prompt-input': true,
    }, className)}>
      {children}
    </div>
  )
}

PromptInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

PromptInput.defaultProps = {
  className: '',
  children: null
}

export default PromptInput

