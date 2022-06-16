/*  */
import React from 'react'
import classnames from 'classnames'


/**
 * Form group
 */
function Group ({ label, children, icon }) {
  return (
    <div className="ds-form-group">
      {(label || icon) && (
        <div className={classnames({
          'ds-control-label': true,
          'ds-control-label--with-icon': icon && label,
          'ds-control-label--icon-only': icon && !label
        })}>
          {label}
          {icon}
        </div>
      )}
      {children}
    </div>
  )
}

Group.defaultProps = {
  icon: null,
  label: null
}

export default Group
