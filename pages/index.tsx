import { useMemo } from "react"
import Layout from "../components/Layout"
import getAge from 'get-age'

export default () => {
  const age = useMemo(() => getAge('1991-12-19'), [])

  return <Layout>
    <article>
      <h3>Hello!</h3>
      <p>My name is Yaroslav Samardak.</p>
      <p>I'm a {age}-year old web developer and software engineer from Tashkent, Uzbekistan.</p>
      <br />
      <p>Contact with me in <a href='https://t.me/iYaroslav' target='_blank'>telegram</a></p>
    </article>
  </Layout>
}
