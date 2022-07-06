import React from 'react'
import PropTypes from 'prop-types'

/**
 * Panel's content container.
 */
function Content ({ children }) {
  return <div className="ds-panel__content">{children}</div>
}

Content.defaultProps = {
  children: []
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ])
}

export default Content
