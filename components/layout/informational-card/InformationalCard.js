/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import { InfoCircle } from '../../Icons.es6.js'

type Props = {|
  accentColor: string,
  children?: React.Node,
  heading: string | React.Node,
  showIcon: boolean,
  subheading: string | React.Node,
  icon: React.Element,
  iconStyle: Object,
  className?: string | Object
|}

function InformationalCard ({ accentColor, children, heading, showIcon, icon, iconStyle, subheading, className }: Props) {
  const iconElement = React.cloneElement(icon, {
    color: accentColor,
    style: iconStyle
  })
  return (
    <div className={classnames('informational-card', className)}>
      <span
        className="informational-card__before"
        style={{ background: accentColor }}
      />
      <div className="informational-card__heading">
        {showIcon && iconElement}
        {heading}
      </div>
      <div className="informational-card__subheading">
        {subheading}
      </div>
      {children && (
        <div className="informational-card__action-item">
          {children}
        </div>
      )}
    </div>
  )
}

InformationalCard.defaultProps = {
  accentColor: '#F5BE33',
  showIcon: true,
  icon: <InfoCircle />,
  iconStyle: {
    marginTop: 2,
    marginRight: 5,
    minWidth: 16
  }
}

export default InformationalCard
