import React from 'react'
import classnames from 'classnames'
import { SketchPicker } from 'react-color'
import { values, some, pick, isEmpty } from 'lodash'

import {
  Lock,
  Notice,
  Disabled,
  Help,
  CloseMedia,
  Search
} from '../../Icons.es6.js'

class TextField extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pickerIsVisible: false
    }

    this.toggleColorPicker = this.toggleColorPicker.bind(this)
    this.onDocumentClick = this.onDocumentClick.bind(this)
    this.onColorChange = this.onColorChange.bind(this)
  }

  toggleColorPicker () {
    this.setState({
      pickerIsVisible: !this.state.pickerIsVisible
    })
  }

  componentDidMount () {
    document.addEventListener('click', this.onDocumentClick, false)
    document.addEventListener('touchend', this.onDocumentClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onDocumentClick, false)
    document.removeEventListener('touchend', this.onDocumentClick, false)
  }

  onDocumentClick (event) {
    if (!this.mainNode) {
      return
    }

    if (!this.mainNode.contains(event.target) && this.state.pickerIsVisible) {
      this.toggleColorPicker()
    }
  }

  onColorChange (color, event) {
    const {r, g, b, a} = color.rgb
    const rgba = `rgba(${r},${g},${b},${a})`
    this.props.onUpdate(rgba)
  }

  hasFeedback () {
    const feedbackProps = ['locked', 'error', 'success', 'disabled']
    return some(values(pick(this.props, feedbackProps)), Boolean)
  }

  render () {
    // TODO(bryan): Change how we derive showIcon. Right now, if hideIcon is not passed as a prop
    // and none of the appropriate props are passed to render an icon, an error is thrown in
    // testing parent components because no children are passed to React.Fragment.
    const showIcon = !this.props.hideIcon

    return (
      <div
        ref={(node) => { this.mainNode = node }}
        className={classnames({
          'ds-form-group': true,
          'ds-form-group--color-picker': this.props.color,
          'ds-color-right': this.props.colorRight,
          'ds-color-left': this.props.colorLeft,
          'has-feedback': this.props.locked || this.props.error || this.props.success || this.props.disabled,
          'is-locked': this.props.locked,
          'is-disabled': this.props.disabled,
          'has-error': this.props.error,
          'has-success': this.props.success,
          'has-search-icon': this.props.searchIcon
        })}
      >
        {this.props.label && <div className="ds-control-label">{this.props.label}</div>}
        <div className={classnames({
          'ds-form-control-wrap': true,
          'ds-form-control-color-picker': this.props.color
        })}
        >
          {!this.props.color && <input
            type={this.props.type}
            className="ds-form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            disabled={this.props.locked || this.props.disabled}
            ref={this.props.inputRef}
            onChange={(event) => {
              this.props.onUpdate(event.target.value)
            }}
            onBlur={(event) => this.props.onBlur(event.target.value)}
            onFocus={(event) => this.props.onFocus(event.target.value)}
          />}

          {/* Show color picker controls */}
          {this.props.color && <div
            className="ds-form-control-color-picker__container"
          >
            <div
              className="ds-form-control-color-picker__color"
              style={{backgroundColor: this.props.value}}
              onClick={this.toggleColorPicker}
            />

            {this.props.canClearColor &&
              <button
                className="ds-form-control-color-picker__clear-color"
                onClick={this.props.onClearColor}
              ><CloseMedia width="8" height="8" viewBox="0 0 8 8" color="#FFF" /></button>}
          </div>}

          {showIcon && <React.Fragment>
            {this.props.locked && <Lock className="feedback-icon" />}
            {this.props.disabled && <Disabled className="feedback-icon" color="#ccc" />}
            {this.props.success && (this.props.successIcon || <Notice className="feedback-icon" color="#8FC980" />)}
            {this.props.error && <Notice className="feedback-icon" color="#F05E5E" />}
            {this.props.searchIcon && <Search className="search-icon" color="#ccc" />}
          </React.Fragment>}
        </div>
        {(this.props.error && this.props.errorMessage) && (
          <div className="ds-form-group__error-message">
            {this.props.errorMessage}
          </div>
        )}

        {/* Show color picker itself */}
        {this.state.pickerIsVisible && <SketchPicker
          presetColors={[]}
          color={this.props.value}
          onChange={this.onColorChange} />}

        {!isEmpty(this.props.help)
          ? <div className="ds-form-group__help-text">
            <Help color="#ccc" />
            <span>{this.props.help}</span>
          </div>
          : null}
      </div>
    )
  }
}

TextField.defaultProps = {
  locked: false,
  error: false,
  errorMessage: '',
  success: false,
  successIcon: null,
  searchIcon: false,
  disabled: false,
  colorRight: false,
  colorLeft: false,
  color: false,
  canClearColor: false,
  hideIcon: false,
  help: '',
  placeholder: '',
  type: 'text',
  onUpdate: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onClearColor: () => {}
}

export default TextField
