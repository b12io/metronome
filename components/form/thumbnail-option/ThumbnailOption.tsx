
import React from "react";
import { Key, Node } from "react";
import classnames from "classnames";

import { Check } from "../../Icons.es6";

type Props = {
  key?: Key;
  label: string;
  onOptionClick: (event: React.SyntheticEvent<HTMLDivElement>, value: string) => any;
  selected: boolean;
  thumbnail: string;
  thumbnailCover: boolean;
  isVideo: boolean;
  videoType?: string;
  videoUrl?: string;
  rounded?: boolean;
  shadowed?: boolean;
  text?: string;
  value: string;
  children?: Node;
  className?: string | Object;
};

type ImageThumbnailType = {
  thumbnailCover: boolean;
  thumbnail: string;
  label: string;
};

function ImageThumbnail({
  thumbnail,
  thumbnailCover,
  label
}: ImageThumbnailType) {
  return <img className={classnames({
    'ds-thumbnail-option__thumbnail': true,
    'ds-thumbnail-option__thumbnail--cover': thumbnailCover
  })} src={thumbnail} alt={label} />;
}

function ThumbnailOption({
  label,
  onOptionClick,
  selected,
  thumbnail,
  thumbnailCover,
  value,
  isVideo,
  videoType,
  videoUrl,
  rounded,
  shadowed,
  text,
  className,
  children
}: Props) {
  return <div className={classnames({
    'ds-thumbnail-option': true,
    'ds-thumbnail-option--selected': selected,
    'ds-thumbnail-option--rounded': rounded,
    'ds-thumbnail-option--shadowed': shadowed
  }, className)} onClick={event => onOptionClick(event, value)}>
      <div className="ds-thumbnail-option__thumbnail-container">
        {isVideo ? <video className={classnames({
        'ds-thumbnail-option__thumbnail': true,
        'ds-thumbnail-option__thumbnail--cover': thumbnailCover
      })} width="100%" height="100%" autoPlay loop muted>
            <source src={videoUrl} type={videoType} />
            <ImageThumbnail thumbnailCover={thumbnailCover} thumbnail={thumbnail} label={label} />
          </video> : thumbnail ? <ImageThumbnail thumbnailCover={thumbnailCover} thumbnail={thumbnail} label={label} /> : children}
      </div>
      {text && <div className="ds-thumbnail-option__text">{text}</div>}
      {selected && <Check color="#766CFF" height="16" width="16" viewbox="0 0 16 16" className="ds-thumbnail-option__selected-icon" />}
    </div>;
}

ThumbnailOption.defaultProps = {
  label: '',
  onOptionClick: () => {},
  selected: false,
  thumbnail: '',
  thumbnailCover: false,
  isVideo: false,
  rounded: false,
  shadowed: false,
  text: '',
  value: ''
};

export default ThumbnailOption;