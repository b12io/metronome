import * as React from 'react'

class DimensionGroup extends React.Component {
  render() {
    return (
      <div className="ds-form-input-dimension__group">
        {this.props.children}
      </div>
    )
  }
}

export default DimensionGroup
