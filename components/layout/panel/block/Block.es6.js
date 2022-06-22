import * as React from 'react'
import classnames from 'classnames'

import BlockTitle from './BlockTitle.es6.js'
import BlockContent from './BlockContent.es6.js'



function Block (props) {
  return (
    <div className={classnames({
      'ds-content-block': true,
      'ds-content-block--divider': props.bottomDivider
    }, props.className)}>
      {props.children}
    </div>
  )
}

export default Block
