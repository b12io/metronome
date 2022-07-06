import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ListItemContent = ({
  children,
  className,
  subtitle,
  suptitle,
  hasDescription,
  widthAuto,
  clickable,
  ...otherProps
}) => {
  const classes = classNames(
    'card-list-item__content',
    {
      'card-list-item__content--with-description': hasDescription,
      'card-list-item__content--clickable': clickable,
      'card-list-item__content--width-auto': widthAuto
    },
    className
  )
  const suptitleElement =
    typeof suptitle === 'string' ? <span>{suptitle}</span> : suptitle
  const subtitleElement =
    typeof subtitle === 'string' ? <span>{subtitle}</span> : subtitle

  return (
    <div className={classes} {...otherProps}>
      {suptitleElement}
      {children}
      {subtitleElement}
    </div>
  )
}

ListItemContent.defaultProps = {
  widthAuto: false,
  hasDescription: false
}

ListItemContent.propTypes = {
  children: PropTypes.node,
  subtitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  suptitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  widthAuto: PropTypes.bool,
  hasDescription: PropTypes.bool,
  clickable: PropTypes.bool
}

export default ListItemContent
