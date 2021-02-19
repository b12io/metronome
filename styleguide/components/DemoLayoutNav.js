/* @flow */
import React from 'react'
import type { Node } from 'react'
import { B12Logo } from '../../components/Icons.es6.js'

type DemoLayoutNavProps = {|
  children: Node
|}

function DemoLayoutNav ({ children }: DemoLayoutNavProps) {
  return (
    <div className="app__nav">
      <a className="app__nav-head">
        <B12Logo viewBox="0 0 179.8 79.2" width="46" height="20.25" color="#6548c7"/>
      </a>
      <div className="app__nav-intro">
        <h1>Design System</h1>
        <p>Welcome to B12 Design language! Here you'll find all available components that are used to build our awesome product.</p>
      </div>
      <div className="app__nav-body">
        <ul className="nav">
          {children}
        </ul>
      </div>
    </div>
  )
}

export default DemoLayoutNav
