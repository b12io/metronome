import React from 'react'
import { isEmpty } from 'lodash'
import classname from 'classnames'

class Title extends React.Component {
  render () {
    const {
      icon,
      label,
      help,
      spread,
      borderBottom,
      marginBottomMedium,
      marginBottomSmall,
      marginBottomXSmall,
      children,
      button
    } = this.props

    const classNames = classname('ds-panel__title', {
      'ds-panel__title--button': button,
      'ds-panel__title--icon': icon,
      'ds-panel__title--spread': spread,
      'ds-panel__title--border-bottom': borderBottom,
      'ds-panel__title--mb-medium': marginBottomMedium,
      'ds-panel__title--mb-small': marginBottomSmall,
      'ds-panel__title--mb-xsmall': marginBottomXSmall
    })

    return (
      <div className={classNames}>
        {label && (
          <div className="ds-panel__title-row">
            <h4>
              {icon}
              {label}
            </h4>
            {button}
          </div>
        )}
        {isEmpty(help) ? null : <p>{help}</p>}
        {children}
      </div>
    )
  }
}

export default Title
