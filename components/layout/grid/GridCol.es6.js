/*  */
import React from 'react'
import classnames from 'classnames'



function GridCol ({ className, children, col, align }) {
  const classes = classnames(
    'ds-grid__col',
    `ds-grid__col--col-${col}`,
    `ds-grid__col--align-${align}`,
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

GridCol.defaultProps = {
  col: 'auto', // 1 | 2 | 3 | 4 | 5 | 6
  align: 'center' // start | end
}

export default GridCol
