import React, { useState, useEffect, useRef, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames' // Make sure to add this import

function Popover({
  trigger,
  children,
  isOpen: controlledIsOpen,
  onToggle,
  className,
  isSelected,
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen
  const popoverRef = useRef(null)

  const handleToggle = () => {
    if (isControlled) {
      if (onToggle) {
        onToggle()
      }
    } else {
      setInternalIsOpen(!internalIsOpen)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && popoverRef.current && !popoverRef.current.contains(event.target)) {
        if (isControlled && onToggle) {
          onToggle()
        } else if (!isControlled) {
          setInternalIsOpen(false)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onToggle, isControlled])

  const triggerWithClasses = isValidElement(trigger)
    ? cloneElement(trigger, {
        className: classnames(
          trigger.props.className,
          {
            'button--has-selection': !isOpen && isSelected
          }
        )
      })
    : trigger

  return (
    <div className={classnames('ds-popover-container', className)} ref={popoverRef}>
      <div onClick={handleToggle}>{triggerWithClasses}</div>
      {isOpen && <div className="ds-popover">{children}</div>}
    </div>
  )
}

Popover.propTypes = {
  /**
   * Element that triggers the popover
   */
  trigger: PropTypes.node.isRequired,

  /**
   * Content to display inside the popover
   */
  children: PropTypes.node.isRequired,

  /**
   * Controls whether the popover is open (controlled mode)
   */
  isOpen: PropTypes.bool,

  /**
   * Callback when popover visibility changes (for controlled mode)
   */
  onToggle: PropTypes.func,

  /**
   * Additional CSS class for the popover container
   */
  className: PropTypes.string,

  /**
   * Whether the trigger should display in a selected state
   */
  isSelected: PropTypes.bool,
}

Popover.defaultProps = {
  isOpen: undefined,
  onToggle: () => {},
  className: '',
  isSelected: false,
}

export default Popover
