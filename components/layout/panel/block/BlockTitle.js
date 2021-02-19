/* @flow */

import * as React from 'react'

type Props = {
  label: string,
  description?: string | React.Element<*>,
  icon?: React.Node,
  button?: React.Node
}

function BlockTitle (props: Props) {
  const { label, description, icon, button } = props

  return (
    <div className="ds-content-block__header">
      <div className="ds-content-block__header-title">
        <h4>{icon}{label}</h4>
        {button}
      </div>
      {description && (
        <div className="ds-content-block__header-description">
          {description}
        </div>
      )}
    </div>
  )
}

export default BlockTitle
