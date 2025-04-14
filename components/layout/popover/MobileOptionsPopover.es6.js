import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronRight, Back } from '../../Icons.es6'
import Radio from '../../form/radio/Radio.es6'
import SwitchTabPicker from '../../form/switch-tab-picker/SwitchTabPicker.es6'

const MobileOptionsPopover = ({
  options,
  selectedWebsiteStyle,
  onWebsiteStyleChange,
  selectedColor,
  onColorChange,
  imageStyleTabs,
  selectedTabId,
  selectedImageStyle,
  onImageStyleTabChange,
  onImageStyleChange,
  onEnhancePrompt,
  onClose,
}) => {
  const [activeOptionId, setActiveOptionId] = useState(null)

  const handleOptionClick = (optionId) => {
    if (optionId === 'enhance-prompt') {
      if (onClose) {
        onClose()
      }

      onEnhancePrompt()

      return
    }
    setActiveOptionId(optionId)
  }
  const handleBackClick = () => {
    setActiveOptionId(null)
  }

  const renderOptionsList = () => (
    <div className="mobile-options-popover__list">
      {options.map((option) => (
        <div
          key={option.id}
          className={`mobile-options-popover__list-item ${
            option.disabled ? 'mobile-options-popover__list-item--disabled' : ''
          }`}
          onClick={() => !option.disabled && handleOptionClick(option.id)}
        >
          <div className="mobile-options-popover__list-item-content">
            <div className="mobile-options-popover__list-item-icon">{option.icon}</div>
            <span className="mobile-options-popover__list-item-label">{option.label}</span>
          </div>
          <ChevronRight className="mobile-options-popover__list-item-chevron" width="6" height="10" />
        </div>
      ))}
    </div>
  )

  const renderOptionContent = (optionId) => {
    const option = options.find((opt) => opt.id === optionId)

    if (!option) return null

    return (
      <div className="mobile-options-popover__content">
        <div className="mobile-options-popover__header">
          <button className="mobile-options-popover__back-button" onClick={handleBackClick}>
            <Back width="16" height="16" />
          </button>
          <div className="mobile-options-popover__title">{option.label}</div>
        </div>
        <div className="mobile-options-popover__body">
          {
            optionId === 'website-style' && (option.itemOptions.map((item) => (
              <Radio
                key={item.value}
                name={optionId}
                label={item.label}
                value={item.value}
                checked={selectedWebsiteStyle === item.value}
                onChange={onWebsiteStyleChange}
              />
            )))
          }
          {
            optionId === 'color' && (option.itemOptions.map((item) => (
              <Radio
                key={item.value}
                name={optionId}
                label={item.label}
                value={item.value}
                color={item.color}
                checked={selectedColor === item.value}
                onChange={onColorChange}
              />
            )))
          }
          {optionId === 'image-style' && (
            <SwitchTabPicker
              tabs={imageStyleTabs}
              options={option.itemOptions}
              selectedOptionId={selectedImageStyle}
              selectedTabId={selectedTabId}
              onTabChange={onImageStyleTabChange}
              onOptionChange={onImageStyleChange}
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mobile-options-popover">
      {
        activeOptionId ? renderOptionContent(activeOptionId) : renderOptionsList()
      }
    </div>
  )
}

MobileOptionsPopover.propTypes = {
  /**
   * Array of option objects to display in the popover (required)
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      itemOptions: PropTypes.array,
      disabled: PropTypes.bool
    })
  ).isRequired,
  /**
   * Currently selected website style
   */
  selectedWebsiteStyle: PropTypes.string,
  /**
   * Handler for website style change
   */
  onWebsiteStyleChange: PropTypes.func,
  /**
   * Currently selected color
   */
  selectedColor: PropTypes.string,
  /**
   * Handler for color change
   */
  onColorChange: PropTypes.func,
  /**
   * Array of tab objects for image style tabs
   */
  imageStyleTabs: PropTypes.array,
  /**
   * Index of the currently selected tab
   */
  selectedTabId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * ID of the currently selected image style
   */
  selectedImageStyle: PropTypes.string,
  /**
   * Handler for image style tab change
   */
  onImageStyleTabChange: PropTypes.func,
  /**
   * Handler for image style option change
   */
  onImageStyleChange: PropTypes.func,
  /**
   * Handler for enhance prompt button click
   */
  onEnhancePrompt: PropTypes.func,
  /**
   * Handler for closing the popover (required)
   */
  onClose: PropTypes.func.isRequired
}

MobileOptionsPopover.defaultProps = {
  selectedWebsiteStyle: '',
  onWebsiteStyleChange: () => {},
  selectedColor: null,
  onColorChange: () => {},
  imageStyleTabs: [],
  selectedTabId: 0,
  selectedImageStyle: '',
  onImageStyleTabChange: () => {},
  onImageStyleChange: () => {},
  onEnhancePrompt: () => {},
}

export default MobileOptionsPopover
