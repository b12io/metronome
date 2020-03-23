/* @flow */
import React from 'react'
import { Tooltip, UncontrolledTooltip } from 'reactstrap'

import type { Element, Node } from 'react'

type Props = {|
  children: ({ tooltip: Element<typeof UncontrolledTooltip | typeof Tooltip>, target: string }) => Node,
  innerClassName: string,
  modifiers: { offset: { offset: string } },
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void,
  placement: string,
  showTapToDismissText: boolean,
  tapToDismiss: boolean,
  target: string,
  text: string | React$Element<'ul' | 'ol'>,
  controlled: boolean,
  // Optional props for controlled Tooltip:
  // boolean to control the state of the tooltip
  isOpen?: boolean,
  hideArrow?: boolean,
  // callback for toggling isOpen in the controlling component
  toggle?: () => void,
  // Where to inject the popper DOM node, default to body
  container?: string | () => void | Element,
  // optionally override show/hide delays - default { show: 0, hide: 250 }
  delay?: number | { show: number, hide: number },
  className?: string,
  // Apply class to the inner-tooltip
  innerClassName?: string,
  // optionally hide tooltip when hovering over tooltip content - default true
  autohide?: boolean
|}

function B12Tooltip (props: Props) {
  const { children, target, text, controlled, showTapToDismissText, tapToDismiss, onClick, ...tooltipOptions } = props
  const tapHelper = showTapToDismissText && (
    <div className="ds-tooltip__tap-help">
      tap to dismiss
    </div>
  )
  const content = tapToDismiss ? (
    <div onClick={onClick}>
      {text}
      {tapHelper}
    </div>
  ) : text

  const tooltip = controlled ? (
    <Tooltip {...tooltipOptions} target={target}>
      {content}
    </Tooltip>
  ) : (
    <UncontrolledTooltip {...tooltipOptions} target={target}>
      {content}
    </UncontrolledTooltip>
  )

  return children({ tooltip, target })
}

B12Tooltip.defaultProps = {
  controlled: false,
  innerClassName: 'ds-tooltip',
  modifiers: { offset: { offset: '0, 7' } },
  placement: 'top',
  showTapToDismissText: false,
  tapToDismiss: false
}

export default B12Tooltip
