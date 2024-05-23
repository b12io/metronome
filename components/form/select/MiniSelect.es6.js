
import React from 'react'
import classnames from 'classnames'

import { Disabled } from '../../Icons.es6.js'



class MiniSelect extends React.Component {
  state = {
    isOpened: false
  }
  selectNode

  static defaultProps = {
    selectOptions: [],
    selectPosition: 'left',
    inputPlaceholder: '',
    inputDisabled: false,
    selectDisabled: false
  }

  handleDocumentClick = (event) => {
    if (!this.selectNode.contains(event.target) && this.state.isOpened) {
      this.setState({ isOpened: false })
    }
  }

  onToggle = () => {
    if (this.props.selectDisabled) {
      return
    }

    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  handleSelect = (option) => {
    this.props.selectValueChange(option)
    this.onToggle()
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick)
    document.addEventListener('touchend', this.handleDocumentClick)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick)
    document.removeEventListener('touchend', this.handleDocumentClick)
  }

  renderSelect = () => {
    const { selectValue, selectOptions, selectPosition } = this.props
    const { isOpened } = this.state
    const classNames = classnames('ds-mini-select__dropdown', {
      'ds-mini-select__dropdown--left': selectPosition === 'left',
      'ds-mini-select__dropdown--right': selectPosition === 'right'
    })
    return (
      <div className={classNames} ref={(node) => { this.selectNode = node }}>
        <div className="ds-mini-select__dropdown-toggle" onClick={this.onToggle}>{selectValue}</div>
        {isOpened && <ul className="ds-mini-select__dropdown-menu">
          {selectOptions.map((option, index) => (<li
            onClick={e => this.handleSelect(option)}
            key={`${option}-${index}`}>{option}</li>))}
        </ul>}
      </div>
    )
  }

  render () {
    const { inputDisabled, selectDisabled, inputPlaceholder, inputValue,
      label, selectPosition, inputValueChange } = this.props

    return (
      <div
        className={classnames('ds-form-group', 'ds-form-group--select', {
          'has-feedback': inputDisabled
        })}
      >
        {label && <div className="ds-control-label">{label}</div>}
        <div className={classnames('ds-mini-select', {
          'ds-mini-select--disabled': selectDisabled
        })}
        >
          {selectPosition === 'left' && this.renderSelect()}
          <div className="ds-mini-select__input-wrap">
            <input
              className="ds-mini-select__input"
              disabled={inputDisabled}
              type="text"
              value={inputValue}
              onChange={e => inputValueChange(e.target.value)}
              placeholder={inputPlaceholder} />
            {inputDisabled && <Disabled className="feedback-icon" color="#ccc" />}
          </div>
          {selectPosition === 'right' && this.renderSelect()}
        </div>
      </div>
    )
  }
}

export default MiniSelect
