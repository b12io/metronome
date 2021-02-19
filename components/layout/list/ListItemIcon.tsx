import React from 'react'
import classnames from 'classnames'
import { Draggable } from '../../Icons'

const ListItemIcon = props => {
  const {className, icon, draggableIcon, ...otherProps} = props

  const classes = classnames({
    'card-list-item__icon': !draggableIcon,
    'card-list-item__handle': draggableIcon && !icon
  }, className)

  let iconElement = null
  if (draggableIcon) {
    iconElement = <Draggable width={10} height={17} color="#ccc" />
  } else if (icon) {
    iconElement = React.cloneElement(icon)
  }

  return (
    <div className={classes} {...otherProps}>
      {iconElement}
    </div>
  )
}

export default ListItemIcon
