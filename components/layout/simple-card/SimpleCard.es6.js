import * as React from 'react'
import classnames from 'classnames'

function SimpleCard({ align, className, children }) {
  const classNames = classnames(
    'ds-simple-card',
    `ds-simple-card--align-${align}`,
    className
  )
  return <div className={classNames}>{children}</div>
}

SimpleCard.defaultProps = {
  align: 'left'
}

export default SimpleCard
