import React from 'react'
import classnames from 'classnames'

function DemoLayoutContent ({ children, darkBg }) {
  const classNames = classnames('app__body', {'app__body--bg': darkBg})
  return (
    <div className={classNames}>
      <div className="app__body-content">
        {children}
      </div>
    </div>
  )
}

DemoLayoutContent.defaultProps = {
  darkBg: false
}

export default DemoLayoutContent
