/*  */
import React from 'react'


function MetaData ({ children = '...' }) {
  return (
    <div className="ds-metadata">
      <div className="ds-metadata__di">
        <div className="ds-metadata__dd"><code>{children}</code></div>
      </div>
    </div>
  )
}

export default MetaData
