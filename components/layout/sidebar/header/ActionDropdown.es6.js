import React, { forwardRef } from 'react'
import QuickActions from './QuickActions.es6.js'
import SidebarHeaderActionButton from './SidebarHeaderActionButton.es6.js'

import classnames from 'classnames'

const ActionDropdown = forwardRef(({
  icon,
  actionsAvailable,
  actionsVisible,
  setActionsVisibility,
  quickDialog,
  quickActions,
  onClick,
  dropdownMenuLabel,
  onQuickActionSelected,
  isLogoDropDown,
  handleHover,
}, ref) => {
  const hoverHandlers = handleHover ? {
    onMouseEnter: onClick,
    onMouseLeave: onClick,
  } : {}

  return (
    <div
      className={classnames({
        'ds-dropdown': actionsAvailable && icon,
        'ds-dropdown--right': actionsAvailable && icon && !isLogoDropDown,
        'ds-dropdown--left': isLogoDropDown,
        'ds-dropdown--menu-visible': actionsAvailable && actionsVisible,
        'ds-sidebar__header-action': !actionsAvailable
      })}
      ref={ref}
      {...hoverHandlers}
    >
      {icon && (
        <SidebarHeaderActionButton
          dropdown={actionsAvailable}
          icon={icon}
          onClick={onClick}
        />
      )}

      {quickDialog}

      {actionsVisible && (
        <QuickActions
          actions={quickActions}
          label={dropdownMenuLabel}
          onSelect={(idx) => {
            setActionsVisibility(false)
            onQuickActionSelected && onQuickActionSelected(idx)
          }}
        />
      )}
    </div>
  )
})

export default ActionDropdown
