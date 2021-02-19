// @flow

import React from 'react'
import { debounce } from 'lodash'
import classnames from 'classnames'

import { Plus, Minus } from '../../Icons.es6.js'

type State = {|
  value: number
|}

type Props = {|
  label?: string,
  value: number,
  min: number,
  max: number,
  step: number,
  onUpdate: (value: number) => void
|}

class Stepper extends React.Component<Props, State> {
  state = {
    value: this.props.value
  }

  static defaultProps = {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    onUpdate: () => {}
  }

  onDecrement = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { value } = this.state
    const { min, step } = this.props
    let newVal

    if (value === min) {
      return
    }

    if (value && value >= 0) {
      newVal = parseInt(value) - step
    } else {
      newVal = min
    }

    this.setState({ value: newVal }, this.onUpdate)
  }

  onIncrement = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { value } = this.state
    const { min, max, step } = this.props
    let newVal

    if (value === max) {
      return
    }

    if ((value && value >= 0)) {
      newVal = parseInt(value) + step
    } else {
      newVal = min + step
    }

    this.setState({ value: newVal }, this.onUpdate)
  }

  onFieldUpdate = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || -1

    this.setState({
      value
    }, (value === -1) ? () => {} : this.onUpdate)
  }

  onUpdate = debounce(() => {
    const { value } = this.state
    const { max, min } = this.props

    if (value > max) {
      this.setState({ value: max })
    } else if (value < min) {
      this.setState({ value: min })
    } else {
      this.props.onUpdate(this.state.value)
    }
  }, 700)

  componentDidUpdate (prevProps: Props) {
    const { value } = this.props
    if (prevProps.value !== value && this.state.value !== value) {
      this.setState({ value })
    }
  }

  render () {
    const { value } = this.state
    const { label } = this.props

    return (
      <div className={classnames(
        'ds-form-group',
        'ds-form-group--stepper',
        { 'has-error': value === -1 }
      )}>
        {label && (
          <div className="ds-control-label">
            {label}
          </div>
        )}
        <div className="stepper">
          <button
            className="stepper__btn stepper__btn--minus"
            type="button"
            onClick={this.onDecrement}
          >
            <Minus />
          </button>
          <button
            className="stepper__btn stepper__btn--plus"
            type="button"
            onClick={this.onIncrement}
          >
            <Plus />
          </button>
          <input
            type="text"
            pattern="[0-9]"
            className="ds-form-control stepper__input"
            value={(value === -1) ? '' : value}
            onChange={this.onFieldUpdate}
          />
        </div>
      </div>
    )
  }
}

export default Stepper
