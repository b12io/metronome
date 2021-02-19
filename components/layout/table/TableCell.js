/* @flow */
import * as React from 'react'
import classnames from 'classnames'

type Props = {
  isInTableHeader?: boolean,
  nowrap?: boolean,
  align: 'left' | 'center' | 'right',
  children?: React.Node
}

function TableCell ({ children, nowrap, isInTableHeader, align, ...otherProps }: Props, context: *) {
  const Component = isInTableHeader ? 'th' : 'td'
  const cellClassnames = classnames({
    'ds-table__cell--nowrap': nowrap,
  }, `ds-table__cell--align-${align}`)
  return (
    <Component
      className={cellClassnames}
      {...otherProps}
    >
      {children}
    </Component>
  )
}

TableCell.defaultProps = {
  align: 'left'
}

export default TableCell
