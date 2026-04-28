import React from 'react'
import classnames from 'classnames'


function SidebarHeaderActionButton ({ dropdown = false, icon = '', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classnames({
        'ds-dropdown__toggle': dropdown,
        'ds-dropdown__toggle--no-padding': dropdown && typeof icon === 'string'
      })}
    >
      {icon}
    </button>
  )
}

export default SidebarHeaderActionButton
