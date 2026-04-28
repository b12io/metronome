import * as React from 'react'
import classnames from 'classnames'


function Sidebar ({ children = [], alternativeBg = false, className, noTitle = false }) {
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

export default Sidebar
