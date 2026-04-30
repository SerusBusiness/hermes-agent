import { useCallback, useRef, useState } from 'react'

export function useStash() {
  const stashRef = useRef<string[]>([])
  const [stashCount, setStashCount] = useState(0)

  const pushStash = useCallback((text: string) => {
    if (!text) {
      return false
    }

    stashRef.current.push(text)
    setStashCount(stashRef.current.length)

    return true
  }, [])

  const popStash = useCallback(() => {
    const text = stashRef.current.pop()
    setStashCount(stashRef.current.length)

    return text ?? ''
  }, [])

  const peekStash = useCallback(() => stashRef.current[stashRef.current.length - 1] ?? '', [])

  const clearStash = useCallback(() => {
    stashRef.current = []
    setStashCount(0)
  }, [])

  return { clearStash, peekStash, popStash, pushStash, stashCount, stashRef }
}
