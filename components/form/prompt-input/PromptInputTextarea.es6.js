import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function PromptInputTextarea ({ className, placeholder, rows, textareaRef, value, onChange }) {
  return (
    <textarea
      className={classnames({'ds-prompt-input__textarea': true,}, className)}
      placeholder={placeholder}
      rows={rows}
      ref={textareaRef}
      value={value}
      onChange={onChange}
    />
  )
}

PromptInputTextarea.defaultProps = {
  placeholder: 'placeholder',
  rows: 3,
  textareaRef: null,
  value: '',
  onChange: () => {}
}

PromptInputTextarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  textareaRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default PromptInputTextarea

