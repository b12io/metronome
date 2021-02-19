/* @flow */
import React from 'react'

type MetaDataProps = {|
  children: string,
|}

function MetaData ({ children = '...' }: MetaDataProps) {
  return (
    <div className="ds-metadata">
      <div className="ds-metadata__di">
        <div className="ds-metadata__dd"><code>{children}</code></div>
      </div>
    </div>
  )
}

export default MetaData
