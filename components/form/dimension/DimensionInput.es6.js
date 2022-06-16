// 
import React from 'react'
import classnames from 'classnames'

import { isEmpty } from 'lodash'

import TextField from '../textfield/TextField.es6.js'
import Select from '../select/Select.es6.js'
import Option from '../option/Option.es6.js'
import Tooltip from './Tooltip.es6.js'



class DimensionInput extends React.Component {
  static defaultProps = {
    units: [],
    selectedUnit: ''
  }

  state = {
    isValid: true
  }

  onValueChange = (value) => {
    this.setState({
      isValid: !isEmpty(value)
    })
    this.props.onUpdate(value, this.props.selectedUnit || '')
  }

  onUnitChange = (selectedUnit) => {
    this.props.onUpdate(this.props.value, selectedUnit)
  }

  render () {
    const { label, value, units, selectedUnit, help, fixedUnit } = this.props

    return (
      <div className={classnames('ds-form-input-dimension__input', {
        'has-error': !this.state.isValid,
        'has-fixed-unit': fixedUnit
      })}>
        <div className="ds-form-input-dimension__label">
          {label}
        </div>
        <div className="ds-form-input-dimension__textfield">
          <TextField
            type="number"
            value={value}
            onUpdate={this.onValueChange}
          />
        </div>
        {fixedUnit ? (
          <div className="ds-form-input-dimension__fixed-unit">
            {fixedUnit}
          </div>
        ) : (
          <div className="ds-form-input-dimension__select">
            <Select
              placeholder={selectedUnit || 'Please select a unit'}
              onChange={this.onUnitChange}
              search={false}
            >
              {units.map(unit => (
                <Option label={unit} value={unit} key={unit} />
              ))}
            </Select>
          </div>
        )}
        {help && (
          <Tooltip help={help} />
        )}
      </div>
    )
  }
}

export default DimensionInput
