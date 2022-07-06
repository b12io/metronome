import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default (displayName, defaultClassName, element = 'div') => {
  const fn = (props) => {
    const { className, children, content, ...otherProps } = props

    return React.createElement(
      element,
      {
        className: classnames(defaultClassName, className),
        ...otherProps
      },
      content || children
    )
  }

  fn.displayName = displayName
  fn.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }

  return fn
}
