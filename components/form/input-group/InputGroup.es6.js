import * as React from 'react'
import classnames from 'classnames'


function InputGroup (props) {
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
