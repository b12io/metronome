import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

function TextRevealOverlay({
  text,
  isRevealing,
  lastParagraphIndex,
  className,
  textareaRef,
  onAnimationComplete
}) {
  const [paragraphs, setParagraphs] = useState([])
  const [isAnimatingLastParagraph, setIsAnimatingLastParagraph] = useState(false)
  const overlayRef = useRef(null)

  // Split text into paragraphs whenever text changes
  useEffect(() => {
    if (text) {
      const split = text.split(/\n{2,}|\r\n{2,}/)
                         .map(p => p.trim())
                         .filter(p => p.length > 0)
      setParagraphs(split)
    } else {
      setParagraphs([])
    }
  }, [text])

  useEffect(() => {
    if (isAnimatingLastParagraph && lastParagraphIndex === paragraphs.length - 1) {
      const timer = setTimeout(() => {
        setIsAnimatingLastParagraph(false)
        if (onAnimationComplete) {
          onAnimationComplete()
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isAnimatingLastParagraph, lastParagraphIndex, paragraphs.length, onAnimationComplete])


  useEffect(() => {
    if (lastParagraphIndex === paragraphs.length - 1 && paragraphs.length > 0) {
      setIsAnimatingLastParagraph(true)
    }
  }, [lastParagraphIndex, paragraphs.length])


  useEffect(() => {
    if (!textareaRef || !textareaRef.current || !overlayRef.current || !isRevealing) return

    const textarea = textareaRef.current
    const overlay = overlayRef.current

    // Function to update dimensions whenever they change
    const updateDimensions = () => {
      // Position relative to the prompt-input container
      const promptInput = textarea.closest('.ds-prompt-input')
      let paddingLeft = '16px'
      let paddingTop = '16px'

      if (promptInput) {
        const promptStyles = window.getComputedStyle(promptInput)
        if (promptStyles.paddingLeft) {
          paddingLeft = promptStyles.paddingLeft
        }
        if (promptStyles.paddingTop) {
          paddingTop = promptStyles.paddingTop
        }
      }

      // Get current styles
      const textareaStyles = window.getComputedStyle(textarea)

      // Apply exact dimensions and styling
      overlay.style.width = textareaStyles.width
      overlay.style.fontSize = textareaStyles.fontSize
      overlay.style.lineHeight = textareaStyles.lineHeight
      overlay.style.fontFamily = textareaStyles.fontFamily
      overlay.style.fontWeight = textareaStyles.fontWeight
      overlay.style.color = textareaStyles.color

      // Set exact position
      overlay.style.position = 'absolute'
      overlay.style.top = paddingTop
      overlay.style.left = paddingLeft
      overlay.style.width = 'calc(100% - ' + (parseInt(paddingLeft) * 2) + 'px)'

      // Set max-height to match textarea max-height
      overlay.style.maxHeight = textareaStyles.maxHeight

      // Match the actual height if it's calculated
      if (textarea.style.height) {
        overlay.style.height = textarea.style.height
      }
    }

    // Initial update
    updateDimensions()

    // Set up mutation observer to detect height changes
    let observer = null
    if (typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'style') {
            updateDimensions()
          }
        })
      })

      observer.observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      })
    }

    const syncScroll = () => {
      if (overlayRef.current && isRevealing) {
        overlayRef.current.scrollTop = textarea.scrollTop
      }
    }

    textarea.addEventListener('scroll', syncScroll)

    window.addEventListener('resize', updateDimensions)

    syncScroll()

    return () => {
      textarea.removeEventListener('scroll', syncScroll)
      window.removeEventListener('resize', updateDimensions)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [textareaRef, isRevealing, paragraphs])

  if (!isRevealing || paragraphs.length === 0) {
    return null
  }

  return (
    <div
      ref={overlayRef}
      className={`ds-prompt-input__text-reveal-overlay ${className || ''}`}
      aria-hidden="true"
    >
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`ds-prompt-input__text-reveal-paragraph ${
            index === lastParagraphIndex ? 'ds-prompt-input__text-reveal-paragraph--animating' : ''
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

TextRevealOverlay.propTypes = {
  text: PropTypes.string,
  isRevealing: PropTypes.bool,
  lastParagraphIndex: PropTypes.number,
  className: PropTypes.string,
  textareaRef: PropTypes.object,
  onAnimationComplete: PropTypes.func
}

TextRevealOverlay.defaultProps = {
  text: '',
  isRevealing: false,
  lastParagraphIndex: -1,
  className: '',
  textareaRef: null,
  onAnimationComplete: null
}

export default TextRevealOverlay
