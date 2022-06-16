/*  */
import * as React from 'react'
import classnames from 'classnames'
import TableHead from './TableHead.es6'
import TableBody from './TableBody.es6'



function Table ({
  className,
  cardLike,
  padding,
  verticalAlign,
  children,
  background,
  responsive = false,
  ...otherProps
}) {
  const wrapperClasses = classnames({
    'ds-table-wrapper': cardLike,
    'ds-table-responsive': responsive
  })
  const tableClasses = classnames(
    'ds-table',
    {
      'ds-table--compact': padding && padding === 'compact',
      'ds-table--comfortable': padding && padding === 'comfortable'
    },
    `ds-table--vertical-align-${verticalAlign}`,
    `ds-table--background-${background}`,
    className
  )

  return (
    <div
      className={wrapperClasses}
    >
      <table
        className={tableClasses}
        {...otherProps}
      >
        {children}
      </table>
    </div>
  )
}

Table.defaultProps = {
  background: 'transparent',
  verticalAlign: 'top'
}

export default Table
