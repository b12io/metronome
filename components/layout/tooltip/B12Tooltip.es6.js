import React from 'react'
import { Tooltip, UncontrolledTooltip } from 'reactstrap'

class B12Tooltip extends React.Component {
  static defaultProps = {
    controlled: false,
    innerClassName: 'ds-tooltip',
    modifiers: { offset: { offset: '0, 7' } },
    placement: 'top',
    showTapToDismissText: false,
    tapToDismiss: false
  }

  state = {
    hasError: false
  }

  currentAttempts = 0

  componentDidCatch() {
    this.setState({ hasError: true }, () => {
      if (this.currentAttempts < 5) {
        this.currentAttempts++
        this.setState({ hasError: false })
      }
    })
  }

  render() {
    if (this.state.hasError) {
      return null
    }

    const {
      children,
      target,
      text,
      controlled,
      showTapToDismissText,
      tapToDismiss,
      onClick,
      ...tooltipOptions
    } = this.props
    if (this.props.simple) {
      /**
       * B12Tooltip is constructed using `div`s and thus cannot be used inside buttons.
       * This span with its class is created to address that issue.
       */
      const innerClass = `ds-tooltip__simple--${this.props.placement}`
      return (
        <span className="ds-tooltip__simple">
          {children}
          <span className={innerClass}>{text}</span>
        </span>
      )
    }
    const tapHelper = showTapToDismissText && (
      <div className="ds-tooltip__tap-help">tap to dismiss</div>
    )
    const content = tapToDismiss ? (
      <div onClick={onClick}>
        {text}
        {tapHelper}
      </div>
    ) : (
      text
    )

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
}

export default B12Tooltip
