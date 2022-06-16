/*  */
import React from 'react'
import classnames from 'classnames'


function SidebarHeaderActionButton ({ dropdown, icon, onClick }) {
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

SidebarHeaderActionButton.defaultProps = {
  dropdown: false,
  icon: ''
}

export default SidebarHeaderActionButton
