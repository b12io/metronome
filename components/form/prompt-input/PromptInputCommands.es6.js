import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function PromptInputCommands ({ className = '', children = null }) {
  return (
    <div className={classnames('ds-prompt-input__actions-commands', className)}>
      {children}
    </div>
  )
}

PromptInputCommands.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default PromptInputCommands

