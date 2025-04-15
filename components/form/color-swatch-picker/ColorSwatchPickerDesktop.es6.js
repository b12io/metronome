import React from 'react'
import PropTypes from 'prop-types'

function ColorSwatchPickerDesktop ({ colors, selectedColor, onChange }) {
  const handleColorClick = (value) => {
    if (selectedColor === value) {
      onChange(null)
    } else {
      onChange(value)
    }
  }

  return (
    <div className="color-swatch-picker-desktop">
      {colors.map((colorOption) => (
        <div
          key={colorOption.value}
          className={`color-swatch-picker-desktop__color-swatch ${selectedColor === colorOption.value ? 'selected' : ''}`}
          style={{ backgroundColor: colorOption.color }}
          onClick={() => handleColorClick(colorOption.value)}
          title={colorOption.label || colorOption.value}
        />
      ))}
    </div>
  )
}

ColorSwatchPickerDesktop.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      label: PropTypes.string
    })
  ).isRequired,
  selectedColor: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

ColorSwatchPickerDesktop.defaultProps = {
  colors: [],
  selectedColor: null,
  onChange: () => {}
}

export default ColorSwatchPickerDesktop
