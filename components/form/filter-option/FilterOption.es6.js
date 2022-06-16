/*  */

import React from 'react'
import classnames from 'classnames'

import Button from '../button/Button.es6.js'
import FilterOptionSelect from './FilterOptionSelect.es6.js'
import FilterOptionItem from './FilterOptionItem.es6.js'




class FilterOption extends React.Component {
  state = {
    filterAdded: false,
    isOpened: this.props.isOpened
  }

  static defaultProps = {
    filters: []
  }

  UNSAFE_componentWillReceiveProps ({ isOpened }) {
    if (isOpened !== this.state.isOpened) {
      this.setState({ isOpened })
    }
  }

  handleAddNewFilter = (fieldName) => {
    this.setState({ filterAdded: true }, () => {
      this.props.handleAddNewFilter(fieldName)
    })
  }

  render () {
    const { filterableFields, filters, getValidOperators, handleRemoveFilter,
      handleUpdateFilter, toggleFilterDropdown } = this.props
    return (
      <div
        className={classnames({
          'ds-filter-option': true,
          'has-items': filters.length > 0
        })}
      >
        <div className="ds-filter-option__items">
          {filters.map((filter, idx) => (
            <FilterOptionItem
              key={idx}
              filter={filter}
              filterableFields={filterableFields}
              handleRemoveFilter={() => handleRemoveFilter(idx)}
              handleUpdateFilter={data => handleUpdateFilter(idx, data)}
              isOpened={idx === filters.length - 1 && this.state.filterAdded}
              validOperators={getValidOperators(idx)}
            />
          ))}
        </div>

        {this.state.isOpened && (
          <FilterOptionSelect
            filterableFields={filterableFields}
            onBlur={toggleFilterDropdown}
            onFilterSelect={this.handleAddNewFilter}
          />
        )}

        <div className="ds-filter-option__actions">
          <Button
            small
            label="Add filters"
            onClick={toggleFilterDropdown}
          />
        </div>
      </div>
    )
  }
}

export default FilterOption
