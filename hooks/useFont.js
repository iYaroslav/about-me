import { useEffect } from 'react'

export default (href) => {
  useEffect(() => {
    const el = document.createElement('link')
    el.href = href
    el.setAttribute('async', '')
    el.setAttribute('rel', 'stylesheet')
    el.setAttribute('type', 'text/css')

    document.head.appendChild(el)
    return () => document.head.removeChild(el)
  }, [href])

  return undefined
}
