import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Switch from '../switch/Switch.es6'
import Button from '../button/Button.es6'

function SwitchTabPicker({
    tabs, options, selectedTabId, selectedOptionId,
    onTabChange, onOptionChange, className
  }) {

  const renderTabContent = (selectedTabId) => {
    const filteredOptions = options.filter((option) => option.category === tabs[selectedTabId].id)

    return(
      <div className="switch-tab-picker__content">
        <div className="switch-tab-picker__options">
          {filteredOptions.map((option) => {
            const IconComponent = option.icon

            return (
              <div
                key={option.id}
                className={classnames(
                  'switch-tab-picker__option',
                  {
                    'switch-tab-picker__option--selected': selectedOptionId === option.id
                  }
                )}
                onClick={() => onOptionChange(option.id)}
              >
                <div className="switch-tab-picker__option-thumbnail">
                  <IconComponent width="16" height="16" />
                </div>
                <div className="switch-tab-picker__option-label">{option.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div
      className={classnames('switch-tab-picker', className)}
    >
      <Switch block selected={selectedTabId} onChange={onTabChange}>
        {
          tabs.map((tab) => (
            <Button
              key={tab.id}
              label={tab.label}
            />
          ))
        }
      </Switch>
      {
        renderTabContent(selectedTabId)
      }
    </div>
  )
}

SwitchTabPicker.propTypes = {
  /**
   * Array of tab objects to render in the tab picker
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string
    })
  ),

  /**
   * Array of option objects for the tab content
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      category: PropTypes.string,
      icon: PropTypes.elementType
    })
  ),

  /**
   * ID or index of the currently selected tab
   */
  selectedTabId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * ID of the currently selected option
   */
  selectedOptionId: PropTypes.string,

  /**
   * Callback when a tab is changed
   */
  onTabChange: PropTypes.func,

  /**
   * Callback when an option is selected
   */
  onOptionChange: PropTypes.func,

  /**
   * Additional CSS classes
   */
  className: PropTypes.string
}

SwitchTabPicker.defaultProps = {
  tabs: [],
  options: [],
  selectedTabId: 0,
  selectedOptionId: '',
  onTabChange: () => {},
  onOptionChange: () => {},
  className: ''
}

export default SwitchTabPicker
