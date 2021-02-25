import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import BaseTextArea from '../base/BaseTextArea.es6.js'

function TextArea ({label, value, placeholder, rows, hasFeedback, hasError, resizable, counter, onUpdate, onFocus, onBlur, contentHeight, disabled}) {
  const counterDiv = counter ? (<div className="ds-control-label__counter">{counter}</div>) : null
  return (
    <div className={classnames({
      'ds-form-group': true,
      'has-feedback': hasFeedback,
      'has-error': hasError
    })}>
      <label className="ds-control-label">
        {label}
        {counterDiv}
      </label>
      <BaseTextArea
        placeholder={placeholder}
        rows={!contentHeight ? rows : null}
        className={classnames({
          'ds-form-control--no-resize': !resizable
        })}
        contentHeight={contentHeight}
        disabled={disabled}
        value={value}
        onBlur={(event) => onBlur(event)}
        onFocus={(event) => onFocus(event)}
        onChange={(event) => {
          onUpdate(event.target.value)
        }}
      />
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  hasFeedback: PropTypes.bool,
  hasError: PropTypes.bool,
  resizable: PropTypes.bool,
  counter: PropTypes.string,
  contentHeight: PropTypes.bool,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onUpdate: PropTypes.func
}

TextArea.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
  rows: 5,
  hasFeedback: false,
  hasError: false,
  resizable: true,
  counter: '',
  contentHeight: false,
  disabled: false,
  onFocus: () => {},
  onBlur: () => {},
  onUpdate: () => {}
}

export default TextArea
