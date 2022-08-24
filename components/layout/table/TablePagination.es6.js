import * as React from 'react'
import classnames from 'classnames'
import CommonPagination from './CommonPagination.es6.js'

function TablePagination({
  count,
  className,
  rowsPerPage,
  page,
  backgroundType,
  onChangePage
}) {
  const classNames = classnames(
    `ds-table__pagination--${backgroundType}`,
    className
  )
  const from = count === 0 ? 0 : page * rowsPerPage + 1
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
