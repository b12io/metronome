// @flow
import React from 'react'
import classnames from 'classnames'
import { times } from 'lodash'

type NavIndicatorProps = {|
  /** Current step to show active indicators. */
  currentStep: number,
  /** Total steps to show number of indicators. */
  totalSteps: number,
|}

/**
 * An indicator to show the total number of steps, and the current active step.
 */
function NavIndicator ({ currentStep, totalSteps }: NavIndicatorProps) {
  return (
    <div className="nav-indicator">
      {times(totalSteps, (stepIterator) => stepIterator < currentStep).map(
        (isActive, index) => (
          <span
            className={classnames({ 'nav-indicator__active': isActive })}
            key={index}
          ></span>
        )
      )}
    </div>
  )
}

export default NavIndicator
