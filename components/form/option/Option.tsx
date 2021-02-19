
import React from "react";
import classnames from "classnames";
import { FileHelper } from "../../lib/helpers.es6";

import { Element } from "react";

export type OptionValue = Object | string | number;
type Preview = {
  thumbnail: string | null | undefined;
  original: string | null | undefined;
};
type Props = {
  active?: boolean;
  actionOption?: boolean;
  collectionOption?: boolean;
  contentTypeOption?: boolean;
  disabled?: boolean;
  folderOption?: boolean;
  icon: Element<any> | null | undefined;
  iconRight?: Element<any> | null | undefined;
  label?: string;
  mappingOption?: boolean;
  onOptionClick: (value: OptionValue | null | undefined) => void;
  preview: Preview | null | undefined;
  value?: OptionValue;
  style?: Object;
  children?: Element<any>;
};

function Option({
  actionOption,
  active,
  collectionOption,
  contentTypeOption,
  disabled,
  folderOption,
  icon,
  iconRight,
  label,
  mappingOption,
  onOptionClick,
  value,
  preview,
  style,
  children
}: Props) {
  const iconLeft = mappingOption || folderOption || actionOption;
  const fileInfo = preview ? FileHelper(preview) : null;
  const optionPreview = <div className={classnames({
    'ds-form-control-select__dropdown-options-preview': true,
    '--is-full-width': !collectionOption,
    '--is-pdf': fileInfo && fileInfo.isPdf
  })}>
      {preview && preview.thumbnail && <img src={preview.thumbnail} alt={label} />}
      {preview && fileInfo && fileInfo.isSvg && <img src={fileInfo.path} alt={label} />}
      {preview && !preview.thumbnail && fileInfo && !fileInfo.isSvg && <div className="ds-form-control-select__dropdown-options-preview-icon"><span>{fileInfo && fileInfo.extension}</span></div>}
    </div>;

  return <div style={style} className={classnames({
    active,
    'ds-form-control-select__dropdown-options-item': true,
    'ds-form-control-select__dropdown-options-item--action': actionOption,
    'ds-form-control-select__dropdown-options-item--mapping': mappingOption,
    'ds-form-control-select__dropdown-options-item--disabled': disabled,
    'ds-form-control-select__dropdown-options-item--collection': collectionOption
  })} onMouseDown={e => {
    (disabled || actionOption) && e.preventDefault();
    onOptionClick(value);
  }}>
      {preview && collectionOption && optionPreview}
      {contentTypeOption && <div className="content-type-option">{icon}{label}</div>}
      {iconLeft && icon}
      {!contentTypeOption && label}
      {contentTypeOption && iconRight}
      {preview && !collectionOption && optionPreview}
      {children}
    </div>;
}

Option.defaultProps = {
  active: false,
  collectionOption: false,
  contentTypeOption: false,
  disabled: false,
  folderOption: false,
  icon: null,
  mappingOption: false,
  onOptionClick: () => {},
  preview: null,
  style: {},
  value: undefined
};

export default Option;