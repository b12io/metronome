import React from 'react'
import classnames from 'classnames'



/**
 * Grid.
 */
function Grid ({ className, children, justify = 'between', align = 'center', direction = 'row', nowrap }) {
  const classes = classnames(
    'ds-grid',
    `ds-grid--justify-${justify}`,
    `ds-grid--align-${align}`,
    `ds-grid--direction-${direction}`,
    {'ds-grid--nowrap': nowrap},
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Grid
