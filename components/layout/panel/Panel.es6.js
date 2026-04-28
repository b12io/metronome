import React from 'react'
import classnames from 'classnames'



/**
 * Panel.
 */
function Panel ({ children = [], styles = {}, className }) {
  return (
    <div
      className={classnames('ds-panel', className)}
      style={styles}
    >
      {children}
    </div>
  )
}

export default Panel
