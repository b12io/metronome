

import React from "react";
import classnames from "classnames";

import { deslugify } from "../../lib/string-utils.es6";

import Group from "../../layout/panel/group/Group.es6";
import TextField from "../textfield/TextField.es6";
import Select from "../select/Select.es6";
import Option from "../option/Option.es6";
import Button from "../button/Button.es6";

import { Filter, Operator } from "./types.es6";

type Props = {
  filter: Filter;
  filterableFields: Array<string>;
  handleRemoveFilter: () => void;
  handleUpdateFilter: (data: Object) => void;
  isOpened: boolean;
  validOperators: Array<Operator>;
};

type State = {
  isOpened: boolean;
};

class FilterOptionItem extends React.Component<Props, State> {

  state = {
    isOpened: this.props.isOpened
  };

  static defaultProps = {
    handleRemoveFilter: () => {},
    handleUpdateFilter: () => {},
    isOpened: false,
    validOperators: []
  };

  toggleDropdown = () => {
    this.setState(({
      isOpened
    }) => ({
      isOpened: !isOpened
    }));
  };

  render() {
    const {
      isOpened
    } = this.state;
    const {
      filter,
      filterableFields,
      handleRemoveFilter,
      handleUpdateFilter,
      validOperators
    } = this.props;
    const selectedOperator = validOperators.find(op => op.symbol === filter.operator);
    const deslugifiedFieldName = deslugify(filter.field_name);
    return <div className="ds-filter-option__item">
        <div className={classnames({
        'ds-filter-option__item-toggle': true,
        'is-active': isOpened
      })} onClick={this.toggleDropdown}>
          {selectedOperator && !Array.isArray(filter.value) ? `${deslugifiedFieldName} ${selectedOperator.display} ${filter.value}` : deslugifiedFieldName}
        </div>

        {isOpened && <div className="ds-filter-option__item-content">
            <Group>
              <Select search={false} onChange={fieldName => {handleUpdateFilter({ field_name: fieldName });}} placeholder={deslugifiedFieldName}>
                {filterableFields.map(field => <Option key={field} label={deslugify(field)} value={field} />)}
              </Select>
            </Group>
            <Group>
              <Select search={false} onChange={operator => {handleUpdateFilter({ operator });}} placeholder={selectedOperator ? `${selectedOperator.display}...` : 'Please select'}>
                {validOperators.map((operator, idx) => <Option key={idx} label={`${operator.display}...`} value={operator.symbol} />)}
              </Select>
            </Group>
            <Group>
              <TextField hideIcon value={filter.value || ''} onUpdate={value => {handleUpdateFilter({ value });}} />
            </Group>
            <Group>
              <Button label="Remove filter" onClick={handleRemoveFilter} small block danger />
            </Group>
          </div>}
      </div>;
  }
}

export default FilterOptionItem;