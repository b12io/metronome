/*  */

import * as React from 'react'


function BlockContent (props) {
  return (
    <div className="ds-content-block__body">
      {props.children}
    </div>
  )
}

export default BlockContent
