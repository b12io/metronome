

import React from "react";
import classnames from "classnames";

import Button from "../button/Button.es6";
import FilterOptionSelect from "./FilterOptionSelect.es6";
import FilterOptionItem from "./FilterOptionItem.es6";

import { Filter, Operator } from "./types.es6";

type Props = {
  filterableFields: Array<string>;
  getValidOperators: (idx: number) => Array<Operator>;
  handleAddNewFilter: (fieldName: string) => void;
  handleRemoveFilter: (idx: number) => void;
  handleUpdateFilter: (idx: number, newData: {
    [key: string]: any;
  }) => void;
  isOpened: boolean;
  filters: Array<Filter>;
  toggleFilterDropdown: () => void;
};

type State = {
  filterAdded: boolean;
  isOpened: boolean;
};

class FilterOption extends React.Component<Props, State> {

  state = {
    filterAdded: false,
    isOpened: this.props.isOpened
  };

  static defaultProps = {
    filters: []
  };

  componentWillReceiveProps({
    isOpened
  }: Props) {
    if (isOpened !== this.state.isOpened) {
      this.setState({ isOpened });
    }
  }

  handleAddNewFilter = (fieldName: string): void => {
    this.setState({ filterAdded: true }, () => {
      this.props.handleAddNewFilter(fieldName);
    });
  };

  render() {
    const {
      filterableFields,
      filters,
      getValidOperators,
      handleRemoveFilter,
      handleUpdateFilter,
      toggleFilterDropdown
    } = this.props;
    return <div className={classnames({
      'ds-filter-option': true,
      'has-items': filters.length > 0
    })}>
        <div className="ds-filter-option__items">
          {filters.map((filter, idx) => <FilterOptionItem key={idx} filter={filter} filterableFields={filterableFields} handleRemoveFilter={() => handleRemoveFilter(idx)} handleUpdateFilter={data => handleUpdateFilter(idx, data)} isOpened={idx === filters.length - 1 && this.state.filterAdded} validOperators={getValidOperators(idx)} />)}
        </div>

        {this.state.isOpened && <FilterOptionSelect filterableFields={filterableFields} onBlur={toggleFilterDropdown} onFilterSelect={this.handleAddNewFilter} />}

        <div className="ds-filter-option__actions">
          <Button small label="Add filters" onClick={toggleFilterDropdown} />
        </div>
      </div>;
  }
}

export default FilterOption;