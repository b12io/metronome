/* @flow */
import * as React from 'react'

type Props = {|
  children: React.Node,
  handleScroll?: (e: Object) => void
|}

function SidebarBody ({ children, handleScroll }: Props) {
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
