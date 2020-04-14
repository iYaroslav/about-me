import { useMemo } from 'react'

const user = 'iyaroslav'
const folder = 'yaroslav.uz'
const defFlags = []
const v = 'v1586888315'

function url(src, size, ...flags) {
  const data = [`w_${size}`, ...flags].join(',')
  return `https://res.cloudinary.com/${user}/image/upload/${data}/${v}/${folder}/${src}`
}

export default ({
  alt, src,
  ratio = '16:9',
  size = '1.0',
  flags = defFlags,
  ...props
}) => {
  const srcSet = useMemo(() => {
    if (size === '1.0') return undefined

    return [
      ['', size], ['1.5x', size * 1.5], ['2x', size * 2], ['3x', size * 3]
    ].map(([scale, size]) => {
      return [url(src, size, 'f_auto',`ar_${ratio}`, ...flags), scale].join(' ')
    }).join(',')
  }, [size])

  return <img
    alt={alt}
    srcSet={srcSet}
    src={url(src, size, 'f_auto',`ar_${ratio}`, ...flags)}
    {...props}
  />
}
