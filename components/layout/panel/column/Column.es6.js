/* @flow */
import React from 'react'
import type { Node } from 'react'

type Props = {|
  children: Node
|}

/**
 * Column.
 */
function Column ({ children }: Props) {
  return (<div className="col-md-6">{children}</div>)
}

Column.defaultProps = {
  children: null
}

export default Column
