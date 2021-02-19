import React from 'react'

/**
 * Panel's content container.
 */
function Content ({ children }) {
  return (<div className="ds-panel__content">{children}</div>)
}

Content.defaultProps = {
  children: []
}

export default Content
