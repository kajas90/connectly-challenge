import { useLayoutEffect } from 'react'

export function Widget() {
  useLayoutEffect((e) => {
    console.log(e)
    return () => {}
  }, [])

  return <div></div>
}
