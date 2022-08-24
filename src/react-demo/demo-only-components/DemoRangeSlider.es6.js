import React from 'react'

import RangeSlider from '../../../components/form/range-slider/RangeSlider.es6.js'

export default class DemoRangeSlider extends React.Component {
  state = {
    basic: 50,
    minMax: 45,
    withStep: 70
  }

  handleChange = (value, type) => {
    this.setState({
      [type]: value
    })
  }

  render() {
    const { basic, minMax, withStep } = this.state
    return (
      <div>
        <RangeSlider
          label="Basic"
          value={basic}
          onChange={(value) => this.handleChange(value, 'basic')}
        />
        <RangeSlider
          label="With min/max"
          value={minMax}
          min="1"
          max="100"
          onChange={(value) => this.handleChange(value, 'minMax')}
        />
        <RangeSlider
          label="With min/max and step"
          value={withStep}
          min="10"
          max="120"
          step="10"
          onChange={(value) => this.handleChange(value, 'withStep')}
        />
        <RangeSlider
          label="Disabled state"
          value="10"
          disabled
          onChange={(value) => {}}
        />
        <RangeSlider
          label="With range captions"
          value={basic}
          minCaption="Left"
          centerCaption="Center"
          maxCaption="Right"
          onChange={(value) => this.handleChange(value, 'basic')}
        />
      </div>
    )
  }
}
