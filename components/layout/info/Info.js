/* @flow */

import React from 'react'
import { Fragment } from 'react'
import type { Element, Node } from 'react'

import B12Tooltip from '../tooltip/B12Tooltip.es6.js'
import { generateId } from '../../lib/helpers.es6.js'

type Props = {|
  text: string | React$Element<'ul' | 'ol'>,
  icon?: Element<'svg'>,
  children?: Node,
  delay?: number | { show: number, hide: number }
|}

type State = {|
  uniqueClassName: string
|}

class Info extends React.PureComponent<Props, State> {
  state = {
    uniqueClassName: 'info-' + generateId()
  }

  render () {
    const { icon: Icon, text, children, delay } = this.props
    const { uniqueClassName } = this.state

    return (
      <B12Tooltip
        text={text}
        target={uniqueClassName}
        delay={delay}
      >
        {({ tooltip, target }) => (
          <div id={target}>
            {/* It's also possible to pass an icon through a property
                for back compatibility */}
            {!!Icon && (
              <Icon />
            )}

            {/* This will allow to pass icons with custom
                properties (height, width, color) */}
            {!Icon && !!children && (
              <Fragment>
                {children}
              </Fragment>
            )}

            {tooltip}
          </div>
        )}
      </B12Tooltip>
    )
  }
}

export default Info
