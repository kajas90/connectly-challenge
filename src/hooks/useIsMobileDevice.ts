import { useEffect, useState } from 'react'

const isAndroid = (userAgent: string): boolean =>
  Boolean(userAgent.match(/Android/i))
const isIos = (userAgent: string): boolean =>
  Boolean(userAgent.match(/iPhone|iPad|iPod/i))

export function useIsMobileDevice() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
    setIsMobile(Boolean(isAndroid(userAgent) || isIos(userAgent)))
  }, [])

  return isMobile
}
