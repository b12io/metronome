import React from 'react'
import classnames from 'classnames'

const ListItemEmpty = props => {
  const {label, className} = props
  const classes = classnames('collection__items-empty', className)
  return (
    <div className={classes}>
      {label}
    </div>
  )
}

export default ListItemEmpty
