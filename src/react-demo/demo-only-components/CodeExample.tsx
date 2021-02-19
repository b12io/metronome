import React from 'react'
import Highlighter from './Highlighter'

function CodeExample ({ title = 'Code example', code, language = 'jsx', children }) {
  return (
    <div className="ds-example">
      <div className="ds-example__title">{title}</div>
      <div className="ds-example__preview">
        {children}
      </div>
      <div className="ds-example__code">
        <Highlighter language={language}>{code}</Highlighter>
      </div>
    </div>
  )
}

export default CodeExample
