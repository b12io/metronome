/* @flow */

import React, { type Node } from 'react'
import classnames from 'classnames'

type Props = {
  className?: string | Object,
  label: string,
  icon?: Node,
  disabled?: boolean,
  onClick: () => void | Promise<void>,
  onCloseMenu: () => void
}

function DropdownItem ({ className, label, icon, disabled, onClick, onCloseMenu }: Props) {
  return (
    <div
      className={classnames({
        'ds-dropdown__menu-item': true,
        'ds-dropdown__menu-item--disabled': disabled
      }, className)}
      onClick={(event) => {
        event && event.stopPropagation()
        if (disabled) {
          return
        }

        onClick()
        onCloseMenu()
      }}
    >
      <span>{icon}{label}</span>
    </div>
  )
}

DropdownItem.defaultProps = {
  onCloseMenu: () => {}
}

export default DropdownItem
