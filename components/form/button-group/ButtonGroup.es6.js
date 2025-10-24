import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function ButtonGroup ({ vertical, className, children }) {
  return (
    <div className={classnames({
      'ds-button-group': true,
      'ds-button-group--vertical': vertical,
    }, className)}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  vertical: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

export default ButtonGroup
