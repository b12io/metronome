// 

import React from 'react'
import classnames from 'classnames'
import Button from '../../../components/form/button/Button.es6'
import { ChevronLeft, ChevronRight } from '../../../components/Icons.es6'


function CommonPagination ({
  paginationText, className, canGoBack, canGoForward, onGoBack, onGoForward 
}) {
  const classNames = classnames(
    'ds-table__pagination',
    className
  )
  return (
    <div className={classNames}>
      <div className="ds-table__pagination-text">
        {paginationText}
      </div>
      <div
        className="buttons-group"
      >
        <Button
          disabled={!canGoBack}
          icon={<ChevronLeft color="#706f84"/>}
          onClick={onGoBack}
        />
        <Button
          disabled={!canGoForward}
          icon={<ChevronRight color="#706f84"/>}
          onClick={onGoForward}
        />
      </div>
    </div>
  )
}

export default CommonPagination
