/* @flow */

import React from 'react'
import classnames from 'classnames'

type Props = {|
  text: string,
  className?: string,
|}

const SidebarBodyDescription = ({
  className = '',
  text = '',
}: Props) => (
  <div className={classnames('ds-sidebar__description', className)}>
    {text}
  </div>
)

export default SidebarBodyDescription
