import React from 'react'
import classnames from 'classnames'

function DropdownItem({
  className,
  label,
  icon,
  disabled,
  onClick,
  onCloseMenu
}) {
  return (
    <div
      className={classnames(
        {
          'ds-dropdown__menu-item': true,
          'ds-dropdown__menu-item--disabled': disabled
        },
        className
      )}
      onClick={(event) => {
        event && event.stopPropagation()
        if (disabled) {
          return
        }

        onClick()
        onCloseMenu()
      }}
    >
      <span>
        {icon}
        {label}
      </span>
    </div>
  )
}

DropdownItem.defaultProps = {
  onCloseMenu: () => {}
}

export default DropdownItem
