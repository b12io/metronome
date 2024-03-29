
import React, { Children, isValidElement, cloneElement } from 'react'
import classnames from 'classnames'


const TabbedNavigation = ({ progress, spread, block, progressType, className, children }) => {
  const componentChildren = Children.toArray(children)
  const items = componentChildren
    .filter(child => isValidElement(child))
    .map((child, index) => cloneElement(child, {
      showProgress: progressType === 'items' && progress === index + 1
    }))
  if (!items.length || items.length !== componentChildren.length) {
    console.warn('TabbedNavigation should have TabbedNavigationItem components as its children')
  }

  return (
    <div className="ds-tabbed-nav-wrapper">
      <div
        className={classnames(
          'ds-tabbed-nav',
          {
            'ds-tabbed-nav--spread': spread,
            'ds-tabbed-nav--block': block,
          },
          className
        )}
      >
        {progressType === 'percent' && <div
          className="ds-tabbed-nav__progress"
          style={{width: `${progress}%`}}
        />}
        <ul>
          {items}
        </ul>
      </div>
    </div>
  )
}

TabbedNavigation.defaultProps = {
  spread: false,
  block: false,
  progress: 0,
  progressType: 'percent',
}

export default TabbedNavigation
