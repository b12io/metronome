import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function DemoLayoutContent ({ children, darkBg }) {
  const classNames = classnames('app__body', { 'app__body--bg': darkBg })
  return (
    <div className={classNames}>
      <div className="app__body-content">{children}</div>
    </div>
  )
}

DemoLayoutContent.defaultProps = {
  darkBg: false
}

DemoLayoutContent.propTypes = {
  children: PropTypes.any,
  darkBg: PropTypes.bool
}

export default DemoLayoutContent
