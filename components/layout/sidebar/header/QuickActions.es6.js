import React, { Fragment } from 'react'
import classnames from 'classnames'
import { isEmpty } from 'lodash'

function QuickActions({ actions, onSelect, label }) {
  if (isEmpty(actions) || !Array.isArray(actions)) {
    return null
  }

  const DropdownMenuLabel = ({ label }) => (
    <li className="ds-dropdown__menu-header">{label}</li>
  )

  const DropdownMenuDivider = () => <li className="ds-dropdown__menu-divider" />

  return (
    <ul className="ds-dropdown__menu">
      <DropdownMenuLabel label={label} />
      {actions.map(
        (
          {
            icon,
            text,
            divider,
            actionLabel,
            action,
            hidden,
            disabled,
            onActionSelect
          },
          index
        ) => (
          <Fragment key={text}>
            {actionLabel && <DropdownMenuLabel label={actionLabel} />}
            <li
              className={classnames({
                'ds-dropdown__menu-item': true,
                'ds-dropdown__menu-item--hidden': hidden,
                'ds-dropdown__menu-item--disabled': disabled,
                'ds-dropdown__menu-item--no-icon': !icon
              })}
              onClick={() => {
                if (disabled) {
                  return
                }

                if (onActionSelect) {
                  onActionSelect()
                }
                onSelect(index)
              }}
            >
              {action || (
                <span>
                  {icon}
                  {text}
                </span>
              )}
            </li>
            {divider && <DropdownMenuDivider />}
          </Fragment>
        )
      )}
    </ul>
  )
}

QuickActions.defaultProps = {
  actions: null,
  label: ''
}

export default QuickActions
