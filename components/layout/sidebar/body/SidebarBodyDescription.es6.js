/*  */

import React from 'react'
import classnames from 'classnames'


const SidebarBodyDescription = ({
  className = '',
  text = '',
}) => (
  <div className={classnames('ds-sidebar__description', className)}>
    {text}
  </div>
)

export default SidebarBodyDescription
