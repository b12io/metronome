
import React, { Fragment } from 'react'

import B12Tooltip from '../tooltip/B12Tooltip.es6.js'
import { generateId } from '../../lib/helpers.es6.js'



class Info extends React.PureComponent {
  state = {
    uniqueClassName: 'info-' + generateId()
  }

  render () {
    const { icon: Icon, text, children, delay, innerClassNames } = this.props
    const { uniqueClassName } = this.state
    const innerClassName = 'ds-tooltip'
    if (innerClassNames) {
      innerClassName += ' '.innerClassNames
    }
    return (
      <B12Tooltip
        text={text}
        target={uniqueClassName}
        innerClassName={innerClassNames}
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
