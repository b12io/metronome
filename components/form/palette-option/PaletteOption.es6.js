import React from 'react'
import classnames from 'classnames'

import { Check } from '../../Icons.es6.js'

function PaletteOption ({
  block,
  colors,
  onOptionClick,
  selected,
  value,
  border
}) {
  const swatches = colors.map((color, index) => {
    return (
      <div
        key={`${color}-${index}`}
        className="ds-palette-option__color"
        style={{ backgroundColor: color }}
      ></div>
    )
  })
  return (
    <div
      className={classnames({
        'ds-palette-option': true,
        'ds-palette-option--block': block,
        'ds-palette-option--border': border,
        'ds-palette-option--selected': selected
      })}
      onClick={(event) => onOptionClick(event, value)}
    >
      {swatches}
      {selected && (
        <Check
          color="#766CFF"
          height="16"
          width="16"
          viewbox="0 0 16 16"
          className="ds-palette-option__selected-icon"
        />
      )}
    </div>
  )
}

PaletteOption.defaultProps = {
  block: false,
  border: false,
  colors: [],
  onOptionClick: () => {},
  selected: false,
  value: ''
}

export default PaletteOption
