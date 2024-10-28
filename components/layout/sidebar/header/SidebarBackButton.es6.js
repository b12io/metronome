import React from 'react'

import { HEADER_BACK_ICON_COLOR } from './constants.es6.js'
import { Back } from '../../../Icons.es6.js'


class SidebarBackButton extends React.Component {
  backButtonRef = React.createRef()

  static defaultProps = {
    hideText: false,
    text: 'Back'
  }

  handleClick = (event) => {
    event && event.preventDefault()
    if (this.backButtonRef.current) {
      this.backButtonRef.current.focus()
    }
    this.props.onClick()
  }

  render () {
    return (
      <div
        className="ds-sidebar__header-back-button-container"
        onClick={this.handleClick}
        ref={this.backButtonRef}
        tabIndex="-1"
      >
        <button type="button">
          <Back color={HEADER_BACK_ICON_COLOR} />
          {!this.props.hideText && (
            <span className="ds-sidebar__header-back-text">{this.props.text}</span>
          )}
        </button>
      </div>
    )
  }
}

export default SidebarBackButton
