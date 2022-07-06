import * as React from 'react'

function SidebarBody ({ children, handleScroll }) {
  return (
    <div
      className="ds-sidebar__body"
      onScroll={(e) => handleScroll && handleScroll(e)}
    >
      {children}
    </div>
  )
}

SidebarBody.defaultProps = {
  children: []
}

export default SidebarBody
