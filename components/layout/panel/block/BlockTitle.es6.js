import * as React from 'react'

function BlockTitle(props) {
  const { label, description, icon, button } = props

  return (
    <div className="ds-content-block__header">
      <div className="ds-content-block__header-title">
        <h4>
          {icon}
          {label}
        </h4>
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
