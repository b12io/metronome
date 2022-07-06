import React from 'react'
import MetaData from './MetaData.es6.js'

const ReactComponent = ({
  examples,
  heading,
  pathLine,
  description,
  docs,
  tabButtons,
  tabBody
}) => {
  return (
    <React.Fragment>
      <div className="app-page-title">
        {heading}
        <p>{description}</p>
        {docs}
        <MetaData>{pathLine}</MetaData>
      </div>
      <div className="ds-block">{examples}</div>
      {tabButtons}
      {tabBody}
    </React.Fragment>
  )
}

export default ReactComponent
