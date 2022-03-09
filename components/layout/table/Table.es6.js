/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import TableHead from './TableHead.es6'
import TableBody from './TableBody.es6'

type TableHeadType = React.Element<typeof TableHead>
type TableBodyType = React.Element<typeof TableBody>

type Props = {
  className?: string | Object,
  cardLike?: boolean,
  padding?: 'compact' | 'comfortable',
  verticalAlign: 'top' | 'middle',
  background: 'light' | 'transparent',
  responsive?: boolean,
  children: React.ChildrenArray<TableHeadType | TableBodyType> | TableHeadType | TableBodyType
}

function Table ({
  className,
  cardLike,
  padding,
  verticalAlign,
  children,
  background,
  responsive = false,
  ...otherProps
}: Props) {
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
