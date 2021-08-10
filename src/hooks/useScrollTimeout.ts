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
    // we want to avoid scroll to position after page reload
    const timeout = setTimeout(() => {
      window.addEventListener('scroll', listener)
    }, 10)
    return () => {
      window.removeEventListener('scroll', listener)
      window.clearTimeout(timeout)
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
