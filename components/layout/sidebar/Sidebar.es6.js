import * as React from 'react'
import classnames from 'classnames'


function Sidebar ({ children, alternativeBg, className, noTitle }) {
  return (
    <div className={classnames('sidebar-container', className)}>
      <div className={classnames({
        'ds-sidebar': true,
        'ds-sidebar--no-title': noTitle,
        'ds-sidebar--alternative-bg': alternativeBg
      })}>
        {children}
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  alternativeBg: false,
  children: [],
  noTitle: false
}

export default Sidebar
