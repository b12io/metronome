import React from 'react'
import DatePicker from 'react-datepicker'


function B12TimePicker ({ label, onChange, onChangeRaw, value, placeholderText, dateFormat, ...rest }) {
  return (
    <div className="ds-form-control-wrap">
      <div className="ds-control-label">
        { label || 'Time' }
      </div>
      <DatePicker
        {...rest}
        showTimeSelect
        showTimeSelectOnly
        className="datetime-picker__time-picker"
        dateFormat="LT"
        placeholderText={placeholderText || "Choose time"}
        selected={value}
        onChange={onChange}
        onChangeRaw={event => {
          if (onChangeRaw) {
            onChangeRaw(event.target.value)
          }
        }}
      />
    </div>
  )
}

export default B12TimePicker
