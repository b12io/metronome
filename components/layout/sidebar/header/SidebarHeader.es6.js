import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import SidebarBackButton from './SidebarBackButton.es6.js'
import Button from '../../../form/button/Button.es6.js'
import { B12Logo } from '../../../Icons.es6.js'
import ActionDropdown from './ActionDropdown.es6.js'

class SidebarHeader extends React.Component {
  state = {
    actionsVisible: false,
    actionsAvailable: false
  }

  actionsRef = React.createRef()

  static getDerivedStateFromProps ({ quickActions }, prevState) {
    const actionsAvailable = Array.isArray(quickActions) && quickActions.length > 0
    if (actionsAvailable !== prevState.actionsAvailable) {
      return { actionsAvailable }
    }

    return null
  }

  componentDidMount () {
    document.addEventListener('click', this.onDocumentClick, false)
    document.addEventListener('touchend', this.onDocumentClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onDocumentClick, false)
    document.removeEventListener('touchend', this.onDocumentClick, false)
  }

  onDocumentClick = (event) => {
    if (!this.actionsRef || !this.actionsRef.current) {
      return
    }

    if (!this.actionsRef.current.contains(event.target) && this.state.actionsVisible) {
      this.setState({ actionsVisible: false })
    }
  }

  onAction = () => {
    this.props.onAction()

    if (this.state.actionsAvailable) {
      this.setState(({ actionsVisible }) => ({
        actionsVisible: !actionsVisible
      }))
    }
  }

  render () {
    const {
      actionIcon,
      backButton,
      backButtonText,
      tabbedNavigation,
      children,
      dropdownMenuLabel,
      homeButton,
      isScrollingDown,
      leftAction,
      onBack,
      onHomeClick,
      onQuickActionSelected,
      progress,
      quickActions,
      quickDialog,
      showLogo,
      steps,
      title,
      showManagerSwitcher,
    } = this.props
    const { actionsAvailable, actionsVisible } = this.state

    return (
      <Fragment>
        <div className={classnames('ds-sidebar__header', { 'ds-sidebar__header--website-manager': showManagerSwitcher })}>
          {!showManagerSwitcher && (
            <div className="ds-sidebar__header-back">
              {showLogo && <B12Logo color="#6548c7" width={46} height={20} viewBox="0 0 200 80" className="ds-sidebar__header-logo" />}

              {!showLogo && backButton && onBack && (
                <SidebarBackButton
                  text={backButtonText}
                  hideText={isScrollingDown}
                  onClick={onBack}
                />
              )}

              {!showLogo && !backButton && leftAction}

              {homeButton && (
                <React.Fragment>
                  <div className="ds-sidebar__header-divider" />
                  {!isScrollingDown && (
                    <Button
                      small
                      className="ds-sidebar__header-home"
                      icon={<B12Logo width={30} height={20} color="#84839c" viewBox="0 0 200 80" />}
                      onClick={onHomeClick}
                    />
                  )}
                </React.Fragment>
              )}

              {isScrollingDown && <div>{title}</div>}
            </div>
          )}

          {/* Show actions dropdown under B12 logo if AI website manager is available */}
          {showManagerSwitcher && (
            <ActionDropdown
              ref={this.actionsRef}
              icon={<B12Logo color="#6548c7" width={46} height={20} viewBox="0 0 200 80" className="ds-sidebar__header-logo" />}
              onClick={this.onAction}
              actionsAvailable={actionsAvailable}
              actionsVisible={actionsVisible}
              quickDialog={quickDialog}
              quickActions={quickActions}
              dropdownMenuLabel={dropdownMenuLabel}
              onQuickActionSelected={onQuickActionSelected}
              isLogoDropDown
            />)
          }

          {!children && steps && (
            <div className="ds-sidebar__header-title">
              {title}
              <div className="ds-sidebar__header-steps">{steps}</div>
            </div>
          )}

          {children}

          {!showManagerSwitcher && (
            <ActionDropdown
              ref={this.actionsRef}
              icon={actionIcon}
              onClick={this.onAction}
              actionsAvailable={actionsAvailable}
              actionsVisible={actionsVisible}
              quickDialog={quickDialog}
              quickActions={quickActions}
              dropdownMenuLabel={dropdownMenuLabel}
              onQuickActionSelected={onQuickActionSelected}
            />)
          }

          <div
            className="ds-sidebar__header-progress"
            style={{width: `${progress}%`}}
          />
        </div>
        {tabbedNavigation && <div className="ds-sidebar__tabbed-nav">
          {tabbedNavigation}
        </div>}
      </Fragment>
    )
  }
}

SidebarHeader.defaultProps = {
  title: '',
  dropdownMenuLabel: '',
  onBack: () => {},
  backButton: false,
  onAction: () => {},
  actionIcon: null,
  homeButton: false,
  isScrollingDown: false,
  progress: 0,
  quickActions: [],
  showLogo: false,
  quickDialog: null,
  tabbedNavigation: null,
  showManagerSwitcher: false,
}

SidebarHeader.propTypes = {
  backButtonText: PropTypes.string,
  children: PropTypes.node,
  dropdownMenuLabel: PropTypes.string,
  title: PropTypes.string,
  steps: PropTypes.string,
  onBack: PropTypes.func,
  onHomeClick: PropTypes.func,
  backButton: PropTypes.bool,
  homeButton: PropTypes.bool,
  isScrollingDown: PropTypes.bool,
  onAction: PropTypes.func,
  actionIcon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  leftAction: PropTypes.element,
  progress: PropTypes.number,
  quickActions: PropTypes.array,
  onQuickActionSelected: PropTypes.func,
  showLogo: PropTypes.bool,
  quickDialog: PropTypes.element,
  tabbedNavigation: PropTypes.element,
  showManagerSwitcher: PropTypes.bool,
}

export default SidebarHeader
