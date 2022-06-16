// 
import React from 'react'
import classnames from 'classnames'



const DEFAULT_STATUS_LABELS = {
  success: 'Active',
  default: 'Inactive',
  warning: 'Warning',
  error: 'Error'
}

function StatusIndicator ({ status, statusLabels, className }) {
  const classNames = classnames(
    'ds-status-indicator',
    `ds-status-indicator--${status}`,
    className
  )
  const labels = {
    ...DEFAULT_STATUS_LABELS,
    ...statusLabels
  }
  return (
    <div className={classNames}>
      <div className="ds-status-indicator__dot"></div>
      <div className="ds-status-indicator__label">{labels[status]}</div>
    </div>
  )
}

StatusIndicator.defaultProps = {
  status: 'default',
  statusLabels: {}
}

export default StatusIndicator
