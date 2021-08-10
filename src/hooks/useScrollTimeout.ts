import { useLayoutEffect, useState, useCallback, useEffect } from 'react'

export function useScrollTimout(delay: number) {
  const [isSmall, setIsSmall] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const listener = useCallback(() => {
    setIsScrolling(true)
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsSmall(true)
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [isScrolling, delay])

  return isSmall
}
