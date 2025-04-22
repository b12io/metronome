import React, { useState, useRef, useCallback, useEffect } from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import Popover from '../../components/layout/popover/Popover.es6.js'
import Radio from '../../components/form/radio/Radio.es6.js'
import SwitchTabPicker from '../../components/form/switch-tab-picker/SwitchTabPicker.es6.js'
import MobileOptionsPopover from '../../components/layout/popover/MobileOptionsPopover.es6.js'

import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'
import {
  PromptInput, PromptInputTextarea, PromptInputActions,
  PromptInputSelectors, PromptInputCommands
} from '../../components/form/prompt-input'
import ColorSwatchPickerDesktop from '../../components/form/color-swatch-picker/ColorSwatchPickerDesktop.es6.js'

import {
  ArrowUp, Microphone, Website, EditColor,
  AiAssist, AiImage, Stop, ThreeDots
} from '../../components/Icons.es6.js'

import useAutoResizeTextarea from '../../components/lib/useAutoResizeTextarea.js'
import useTypingSimulation, { TypingStatus } from '../../components/lib/useTypingSimulation.js'
import usePopover from '../../components/lib/usePopover.es6.js'

import { mockTypingPrompt, mockImprovedPrompt, mockColorOptions, mockWebsiteStyleOptions, imageStyleTabs, mockImageStyleOptions } from './demo-data/promptInputMockData.js'

const RangeSliderProps = [
  {
    property: 'align',
    value: 'left | center | right',
    defaultValue: 'left',
    description: 'Content alignment'
  },
  {
    property: 'className',
    value: 'string | Object',
    defaultValue: '-',
    description: 'Apply classes if needed'
  }
]

export default function PromptInputPage () {
  const [message, setMessage ] = useState('')
  const [selectedWebsiteStyle, setSelectedWebsiteStyle] = useState(mockWebsiteStyleOptions[0].value)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedImageStyle, setSelectedImageStyle] = useState('')
  const [selectedImageStyleTab, setSelectedImageStyleTab] = useState(0)
  const [canTriggerSend, setCanTriggerSend] = useState(true)
  const [isEnhancingPrompt, setIsEnhancingPrompt] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isTypingFromRecording, setIsTypingFromRecording] = useState(false)

  const submitTimerRef = useRef(null)
  const enhancePromptTimerRef = useRef(null)
  const recordingTimerRef = useRef(null)

  const handleTypingStatusChange = useCallback(
    (status) => {
      if (status === TypingStatus.COMPLETED) {
        setIsSubmitting(false)

        if (isTypingFromRecording) {
          setIsRecording(false)
          setIsTypingFromRecording(false)
        }

        setTimeout(() => {
          setCanTriggerSend(true)
        }, 100)
      }
    },
    [isTypingFromRecording],
  )

  const { textareaRef, resizeTextarea } = useAutoResizeTextarea(message)

  const {
    isTyping: isTypingPrompt,
    typedText,
    startTyping,
    stopTyping,
    resetTyping,
    status: typingStatus,
  } = useTypingSimulation(handleTypingStatusChange)

  const isTextareaEmpty = message.trim() === ''
  const isProcessing = isSubmitting || (isTypingPrompt && !isTypingFromRecording)

  const isSubmitButtonActive = !isTextareaEmpty && (canTriggerSend || isSubmitting || isTypingPrompt) && !(isRecording || isTypingFromRecording)

  const { activePopover, togglePopover } = usePopover(isProcessing || isRecording)

  const mobileOptions = [
    {
      id: 'website-style',
      label: 'Website style',
      icon: <Website width={12} height={12} color="#84839c" />,
      itemOptions: mockWebsiteStyleOptions,
      disabled: isProcessing || isRecording,
    },
    {
      id: 'color',
      label: 'Color',
      icon: <EditColor width={14} height={14} color="#84839c" />,
      itemOptions: [{ value: 'none', color: null, label: 'None' }, ...mockColorOptions],
      disabled: isProcessing || isRecording,
    },
    {
      id: 'image-style',
      label: 'Image style',
      icon: <AiImage width={14} height={14} viewBox='0 0 14 12' color="#84839c" />,
      itemOptions: mockImageStyleOptions,
      disabled: isProcessing || isRecording,
    },
    {
      id: 'enhance-prompt',
      label: 'Enhance prompt',
      icon: <AiAssist width={14} height={14} color="#84839c" />,
      disabled: isTextareaEmpty || isProcessing || isRecording,
      isActive: !isTextareaEmpty,
      isEnhancing: isEnhancingPrompt || (isTypingPrompt && !isTypingFromRecording),
    }
  ]

  useEffect(() => {
    if (isTypingPrompt && typedText) {
      setMessage(typedText)
    }
  }, [isTypingPrompt, typedText])

  useEffect(() => {
    if (!isTypingPrompt) {
      setCanTriggerSend(true)
    }
  }, [message, isTypingPrompt])

  useEffect(() => {
    if (isRecording && typingStatus === TypingStatus.COMPLETED && isTypingFromRecording) {
      setIsRecording(false)
      setIsTypingFromRecording(false)
    }
  }, [isRecording, typingStatus, isTypingFromRecording])

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) {
        clearTimeout(submitTimerRef.current)
        submitTimerRef.current = null
      }

      if (enhancePromptTimerRef.current) {
        clearTimeout(enhancePromptTimerRef.current)
        enhancePromptTimerRef.current = null
      }

      if (recordingTimerRef.current) {
        clearTimeout(recordingTimerRef.current)
        recordingTimerRef.current = null
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const newMessage = e.target.value
    setMessage(newMessage)
  }

  const handleWebsiteStyleChange = (style) => {
    if (isProcessing || isRecording) return
    setSelectedWebsiteStyle(style)
  }

  const handleColorChange = (color) => {
    if (isProcessing || isRecording) return

    setSelectedColor(color)
  }

  const handleImageStyleChange = (styleId) => {
    if (isProcessing || isRecording) return
    setSelectedImageStyle(styleId)
  }

  const handleImageTabSwitch = (tabId) => {
    setSelectedImageStyleTab(tabId)
  }

  // No need to add a progress state - the CSS animation handles the visual progress

  const handleEnhancePrompt = () => {
    if (isProcessing || isRecording) return

    resetTyping()
    setCanTriggerSend(false)
    setIsEnhancingPrompt(true)
    setIsSubmitting(true)

    // The duration of the CSS animation (process-circle) should match this timeout
    const processDuration = 1000

    // Update the CSS variable for animation duration dynamically to match the process time
    document.documentElement.style.setProperty('--processing-duration', `${processDuration}ms`)

    enhancePromptTimerRef.current = window.setTimeout(() => {
      setIsEnhancingPrompt(false)
      setIsSubmitting(false)
      setMessage(mockImprovedPrompt)

      if (textareaRef.current) {
        textareaRef.current.classList.add('text-fade-in')

        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.classList.remove('text-fade-in')
          }
        }, 500)
      }

      enhancePromptTimerRef.current = null
    }, processDuration)
  }

  const handleMicrophoneClick = () => {
    if (isRecording || isTypingFromRecording) {
      if (isTypingPrompt) {
        stopTyping(false)
      }

      if (recordingTimerRef.current) {
        clearTimeout(recordingTimerRef.current)
        recordingTimerRef.current = null
      }

      setIsRecording(false)
      setIsTypingFromRecording(false)
    } else {
      setMessage('')

      resetTyping()

      setIsRecording(true)
      setCanTriggerSend(false)

      recordingTimerRef.current = window.setTimeout(() => {
        setIsTypingFromRecording(true)
        startTyping(mockTypingPrompt)

        recordingTimerRef.current = null
      }, 500)
    }
  }

  const handleSubmitButtonClick = () => {
    if (isSubmitting || isTypingPrompt) {
      setIsSubmitting(false)

      if (submitTimerRef.current) {
        clearTimeout(submitTimerRef.current)
        submitTimerRef.current = null
      }

      if (isEnhancingPrompt) {
        setIsEnhancingPrompt(false)

        if (enhancePromptTimerRef.current) {
          clearTimeout(enhancePromptTimerRef.current)
          enhancePromptTimerRef.current = null
        }
      }

      if (isTypingPrompt) {
        const completeText = stopTyping(true)
        if (completeText) {
          setMessage(completeText)
          // Schedule a resize after the state update
          setTimeout(resizeTextarea, 50)
        }
      }

      setCanTriggerSend(true)
    } else if (canTriggerSend) {
      setIsSubmitting(true)

      submitTimerRef.current = window.setTimeout(() => {
        setIsSubmitting(false)
        submitTimerRef.current = null
      }, 3000)
    }
  }

  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>PromptInput</h1>
        <p>An input field that allows users to enter and submit text to an AI model.</p>
        <MetaData
          importFrom="import PromptInput from '@b12/metronome/components/form/prompt-input/PromptInput.es6.js'"
          flow="Yes"
          tests="No"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
        </div>

        <CodeExample code={
          `<PromptInput>
            <PromptInputTextarea
              placeholder="Share your business name and a description of your website, or start with an example below..."
              rows={3}
              textareaRef={ref}
              value={message}
              onChange={handle}
              disabled={condition}
            />
            <PromptInputActions>
            <PromptInputSelectors>
              <Popover
                isOpen={condition}
                onToggle={() => togglePopover('popoverName')}
                isSelected={condition}
                trigger={
                  <Button
                    className="desktop-only"
                    roundedRectangle
                    disabled={condition}
                    iconWithLabel
                    icon={<Website width={12} height={12} />}
                    label="Website style"
                  />
                }
              >
                {mockWebsiteStyleOptions.map((option) => (
                  <Radio
                    key={option.value}
                    name="websiteStyle"
                    label={option.label}
                    value={option.value}
                    checked={selectedWebsiteStyle === option.value}
                    onChange={() => handleWebsiteStyleChange(option.value)}
                  />
                ))}
              </Popover>
            </PromptInputSelectors>
            <PromptInputCommands>
              <Button
                round
                disabled={isProcessing && !isTypingFromRecording}
                recording={isRecording}
                onClick={handleMicrophoneClick}
                icon={<Microphone width={14} height={14} viewBox="0 0 11 13" />}
              />
              <Button
                round
                disabled={!isSubmitButtonActive || isRecording || isTypingFromRecording}
                loading={isSubmitting && !isTypingPrompt }
                highlighted={isSubmitButtonActive}
                icon={ isSubmitting ? <Stop width={10} height={10} viewBox="0 0 10 10" /> :<ArrowUp width={14} height={14} viewBox="0 0 12 14" />}
                onClick={handleSubmitButtonClick}
              />
            </PromptInputCommands>
            </PromptInputActions>
          </PromptInput>`
        }>
          <PromptInput>
            <PromptInputTextarea
              placeholder="Share your business name and a description of your website, or start with an example below..."
              rows={3}
              textareaRef={textareaRef}
              value={message}
              onChange={handleInputChange}
              disabled={isTypingPrompt || isRecording || isSubmitting }
            />
            <PromptInputActions>
            <PromptInputSelectors>
              <Popover
                isOpen={activePopover === 'websiteStyle'}
                onToggle={() => togglePopover('websiteStyle')}
                isSelected={selectedWebsiteStyle !== mockWebsiteStyleOptions[0].value}
                trigger={
                  <Button
                    className="desktop-only"
                    roundedRectangle
                    disabled={isProcessing || isRecording}
                    iconWithLabel
                    icon={<Website width={12} height={12} color="#84839c" />}
                    label="Website style"
                    selected={activePopover === 'websiteStyle'}
                  />
                }
              >
                {mockWebsiteStyleOptions.map((option) => (
                  <Radio
                    key={option.value}
                    name="websiteStyle"
                    label={option.label}
                    value={option.value}
                    checked={selectedWebsiteStyle === option.value}
                    onChange={() => handleWebsiteStyleChange(option.value)}
                  />
                ))}
              </Popover>
              <Popover
                isOpen={activePopover === 'color'}
                onToggle={() => togglePopover('color')}
                isSelected={(selectedColor !== null && selectedColor !== 'none')}
                trigger={
                  <Button
                    className="desktop-only"
                    roundedRectangle
                    disabled={isProcessing || isRecording}
                    iconWithLabel
                    icon={<EditColor width={14} height={14} color="#84839c"/>}
                    label="Color" viewBox="0 0 14 14"
                    selected={activePopover === 'color'}
                  />
                }
              >
                <ColorSwatchPickerDesktop
                  colors={mockColorOptions}
                  selectedColor={selectedColor}
                  onChange={handleColorChange}
                />
              </Popover>
              <Popover
                isOpen={activePopover === 'imageStyle'}
                onToggle={() => togglePopover('imageStyle')}
                isSelected={selectedImageStyle !== ''}
                trigger={
                  <Button
                    className="desktop-only"
                    roundedRectangle
                    disabled={isProcessing || isRecording}
                    iconWithLabel
                    icon={<AiImage width={14} height={14} viewBox='0 0 14 12' color="#84839c" />}
                    label="Image style"
                    selected={activePopover === 'imageStyle'}
                  />
                }
              >
                <SwitchTabPicker
                  tabs={imageStyleTabs}
                  options={mockImageStyleOptions}
                  selectedOptionId={selectedImageStyle}
                  selectedTabId={selectedImageStyleTab}
                  onTabChange={handleImageTabSwitch}
                  onOptionChange={handleImageStyleChange}
                />
              </Popover>
              <Button
                roundedRectangle
                disabled={isTextareaEmpty && (isProcessing || isRecording || !isEnhancingPrompt)}
                highlighted={!isTextareaEmpty}
                selected={isEnhancingPrompt || (isTypingPrompt && !isTypingFromRecording)}
                onClick={handleEnhancePrompt}
                iconWithLabel
                icon={<AiAssist width={14} height={14} color="#84839c" />}
                label="Enhance Prompt"
                className="desktop-only"
              />
              <Popover
                isOpen={activePopover === 'mobileOptions'}
                onToggle={() => togglePopover('mobileOptions')}
                className="ds-popover-container--mobile-options"
                isSelected={selectedWebsiteStyle !== mockWebsiteStyleOptions[0].value || selectedImageStyle !== '' || (selectedColor !== null && selectedColor !== 'none')}
                trigger={
                  <Button
                    className="mobile-only"
                    roundedRectangle
                    disabled={isProcessing || isRecording}
                    icon={<ThreeDots viewBox="0 0 23 7" width="16" height="5" color="#84839c" />}
                  />
                }
              >
                <MobileOptionsPopover
                  options={mobileOptions}
                  selectedWebsiteStyle={selectedWebsiteStyle}
                  onWebsiteStyleChange={handleWebsiteStyleChange}
                  selectedColor={selectedColor}
                  onColorChange={handleColorChange}
                  imageStyleTabs={imageStyleTabs}
                  selectedImageStyle={selectedImageStyle}
                  selectedTabId={selectedImageStyleTab}
                  onImageStyleTabChange={handleImageTabSwitch}
                  onImageStyleChange={handleImageStyleChange}
                  onEnhancePrompt={handleEnhancePrompt}
                  onClose={() => togglePopover('mobileOptions')}
                />
              </Popover>
            </PromptInputSelectors>
            <PromptInputCommands>
              <Button
                round
                disabled={isProcessing && !isTypingFromRecording}
                recording={isRecording}
                onClick={handleMicrophoneClick}
                icon={<Microphone width={14} height={14} viewBox="0 0 11 13" color="#ffffff" />}
              />
              <Button
                round
                disabled={!isSubmitButtonActive || isRecording || isTypingFromRecording}
                loading={isSubmitting && !isEnhancingPrompt}
                highlighted={isSubmitButtonActive}
                disabledStyle="dark"
                processing={isEnhancingPrompt}
                icon={ isSubmitting ? <Stop width={10} height={10} viewBox="0 0 10 10" color="#ffffff" /> : <ArrowUp width={14} height={14} viewBox="0 0 12 14" color="#ffffff" />}
                onClick={handleSubmitButtonClick}
              />
            </PromptInputCommands>
            </PromptInputActions>
          </PromptInput>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          {RangeSliderProps.map(prop => (
            <MetaDataPropsItem
              key={prop.property}
              property={prop.property}
              value={prop.value}
              defaultValue={prop.defaultValue}
              description={prop.description}
            />
          ))}
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}
