/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import { CaretDown } from '../../../components/Icons.es6.js'

type Props = {
  label: string,
  active: boolean,
  className?: string | Object,
  direction: 'asc' | 'desc',
  icon?: React.Element<'svg'>
}

function TableSortLabel ({ className, active, direction, icon, label, ...otherProps }: Props) {
  const classNames = classnames(
    'ds-table__sort-label',
    {'ds-table__sort-label--active': active},
    `ds-table__sort-label--${direction}`,
    className
  )
  return (
    <div
      className={classNames}
      {...otherProps}
    >
      {label}
      {icon}
    </div>
  )
}

TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc',
  icon: <CaretDown color="#84839C"/>
}

export default TableSortLabel
