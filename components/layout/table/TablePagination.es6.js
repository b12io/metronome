/* @flow */

import * as React from 'react'
import classnames from 'classnames'
import CommonPagination from './CommonPagination.es6'

type Props = {
  count: number,
  rowsPerPage: number,
  className?: string | Object,
  page: number,
  backgroundType: 'light' | 'dark',
  onChangePage: (page: number) => void
}

function TablePagination ({ count, className, rowsPerPage, page, backgroundType, onChangePage }: Props) {
  const classNames = classnames(
    `ds-table__pagination--${backgroundType}`,
    className
  )
  const from = (count === 0)
    ? 0
    : page * rowsPerPage + 1
  const to = Math.min(count, (page + 1) * rowsPerPage)
  return (
    <CommonPagination
      paginationText={`${from}–${to} of ${count}`}
      onGoBack={() => onChangePage(page - 1)}
      onGoForward={() => onChangePage(page + 1)}
      canGoBack={page > 0}
      canGoForward={page < Math.ceil(count / rowsPerPage) - 1}
      className={classNames}
    />
  )
}

TablePagination.defaultProps = {
  backgroundType: 'light'
}

export default TablePagination
