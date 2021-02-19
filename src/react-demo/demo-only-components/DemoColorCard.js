import React from 'react'
import PropTypes from 'prop-types'

function DemoColorCard ({ name, color, variable }) {
  return (
    <div className="ds-color-card">
      <div className="ds-color-card__color" style={{backgroundColor: color}}></div>
      <div className="ds-color-card__body">
        <h5>{ name } <small>{ color }</small></h5>
        <code>{ variable }</code>
      </div>
    </div>
  )
}

DemoColorCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  variable: PropTypes.string
}

export default DemoColorCard

