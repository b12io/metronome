import React from 'react'


/**
 * Column.
 */
function Column ({ children = null }) {
  return (<div className="col-md-6">{children}</div>)
}

export default Column
