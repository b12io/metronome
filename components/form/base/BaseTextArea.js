import React, {Component} from 'react'
import classnames from 'classnames'

class BaseTextArea extends Component {
  constructor (props) {
    super(props)
    this.autoResize = this.autoResize.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onFocus (e) {
    this.props.onFocus && this.props.onFocus(e)
  }

  onBlur (e) {
    this.props.onBlur && this.props.onBlur(e)
  }

  autoResize (e) {
    if (this.props.contentHeight) {
      this.textarea.style.height = 'auto'
      this.textarea.style.height = this.textarea.scrollHeight + 'px'
    }
    this.props.onChange && this.props.onChange(e)
  }

  componentDidMount () {
    if (this.props.contentHeight) {
      this.textarea.style.overflowY = 'hidden'
      this.textarea.style.height = this.textarea.scrollHeight + 'px'
    }
  }

  render () {
    const {value, className, placeholder, rows, contentHeight, disabled} = this.props
    return (
      <textarea
        placeholder={placeholder}
        rows={!contentHeight ? rows : null}
        className={classnames('ds-form-control', className)}
        value={value}
        disabled={disabled}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.autoResize}
        ref={(t) => { this.textarea = t }}/>
    )
  }
}

BaseTextArea.defaultProps = {
  value: '',
  placeholder: '',
  rows: 5,
  className: '',
  contentHeight: false,
  disabled: false,
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {}
}

export default BaseTextArea
