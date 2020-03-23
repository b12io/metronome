// @flow
import React from 'react'

import Select from '../select/Select.es6.js'
import Option from '../option/Option.es6.js'
import Tooltip from './Tooltip.es6.js'

type Props = {|
  label: string,
  help?: string,
  choices: Array<string>,
  selectedChoice?: string,
  onChange: (value: string) => void
|}

class DimensionSelect extends React.Component<Props> {
  render () {
    const { label, selectedChoice, onChange, choices, help } = this.props

    return (
      <div className="ds-form-input-dimension__input">
        <div className="ds-form-input-dimension__label">
          {label}
        </div>
        <div className="ds-form-input-dimension__select ds-form-input-dimension__select--wide">
          <Select
            placeholder={selectedChoice || 'Please select'}
            onChange={onChange}
            search={false}
          >
            {choices.map(choice => (
              <Option label={choice} value={choice} key={choice} />
            ))}
          </Select>
        </div>
        <Tooltip help={help} />
      </div>
    )
  }
}

export default DimensionSelect
