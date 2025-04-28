import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function PromptInputTextarea ({ className, placeholder, rows, textareaRef, value, onChange, disabled }) {
  return (
    <textarea
      className={classnames('ds-prompt-input__textarea', className)}
      placeholder={placeholder}
      rows={rows}
      ref={textareaRef}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

PromptInputTextarea.defaultProps = {
  placeholder: 'placeholder',
  rows: 3,
  textareaRef: null,
  value: '',
  onChange: () => {},
  disabled: false
}

PromptInputTextarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  textareaRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object })
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default PromptInputTextarea

