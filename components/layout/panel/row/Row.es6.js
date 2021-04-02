import React from 'react'
import classnames from 'classnames'
import Column from '../column/Column.es6.js'

/**
 * Row.
 */
function Row ({ children, group }) {
  return (<div className={classnames({
    row: true,
    'ds-form-group': group
  })}>{children}</div>)
}

Row.defaultProps = {
  group: false
}

export default Row
