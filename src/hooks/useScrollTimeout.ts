import { useLayoutEffect, useState, useCallback, useEffect } from 'react'

export function useScrollTimout(delay: number) {
  const [isSmall, setIsSmall] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const listener = useCallback(() => {
    if (window.scrollY > 0) {
      setIsScrolling(true)
    }
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  useEffect(() => {
    if (isScrolling) {
      const timeout = window.setTimeout(() => {
        setIsSmall(true)
      }, delay)
      return () => window.clearTimeout(timeout)
    }
  }, [isScrolling, delay])

  return isSmall
}
