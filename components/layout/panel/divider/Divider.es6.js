import React from 'react'
import classnames from 'classnames'

function Divider(props) {
  const { className } = props
  return (
    <div
      className={classnames(
        {
          'ds-panel__divider': true
        },
        className
      )}
    />
  )
}

export default Divider
