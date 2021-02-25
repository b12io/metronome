// @flow

import * as React from 'react'
import classnames from 'classnames'
import uuidV4 from 'uuid/v4'

import B12Tooltip from '../tooltip/B12Tooltip.es6.js'

type Props = {
  label: string,
  clickable: boolean,
  showSeparator: boolean,
  showTooltip?: boolean,
  width?: number,
  onClick?: () => void
}

type NodeRef = { current: null | HTMLDivElement } | ((null | HTMLDivElement) => mixed)

export default React.forwardRef<Props, HTMLDivElement>(
  function BreadcrumbEntry ({
    label, clickable, onClick, showSeparator, width, showTooltip = true
  }: Props, ref: NodeRef) {
    const style = {}
    if (width) {
      style.maxWidth = width
    }

    return (
      <div
        ref={ref}
        className="ds-tabbed-nav__breadcrumbs-entry"
      >
        {(showSeparator) && (
          <div className="ds-tabbed-nav__separator" />
        )}

        <B12Tooltip
          text={label}
          target={`entry-${uuidV4()}`}
        >
          {({ tooltip, target }) => (
            <div
              id={target}
              style={style}
              className={classnames('ds-tabbed-nav__item', {
                'ds-tabbed-nav__item--clickable': clickable
              })}
            >
              <div
                className="ds-tabbed-nav__breadcrumbs-label"
                onClick={onClick}
              >{label}</div>
              {showTooltip && tooltip}
            </div>
          )}
        </B12Tooltip>
      </div>
    )
  }
)
