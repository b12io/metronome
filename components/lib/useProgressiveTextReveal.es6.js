
import { useState, useEffect, useRef, useCallback } from 'react'

function useProgressiveTextReveal({
  onComplete = () => {},
  paragraphDelay = 400,
  onCompleteTimeout = 600,
  onParagraphAdded = () => {}
} = {}) {
  const [isRevealing, setIsRevealing] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [newParagraphAdded, setNewParagraphAdded] = useState(false)
  const [lastParagraphIndex, setLastParagraphIndex] = useState(-1)
  const timeoutsRef = useRef([])
  const paragraphsRef = useRef([])
  const currentIndexRef = useRef(0)

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId))
    timeoutsRef.current = []
  }, [])

  // Reset the reveal state
  const resetTextReveal = useCallback(() => {
    clearAllTimeouts()
    setCurrentText('')
    setIsRevealing(false)
    setNewParagraphAdded(false)
    setLastParagraphIndex(-1)
    paragraphsRef.current = []
    currentIndexRef.current = 0
  }, [clearAllTimeouts])

  // This function adds a single paragraph with animation trigger
  const addNextParagraph = useCallback(() => {
    if (currentIndexRef.current >= paragraphsRef.current.length) {

      // Allow time for the final animation to complete before signaling done
      const finalTimeout = setTimeout(() => {
        onComplete(currentText)
      }, onCompleteTimeout)

      timeoutsRef.current.push(finalTimeout)
      return
    }

    // First paragraph or append with double newline
    const paragraphToAdd = paragraphsRef.current[currentIndexRef.current]

    if (currentIndexRef.current === 0) {
      setCurrentText(paragraphToAdd)
    } else {
      setCurrentText(prev => `${prev}\n\n${paragraphToAdd}`)
    }

    // Track the index of the paragraph we just added
    setLastParagraphIndex(currentIndexRef.current)

    // Signal that a new paragraph was added (for animation)
    setNewParagraphAdded(true)

    // Call the paragraph added callback
    if (onParagraphAdded) {
      onParagraphAdded(currentIndexRef.current)
    }

    // Reset animation flag after animation completes
    const resetTimeout = setTimeout(() => {
      setNewParagraphAdded(false)
    }, 500)

    timeoutsRef.current.push(resetTimeout)


    currentIndexRef.current++

    // Schedule next paragraph if there are more
    if (currentIndexRef.current < paragraphsRef.current.length) {
      const nextTimeout = setTimeout(addNextParagraph, paragraphDelay)
      timeoutsRef.current.push(nextTimeout)
    }
  }, [currentText, onComplete, onParagraphAdded, paragraphDelay])

  // Start revealing text paragraph by paragraph
  const revealText = useCallback((text) => {
    if (!text) return

    resetTextReveal()
    setIsRevealing(true)

    // Split text into paragraphs (handles different line break formats)
    const paragraphs = text.split(/\n{2,}|\r\n{2,}/)
                          .map(p => p.trim())
                          .filter(p => p.length > 0)

    if (paragraphs.length === 0) {
      setIsRevealing(false)
      return
    }

    paragraphsRef.current = paragraphs
    currentIndexRef.current = 0


    addNextParagraph()

  }, [resetTextReveal, addNextParagraph])


  useEffect(() => {
    return () => clearAllTimeouts()
  }, [clearAllTimeouts])

  return {
    revealText,
    resetTextReveal,
    currentText,
    isRevealing,
    newParagraphAdded,
    lastParagraphIndex
  }
}

export default useProgressiveTextReveal
