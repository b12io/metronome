/* @flow */
import React from 'react'
import type { Node } from 'react'
import MetaData from './MetaData.es6.js'

type ReactComponentProps = {|
  examples: Node,
  heading: string,
  pathLine: string,
  description: string,
  docs: Node,
  tabButtons: Node,
  tabBody: Node
|}

const ReactComponent = ({
  examples,
  heading,
  pathLine,
  description,
  docs,
  tabButtons,
  tabBody
}: ReactComponentProps) => {
  return (
    <React.Fragment>
      <div className="app-page-title">
        {heading}
        <p>{description}</p>
        {docs}
        <MetaData>{pathLine}</MetaData>
      </div>
      <div className="ds-block">
        {examples}
      </div>
      {tabButtons}
      {tabBody}
    </React.Fragment>
  )
}

export default ReactComponent
