/* eslint-disable */
import React from 'react'
function MetaData ({ importFrom = '...', dependencies = 'No', flow = 'No', tests = 'No' }) {
  return (
    <div className="ds-metadata">
      <div className="ds-metadata__di">
        <div className="ds-metadata__dt">Import</div>
        <div className="ds-metadata__dd"><code>{importFrom.split(',').map((v, i) => <div key={i}><code>{v}</code></div>)}</code></div>
      </div>
      <div className="ds-metadata__di">
        <div className="ds-metadata__dt">Dependencies</div>
        <div className="ds-metadata__dd">{dependencies}</div>
      </div>
      <div className="ds-metadata__di">
        <div className="ds-metadata__dt">Flow-typed</div>
        <div className="ds-metadata__dd">{flow}</div>
      </div>
      <div className="ds-metadata__di">
        <div className="ds-metadata__dt">Tests</div>
        <div className="ds-metadata__dd">{tests}</div>
      </div>
    </div>
  )
}

export default MetaData
