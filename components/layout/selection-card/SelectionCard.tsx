
import React from "react";
import classnames from "classnames";

import { Element, Node } from "react";

import Button from "../../../components/form/button/Button.es6";

type Props = {
  buttonLabel: string;
  children?: Node;
  label: string;
  onClick: (value: string) => void;
  preview: Node | null | undefined;
  scroll: boolean;
  thumbnail: string;
  thumbnailCover: boolean;
  value: string;
};

function SelectionCard({
  children,
  label,
  value,
  thumbnail,
  thumbnailCover,
  onClick,
  preview,
  scroll,
  buttonLabel
}: Props) {
  return <div className={classnames({
    'ds-selection-card': true,
    'ds-selection-card__scroll': scroll
  })}>
      <img className={classnames({
      'ds-selection-card__thumbnail': true,
      'ds-selection-card__thumbnail-cover': thumbnailCover
    })} onClick={() => onClick(value)} src={thumbnail} alt={label} />
      <div className="ds-selection-card__label">{label}</div>
      <div className="ds-selection-card__value">{value}</div>
      {children}
      {preview && <div className="ds-selection-card__preview">{preview}</div>}
      <div className="ds-selection-card__button-container">
        <Button block label={buttonLabel} onClick={() => onClick(value)} alternative />
      </div>
    </div>;
}

SelectionCard.defaultProps = {
  label: '',
  value: '',
  thumbnail: '',
  thumbnailCover: true,
  preview: null,
  scroll: false,
  onClick: () => {},
  buttonLabel: ''
};

export default SelectionCard;