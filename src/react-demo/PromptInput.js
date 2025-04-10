import React, { useState, useRef, useCallback, useEffect } from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import Popover from '../../components/layout/popover/Popover.es6.js'
import Radio from '../../components/form/radio/Radio.es6.js'
import SwitchTabPicker from '../../components/form/switch-tab-picker/SwitchTabPicker.es6.js'

import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'
import {
  PromptInput, PromptInputTextarea, PromptInputActions,
  PromptInputSelectors, PromptInputCommands
} from '../../components/form/prompt-input'
import ColorSwatchPickerDesktop from '../../components/form/color-swatch-picker/ColorSwatchPickerDesktop.es6.js'

import {
  ArrowUp, Microphone, Website, EditColor,
  AiAssist, AiImage, Stop, Image as ImageIcon, Disabled
} from '../../components/Icons.es6.js'

import useAutoResizeTextarea from '../../components/lib/useAutoResizeTextarea.js'
import useTypingSimulation, { TypingStatus } from '../../components/lib/useTypingSimulation.js'
import usePopover from '../../components/lib/usePopover.es6.js'

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

// eslint-disable-next-line quotes
const mockTypingPrompt = `Little Steps Shoe Shop is a specialty store offering a wide range of high-quality, stylish, and comfortable footwear for kids of all ages`

const mockImprovedPrompt = `Business/Project Name:
Little Steps Shoe Shop

Description:
Little Steps Shoe Shop is a specialty store offering a wide range of high-quality, stylish, and comfortable footwear for kids of all ages.

Style:
- Playful and cheerful design
- Bright, kid-friendly colors like yellow, green, and orange
- Incorporates fun shapes and whimsical illustrations.

Content to include on website:
- About: Little Steps Shoe Shop has been dedicated to helping children take their first steps in comfort and style for over 15 years. We offer expert advice on proper shoe fitting and prioritize the health and happiness of little feet.
- Products: The shop offers sneakers, sandals, boots, dress shoes, and slippers, ensuring a variety of options to suit every occasion and preference.
- Services: Services include professional shoe fitting and personalized style consultations to help parents find the perfect footwear for their children.
- Customers often ask if we offer wide-size shoes for kids and whether shoes can be returned or exchanged if they don’t fit.
- Contact: The store is located at 123 Kiddo Lane, Playtown, USA. You can reach us by phone at (555) 123-4567 or via email at support@littlesteps.com.
- Schedule appointment: A form is available to book a personalized shoe fitting session. It includes fields for the parent’s name, child’s name, preferred date and time, and contact information.`

const mockColorOptions = [
  { value: 'gray', color: '#787878' },
  { value: 'black', color: '#000000' },
  { value: 'red', color: '#F50904' },
  { value: 'orange', color: '#F89A06' },
  { value: 'yellow', color: '#FEFF06' },
  { value: 'green', color: '#4AFF01' },
  { value: 'teal', color: '#53FFFF' },
  { value: 'blue', color: '#2024FB' },
  { value: 'pink', color: '#F703FF' },
  { value: 'purple', color: '#9900FF' },
]

const mockWebsiteStyleOptions = [
  { value: 'None', label: 'None' },
  { value: 'Bold', label: 'Bold' },
  { value: 'Calm', label: 'Calm' },
  { value: 'Classic', label: 'Classic' },
  { value: 'Clean', label: 'Clean' },
  { value: 'Elegant', label: 'Elegant' },
  { value: 'Futuristic', label: 'Futuristic' },
  { value: 'Sophisticated', label: 'Sophisticated' },
]

const imageStyleTabs = [
  { id: 'photography', label: 'Photography' },
  { id: 'illustration', label: 'Illustration' },
]

const mockImageStyleOptions = [
  { id: 'no-photography', label: 'No Photography', category: 'photography', icon: Disabled },
  { id: 'abstract-photo', label: 'Abstract', category: 'photography', icon: ImageIcon },
  { id: 'black-and-white', label: 'Black and white', category: 'photography', icon: ImageIcon },
  { id: 'cool', label: 'Cool', category: 'photography', icon: ImageIcon },
  { id: 'earthy', label: 'Earthy', category: 'photography', icon: ImageIcon },
  { id: 'grainy', label: 'Grainy', category: 'photography', icon: ImageIcon },
  { id: 'high-contrast', label: 'High-contrast', category: 'photography', icon: ImageIcon },
  { id: 'minimalist-photo', label: 'Minimalist', category: 'photography', icon: ImageIcon },
  { id: 'monochromatic', label: 'Monochromatic', category: 'photography', icon: ImageIcon },
  { id: 'moody', label: 'Moody', category: 'photography', icon: ImageIcon },
  { id: 'professional', label: 'Professional', category: 'photography', icon: ImageIcon },
  { id: 'sepia', label: 'Sepia', category: 'photography', icon: ImageIcon },
  { id: 'serene', label: 'Serene', category: 'photography', icon: ImageIcon },
  { id: 'vibrant', label: 'Vibrant', category: 'photography', icon: ImageIcon },
  { id: 'warm', label: 'Warm', category: 'photography', icon: ImageIcon },
  { id: 'no-illustration', label: 'No Illustration', category: 'illustration', icon: Disabled },
  { id: 'abstract-illust', label: 'Abstract', category: 'illustration', icon: ImageIcon },
  { id: 'acrylic', label: 'Acrylic', category: 'illustration', icon: ImageIcon },
  { id: 'anime-manga', label: 'Anime / Manga', category: 'illustration', icon: ImageIcon },
  { id: 'charcoal', label: 'Charcoal', category: 'illustration', icon: ImageIcon },
  { id: 'comic-cartoon', label: 'Comic / cartoon', category: 'illustration', icon: ImageIcon },
  { id: 'flat-vector', label: 'Flat vector', category: 'illustration', icon: ImageIcon },
  { id: 'geometric', label: 'Geometric', category: 'illustration', icon: ImageIcon },
  { id: 'ink', label: 'Ink', category: 'illustration', icon: ImageIcon },
  { id: 'line-art', label: 'Line art', category: 'illustration', icon: ImageIcon },
  { id: 'minimalist-illust', label: 'Minimalist', category: 'illustration', icon: ImageIcon },
  { id: 'pencil', label: 'Pencil', category: 'illustration', icon: ImageIcon },
  { id: 'realism', label: 'Realism', category: 'illustration', icon: ImageIcon },
  { id: 'surreal', label: 'Surreal', category: 'illustration', icon: ImageIcon },
  { id: 'watercolor', label: 'Watercolor', category: 'illustration', icon: ImageIcon },
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

  const handleEnhancePrompt = () => {
    if (isProcessing || isRecording) return

    resetTyping()

    setCanTriggerSend(false)

    setIsEnhancingPrompt(true)
    setIsSubmitting(true)

    enhancePromptTimerRef.current = window.setTimeout(() => {
      setIsEnhancingPrompt(false)
      startTyping(mockImprovedPrompt)

      enhancePromptTimerRef.current = null
    }, 1000)
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
          `<SimpleCard className="customize-classname" align="center">
            Any content
          </SimpleCard>`
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
                    icon={<Website width={14} height={14} />}
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
              <Popover
                isOpen={activePopover === 'color'}
                onToggle={() => togglePopover('color')}
                isSelected={selectedColor !== null}
                trigger={
                  <Button
                    className="desktop-only"
                    roundedRectangle
                    disabled={isProcessing || isRecording}
                    iconWithLabel
                    icon={<EditColor width={14} height={14} />}
                    label="Color" viewBox="0 0 14 14"
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
                    icon={<AiImage width={14} height={14} viewBox='0 0 14 12' />}
                    label="Image style"
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
                icon={<AiAssist width={14} height={14} />}
                label="Enhance Prompt"
                className="desktop-only"
              />
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
