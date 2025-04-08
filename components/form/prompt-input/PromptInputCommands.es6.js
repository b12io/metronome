import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function PromptInputCommands (props) {
  return (
    <div className={classnames({
      'ds-prompt-input__actions-commands': true,
    }, props.className)}>
      {props.children}
    </div>
  )
}

PromptInputCommands.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

PromptInputCommands.defaultProps = {
  className: '',
  children: null,
}

export default PromptInputCommands

