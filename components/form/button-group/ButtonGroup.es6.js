/*  */

import * as React from 'react'
import classnames from 'classnames'
import Button from '../button/Button.es6'



function ButtonGroup ({ vertical, className, children }) {
  return (
    <div className={classnames({
      'ds-button-group': true,
      'ds-button-group--vertical': vertical,
    }, className)}>
      {children}
    </div>
  )
}

export default ButtonGroup
