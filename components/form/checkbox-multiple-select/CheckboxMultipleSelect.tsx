import React from 'react'
import classnames from 'classnames'
import { filter, keys, intersection } from 'lodash'

import Checkbox from '../checkbox/Checkbox'

class CheckboxMultipleSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpened: false,
      options: []
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.getSelectedOptions = this.getSelectedOptions.bind(this)
    this.preformatOptions = this.preformatOptions.bind(this)
    this.overrideStateFromProps = this.overrideStateFromProps.bind(this)
  }

  toggleDropdown () {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  componentWillReceiveProps (nextProps) {
    this.overrideStateFromProps(nextProps)
  }

  preformatOptions (values) {
    if (!values) {
      return {}
    }
    return values.reduce((obj, value) => {
      obj[value] = true
      return obj
    }, {})
  }

  overrideStateFromProps (props) {
    const { options, selectedOptions, disabledOptions } = props
    if (options && options.length) {
      this.setState({
        options: [...options],
        selected: this.preformatOptions(selectedOptions),
        disabled: this.preformatOptions(disabledOptions)
      })
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
    this.overrideStateFromProps(this.props)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleDocumentClick (event) {
    if (!this.mainNode.contains(event.target) && this.state.isOpened) {
      this.setState({ isOpened: false })
    }
  }

  handleCheckbox (value) {
    this.setState({
      selected: {
        ...this.state.selected,
        [value]: !this.state.selected[value]
      }
    }, () => {
      this.props.onChange(value, this.state.selected)
    })
  }

  getSelectedOptions () {
    return filter(keys(this.state.selected), key => this.state.selected[key])
  }

  render () {
    const { options, selected, disabled } = this.state
    const { selectedLabel, unselectedLabel, highlightOnSelect, className } = this.props
    const selectedOptions = this.getSelectedOptions()
    const filterSelectClassNames = classnames('ds-checkbox-select__label', {
      'is-highlighted': selectedOptions.length > 0 && highlightOnSelect
    }, className)
    return (
      <div className="ds-checkbox-select" ref={(node) => { this.mainNode = node }}>
        <div className={filterSelectClassNames} onClick={this.toggleDropdown}>
          {selectedOptions.length > 0
            ? selectedLabel || intersection(options, selectedOptions).join(', ')
            : unselectedLabel
          }
        </div>
        {this.state.isOpened && (<div className="ds-checkbox-select__dropdown">
          {options.map(option => (
            <div className="ds-checkbox-select__item" key={option}>
              <Checkbox
                checked={selected[option]}
                disabled={disabled[option]}
                label={option}
                onChange={e => this.handleCheckbox(option)}
              />
            </div>
          ))}
        </div>)}
      </div>
    )
  }
}

CheckboxMultipleSelect.defaultProps = {
  highlightOnSelect: true,
  unselectedLabel: 'Select',
  onChange: () => {}
}

export default CheckboxMultipleSelect
