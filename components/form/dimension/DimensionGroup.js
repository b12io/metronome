// @flow

import * as React from 'react'

import DimensionInput from './DimensionInput.es6.js'

type DimensionInputType = React.Element<typeof DimensionInput>

type Props = {
  children: React.ChildrenArray<DimensionInputType> | DimensionInputType
}

class DimensionGroup extends React.Component<Props> {
  render () {
    return (
      <div className="ds-form-input-dimension__group">
        {this.props.children}
      </div>
    )
  }
}

export default DimensionGroup
