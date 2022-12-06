import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { InfoCircle, Tip, Check, Close } from '../../Icons.es6.js'

const BannerNotice = ({
  type = 'default',
  icon = 'infoCircle',
  title = '',
  text = '',
  showClose = false,
  onCloseClick,
  className = ''
}) => {
  const renderIcon = (type) => {
    if (type === 'tip') {
      return <Tip />
    }

    if (type === 'check') {
      return <Check />
    }

    return <InfoCircle />
  }
  return (
    <div
      className={classnames(
        'ds-banner-notice',
        `ds-banner-notice--${type}`,
        className
      )}
    >
      <div className="ds-banner-notice__icon">
        {React.isValidElement(icon) && icon}
        {!React.isValidElement(icon) && renderIcon(icon)}
      </div>
      {title && <div className="ds-banner-notice__title">{title}</div>}
      <div className="ds-banner-notice__text">{text}</div>
      {showClose && (
        <button
          type="button"
          aria-label="Dismiss notice"
          className="ds-banner-notice__close"
          onClick={onCloseClick}
        >
          <Close />
        </button>
      )}
    </div>
  )
}

BannerNotice.propTypes = {
  type: PropTypes.oneOf(['default', 'warning', 'success', 'danger']),
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.oneOf(['infoCircle', 'tip', 'check'])
  ]),
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  showClose: PropTypes.bool,
  onCloseClick: PropTypes.func,
  className: PropTypes.string
}

export default BannerNotice
