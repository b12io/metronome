/*  */
import React from 'react'


/**
 * Column.
 */
function Column ({ children }) {
  return (<div className="col-md-6">{children}</div>)
}

Column.defaultProps = {
  children: null
}

export default Column
