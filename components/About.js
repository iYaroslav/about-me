import { useMemo } from "react"
import getAge from "get-age"
import Article from "./Article"

export default () => {
  const age = useMemo(() => getAge('1991-12-19'), [])

  return <Article
    title='About Me'
    image='avatar_kdi0ti.jpg'
  >
    <h3>Hello!</h3>
    <p>My name is Yaroslav.</p>
    <p>I'm a {age}-year old web developer and software engineer from Tashkent, Uzbekistan.</p>
    <p>I barely speak English, but I can read technical documentation. All this content on this site made with the help of my wife :)</p>
  </Article>
}
