import React from 'react'
import classnames from 'classnames'


function SidebarActions ({ children, alignRight, alignLeft }) {
  return (
    <div className={classnames({
      'ds-sidebar__actions': true,
      'ds-sidebar__actions--right': alignRight,
      'ds-sidebar__actions--left': alignLeft,
    })}
    >
      {children}
    </div>
  )
}

SidebarActions.defaultProps = {
  children: []
}

export default SidebarActions
