/* @flow */

import * as React from 'react'
import classnames from 'classnames'

type Props = {
  className?: string | Object,
  vertical?: boolean,
  children: React.Node
}

function InputGroup (props: Props) {
  return (
    <div className={classnames({
      'ds-input-group': true,
      'ds-input-group--vertical': props.vertical,
    }, props.className)}>
      {props.children}
    </div>
  )
}

export default InputGroup
