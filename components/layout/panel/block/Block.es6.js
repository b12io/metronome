/* @flow */

import * as React from 'react'
import classnames from 'classnames'

import BlockTitle from './BlockTitle.es6.js'
import BlockContent from './BlockContent.es6.js'

type BlockChildren = React.Element<typeof BlockTitle> | React.Element<typeof BlockContent>

type Props = {|
  bottomDivider?: boolean,
  className?: string | Object,
  children: React.ChildrenArray<BlockChildren> | BlockChildren
|}

function Block (props: Props) {
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
