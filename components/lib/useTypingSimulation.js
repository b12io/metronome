import { useState, useEffect, useRef, useCallback } from 'react'

const ANIMATION_TIME = 2000 // Type text in 2 seconds

export const TypingStatus = {
  IDLE: 'idle',
  TYPING: 'typing',
  COMPLETED: 'completed'
}

function useTypingSimulation(onStatusChange) {
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullTextRef = useRef('')
  const charIndexRef = useRef(0)
  const intervalRef = useRef(null)
  const [status, setStatus] = useState(TypingStatus.IDLE)

  const updateStatus = useCallback(
    (newStatus) => {
      setStatus(newStatus)
      if (onStatusChange) onStatusChange(newStatus)
    },
    [onStatusChange],
  )

  const startTyping = useCallback(
    (text) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }

      fullTextRef.current = text

      setTypedText('')
      charIndexRef.current = 0

      setIsTyping(true)
      updateStatus(TypingStatus.TYPING)

      const intervalMs = ANIMATION_TIME / text.length

      intervalRef.current = window.setInterval(() => {
        charIndexRef.current++
        const partialText = text.substring(0, charIndexRef.current)
        setTypedText(partialText)

        if (charIndexRef.current >= fullTextRef.current.length) {
          clearInterval(intervalRef.current)
          setIsTyping(false)
          updateStatus(TypingStatus.COMPLETED)
        }
      }, intervalMs)

      return text
    },
    [updateStatus],
  )

  const stopTyping = useCallback(
    (showFullText = true) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }

      setIsTyping(false)
      updateStatus(TypingStatus.COMPLETED)

      if (showFullText && fullTextRef.current) {
        const completeText = fullTextRef.current
        setTypedText(completeText)
        return completeText
      }

      return typedText
    },
    [typedText, updateStatus],
  )

  const resetTyping = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    setIsTyping(false)
    setTypedText('')
    fullTextRef.current = ''
    charIndexRef.current = 0
    updateStatus(TypingStatus.IDLE)
  }, [updateStatus])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  return {
    isTyping,
    typedText,
    status,
    startTyping,
    stopTyping,
    resetTyping,
    TypingStatus
  }
}

export default useTypingSimulation
