/*  */
import React from 'react'
import { pick, isEqual } from 'lodash'

class BaseComponent extends React.Component {
  propsToTrack = []

  shouldComponentUpdate (nextProps, nextState) {
    if (this.propsToTrack.length === 0) {
      return true
    }

    const before = pick(this.props, this.propsToTrack)
    const after = pick(nextProps, this.propsToTrack)

    return !isEqual(before, after) || !isEqual(this.state, nextState)
  }
}

export default BaseComponent
