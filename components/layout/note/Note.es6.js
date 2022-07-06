import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Note ({ icon, bordered, shadowed, padded, children, className }) {
  const classNames = classnames('ds-note', className, {
    'ds-note--has-icon': !!icon,
    'ds-note--bordered': bordered,
    'ds-note--shadowed': shadowed,
    'ds-note--padded': padded
  })
  return (
    <div className={classNames}>
      {icon && <div className="ds-note__icon">{icon}</div>}
      {children}
    </div>
  )
}

Note.defaultProps = {
  icon: null,
  bordered: true,
  shadowed: true,
  padded: true,
  children: null,
  className: ''
}

Note.propTypes = {
  icon: PropTypes.element,
  bordered: PropTypes.bool,
  shadowed: PropTypes.bool,
  padded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
    String
  ])
}

export default Note
