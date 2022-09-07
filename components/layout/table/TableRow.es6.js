import * as React from 'react'
import classnames from 'classnames'


function TableRow ({ children, isInTableHeader, noHover, onClick, className, ...otherProps }) {
  const classNames = classnames({
    'ds-table__row-no-hover': noHover,
    'ds-table__row-clickable': onClick
  }, className)
  if (isInTableHeader) {
    return (
      <tr
        className={classNames}
        {...otherProps}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            isInTableHeader
          })
        })}
      </tr>
    )
  }
  return (
    <tr
      className={classNames}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </tr>
  )
}

TableRow.defaultProps = {
  onClick: () => {}
}

export default TableRow
