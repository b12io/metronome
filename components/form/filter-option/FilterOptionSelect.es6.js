import React from 'react'

import { deslugify } from '../../lib/string-utils.es6.js'

class FilterOptionSelect extends React.Component {
  dropdown

  static defaultProps = {
    filterableFields: [],
    onBlur: () => {},
    onFilterSelect: () => {}
  }

  componentDidMount() {
    this.dropdown && this.dropdown.focus()
  }

  render() {
    const { filterableFields, onBlur, onFilterSelect } = this.props
    return (
      <div
        className="ds-filter-option__select"
        onBlur={onBlur}
        ref={(el) => {
          this.dropdown = el
        }}
        tabIndex="-1"
      >
        <div className="ds-filter-option__select-header">Filter by...</div>
        {filterableFields.map((field) => (
          <div
            key={field}
            className="ds-filter-option__select-item"
            onClick={() => onFilterSelect(field)}
          >
            {deslugify(field)}
          </div>
        ))}
      </div>
    )
  }
}

export default FilterOptionSelect
