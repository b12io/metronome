import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Column from '../column/Column.es6.js'

/**
 * Row.
 */
function Row({ children, group }) {
  return (
    <div
      className={classnames({
        row: true,
        'ds-form-group': group
      })}
    >
      {children}
    </div>
  )
}

Row.defaultProps = {
  group: false
}

Row.propTypes = {
  children: PropTypes.arrayOf(Column).isRequired,
  group: PropTypes.bool
}

export default Row
