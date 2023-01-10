import React, { useState } from 'react'
import classnames from 'classnames'

import {
  Check
} from '../../Icons.es6.js'



function ImageThumbnail ({ thumbnail, thumbnailCover, label, preloader }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <React.Fragment>
      {preloader
        ? (loaded
          ? null
          : preloader)
        : null
      }
      <img
        className={classnames({
          'ds-thumbnail-option__thumbnail': true,
          'ds-thumbnail-option__thumbnail--cover': thumbnailCover,
        })}
        style={preloader
          ? (loaded
            ? {}
            : { display: 'none' })
          : {}
        }
        onLoad={() => setLoaded(true)}
        src={thumbnail}
        alt={label}
      />
    </React.Fragment>
  )
}

function ThumbnailOption ({ label, onOptionClick, onFocus, selected, thumbnail,
  thumbnailCover, value, isVideo, videoType, videoUrl, rounded,
  shadowed, text, tabIndex, className, children, preloader }) {
  return (
    <div className={classnames({
      'ds-thumbnail-option': true,
      'ds-thumbnail-option--selected': selected,
      'ds-thumbnail-option--rounded': rounded,
      'ds-thumbnail-option--shadowed': shadowed
    }, className)}
    onClick={(event) => onOptionClick(event, value)}
    onFocus={(event) => onFocus(event, value)}
    tabIndex={tabIndex}
    >
      <div className="ds-thumbnail-option__thumbnail-container">
        {isVideo ? (
          <video
            className={classnames({
              'ds-thumbnail-option__thumbnail': true,
              'ds-thumbnail-option__thumbnail--cover': thumbnailCover,
            })}
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src={videoUrl} type={videoType} />
            <ImageThumbnail
              thumbnailCover={thumbnailCover}
              thumbnail={thumbnail}
              label={label}
              preloader={preloader}
            />
          </video>
        ) : (
          thumbnail
            ? <ImageThumbnail
              thumbnailCover={thumbnailCover}
              thumbnail={thumbnail}
              label={label}
              preloader={preloader}
            />
            : children
        )}
      </div>
      {text && <div className="ds-thumbnail-option__text">{text}</div>}
      {selected && <Check
        color="#766CFF"
        height="16"
        width="16"
        viewbox="0 0 16 16"
        className="ds-thumbnail-option__selected-icon"
      />}
    </div>
  )
}

ThumbnailOption.defaultProps = {
  label: '',
  onOptionClick: () => {},
  onFocus: () => {},
  selected: false,
  thumbnail: '',
  thumbnailCover: false,
  isVideo: false,
  rounded: false,
  shadowed: false,
  text: '',
  value: '',
  tabIndex: 0
}

export default ThumbnailOption
