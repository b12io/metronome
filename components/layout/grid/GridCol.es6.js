import React from 'react'
import classnames from 'classnames'



function GridCol ({ className, children, col = 'auto', align = 'center' }) {
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

export default GridCol
