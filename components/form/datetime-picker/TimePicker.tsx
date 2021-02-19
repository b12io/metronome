
import React from "react";
import DatePicker from "react-datepicker";

type Props = {
  label?: string;
  onChange?: (datetime: moment$Moment) => void;
  onChangeRaw?: (datetimeRaw: string) => void;
  value?: moment$Moment | null | undefined;
};

function B12TimePicker({
  label,
  onChange,
  onChangeRaw,
  value,
  ...rest
}: Props) {
  return <div className="ds-form-control-wrap">
      <div className="ds-control-label">
        {label || 'Time'}
      </div>
      <DatePicker {...rest} showTimeSelect showTimeSelectOnly className="datetime-picker__time-picker" dateFormat="LT" placeholderText="Choose time" selected={value} onChange={onChange} onChangeRaw={event => {
      if (onChangeRaw) {
        onChangeRaw(event.target.value);
      }
    }} />
    </div>;
}

export default B12TimePicker;