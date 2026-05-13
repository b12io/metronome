import React from 'react'
import ReactDOM from 'react-dom'

const GAP = 7

function getPositionStyle(el, placement) {
  const rect = el.getBoundingClientRect()
  const base = (placement || 'top').split('-')[0]
  switch (base) {
    case 'bottom':
      return { top: rect.bottom + GAP, left: rect.left + rect.width / 2, transform: 'translateX(-50%)' }
    case 'left':
      return { top: rect.top + rect.height / 2, left: rect.left - GAP, transform: 'translate(-100%, -50%)' }
    case 'right':
      return { top: rect.top + rect.height / 2, left: rect.right + GAP, transform: 'translateY(-50%)' }
    default:
      return { top: rect.top - GAP, left: rect.left + rect.width / 2, transform: 'translate(-50%, -100%)' }
  }
}

class B12Tooltip extends React.Component {
  static defaultProps = {
    controlled: false,
    innerClassName: 'ds-tooltip',
    placement: 'top',
    showTapToDismissText: false,
    tapToDismiss: false
  }

  state = {
    hasError: false,
    isOpen: false,
    positionStyle: {},
    arrowOffset: 0
  }

  currentAttempts = 0
  _showTimer = null
  _hideTimer = null
  _adjustRaf = null
  tooltipEl = null

  componentDidCatch() {
    this.setState({ hasError: true }, () => {
      if (this.currentAttempts < 5) {
        this.currentAttempts++
        this.setState({ hasError: false })
      }
    })
  }

  getTargetEl() {
    const { target } = this.props
    if (!target) return null
    return document.getElementById(target) || document.querySelector(`.${target}`)
  }

  componentDidMount() {
    if (!this.props.controlled) {
      this.attachListeners()
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.controlled && prevProps.target !== this.props.target) {
      this.detachListeners(prevProps.target)
      this.attachListeners()
    }
  }

  componentWillUnmount() {
    clearTimeout(this._showTimer)
    clearTimeout(this._hideTimer)
    cancelAnimationFrame(this._adjustRaf)
    this.detachListeners()
  }

  setTooltipRef = (el) => {
    this.tooltipEl = el
    if (el) {
      cancelAnimationFrame(this._adjustRaf)
      this._adjustRaf = requestAnimationFrame(this.adjustPosition)
    }
  }

  adjustPosition = () => {
    if (!this.tooltipEl) return
    const rect = this.tooltipEl.getBoundingClientRect()
    const vw = window.innerWidth
    const vh = window.innerHeight
    const margin = 4

    let dx = 0
    let dy = 0
    if (rect.left < margin) dx = margin - rect.left
    else if (rect.right > vw - margin) dx = vw - margin - rect.right
    if (rect.top < margin) dy = margin - rect.top
    else if (rect.bottom > vh - margin) dy = vh - margin - rect.bottom

    if (dx === 0 && dy === 0) return

    const base = (this.props.placement || 'top').split('-')[0]
    const isVertical = base === 'top' || base === 'bottom'
    const arrowOffset = isVertical ? -dx : -dy

    this.setState(({ positionStyle }) => ({
      positionStyle: {
        ...positionStyle,
        left: typeof positionStyle.left === 'number' ? positionStyle.left + dx : positionStyle.left,
        top: typeof positionStyle.top === 'number' ? positionStyle.top + dy : positionStyle.top
      },
      arrowOffset
    }))
  }

  attachListeners() {
    const el = this.getTargetEl()
    if (!el) return
    el.addEventListener('mouseenter', this.handleShow)
    el.addEventListener('mouseleave', this.handleHide)
    el.addEventListener('focus', this.handleShow)
    el.addEventListener('blur', this.handleHide)
  }

  detachListeners(targetId) {
    const el = targetId
      ? document.getElementById(targetId) || document.querySelector(`.${targetId}`)
      : this.getTargetEl()
    if (!el) return
    el.removeEventListener('mouseenter', this.handleShow)
    el.removeEventListener('mouseleave', this.handleHide)
    el.removeEventListener('focus', this.handleShow)
    el.removeEventListener('blur', this.handleHide)
  }

  handleShow = () => {
    clearTimeout(this._hideTimer)
    const { delay, placement } = this.props
    const ms = delay && (typeof delay === 'object' ? delay.show : delay)
    const open = () => {
      const el = this.getTargetEl()
      if (!el) return
      this.setState({ isOpen: true, positionStyle: { position: 'fixed', zIndex: 1070, ...getPositionStyle(el, placement) }, arrowOffset: 0 })
    }
    ms ? (this._showTimer = setTimeout(open, ms)) : open()
  }

  handleHide = () => {
    clearTimeout(this._showTimer)
    const { delay } = this.props
    const ms = delay && (typeof delay === 'object' ? delay.hide : delay)
    ms
      ? (this._hideTimer = setTimeout(() => this.setState({ isOpen: false }), ms))
      : this.setState({ isOpen: false })
  }

  renderTooltip(content) {
    const { innerClassName, controlled, isOpen: isOpenProp, placement } = this.props
    const { isOpen: isOpenState, positionStyle } = this.state
    const visible = controlled ? isOpenProp : isOpenState

    if (!visible) return null

    let style = positionStyle
    if (controlled) {
      const el = this.getTargetEl()
      style = el ? { position: 'fixed', zIndex: 1070, ...getPositionStyle(el, placement) } : {}
    }

    const base = (placement || 'top').split('-')[0]
    const isVertical = base === 'top' || base === 'bottom'
    const { arrowOffset } = this.state
    const arrowStyle = isVertical
      ? { left: `calc(50% + ${arrowOffset}px)`, marginLeft: '-0.4rem' }
      : { top: `calc(50% + ${arrowOffset}px)`, marginTop: '-0.4rem' }

    return ReactDOM.createPortal(
      <div ref={this.setTooltipRef} className={`tooltip show bs-tooltip-${base}`} role="tooltip" style={style}>
        <div className="arrow" style={arrowStyle} />
        <div className={`tooltip-inner ${innerClassName}`}>{content}</div>
      </div>,
      document.body
    )
  }

  render() {
    if (this.state.hasError) return null

    const { children, target, text, simple, controlled, showTapToDismissText, tapToDismiss, onClick, placement } = this.props

    if (simple) {
      return (
        <span className="ds-tooltip__simple">
          {children}
          <span className={`ds-tooltip__simple--${placement}`}>{text}</span>
        </span>
      )
    }

    const tapHelper = showTapToDismissText && (
      <div className="ds-tooltip__tap-help">tap to dismiss</div>
    )
    const content = tapToDismiss ? <div onClick={onClick}>{text}{tapHelper}</div> : text
    const tooltip = this.renderTooltip(content)

    return children({ tooltip, target })
  }
}

export default B12Tooltip
