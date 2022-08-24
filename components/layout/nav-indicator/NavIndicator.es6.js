import React from 'react'
import classnames from 'classnames'
import { times } from 'lodash'

/**
 * An indicator to show the total number of steps, and the current active step.
 */
function NavIndicator({ currentStep, totalSteps }) {
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
