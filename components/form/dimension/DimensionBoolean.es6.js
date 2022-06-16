// 
import React from 'react'

import Checkbox from '../checkbox/Checkbox.es6.js'
import Tooltip from './Tooltip.es6.js'


class DimensionBoolean extends React.Component { 
  render () {
    const { label, help, value, onChange } = this.props

    return (
      <div className="ds-form-input-dimension__input">
        <div className="ds-form-input-dimension__label">
          {label}
        </div>
        <div className="ds-form-input-dimension__checkbox">
          <Checkbox checked={value} onChange={onChange} />
        </div>
        <Tooltip help={help} />
      </div>
    )
  }
}

export default DimensionBoolean
