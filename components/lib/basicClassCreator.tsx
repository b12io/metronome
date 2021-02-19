import React from 'react'
import classnames from 'classnames'

export default (displayName, defaultClassName, element = 'div') => {
  const fn = (props) => {
    const {className, children, content, ...otherProps} = props

    return React.createElement(element, {
      className: classnames(defaultClassName, className),
      ...otherProps
    }, content || children)
  }

  fn.displayName = displayName
  return fn
}
