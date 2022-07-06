import * as React from 'react'
import classnames from 'classnames'

function Block (props) {
  return (
    <div
      className={classnames(
        {
          'ds-content-block': true,
          'ds-content-block--divider': props.bottomDivider
        },
        props.className
      )}
    >
      {props.children}
    </div>
  )
}

export default Block
