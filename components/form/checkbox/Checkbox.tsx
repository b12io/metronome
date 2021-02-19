
import React from "react";
import classnames from "classnames";
import { Element } from "react";

import { Checkmark } from "../../Icons.es6";

type Props = {
  label: string | Element<any>;
  name: string;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  hasError: boolean;
  onChange: (val: boolean) => void;
};

function Checkbox({
  disabled,
  checked,
  indeterminate,
  label,
  name,
  onChange,
  hasError
}: Props) {
  const setCheckboxRef = checkbox => {
    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  };

  return <div className="ds-form-group">
      <label className={classnames({
      'ds-form-control-checkbox': true,
      'has-error': hasError,
      'is-disabled': disabled
    })}>
        <input type="checkbox" name={name} checked={checked} disabled={disabled} onChange={event => {
        onChange(event.target.checked);
      }} ref={setCheckboxRef} />
        <span className="ds-form-control-checkbox__indicator"><Checkmark /></span>
        <span className="ds-form-control-checkbox__label">{label}</span>
      </label>
    </div>;
}

Checkbox.defaultProps = {
  label: '',
  name: '',
  checked: false,
  disabled: false,
  indeterminate: false,
  hasError: false,
  onChange: () => {}
};

export default Checkbox;