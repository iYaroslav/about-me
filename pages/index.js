import { useMemo } from "react"
import getAge from 'get-age'
import Layout from "../components/Layout"
import Avatar from "../components/Avatar"

export default () => {
  const age = useMemo(() => getAge('1991-12-19'), [])

  return <Layout>
    <article>
      <Avatar />

      <h3>Hello!</h3>
      <p>My name is Yaroslav Samardak.</p>
      <p>I'm a {age}-year old web developer and software engineer from Tashkent, Uzbekistan.</p>
      {/*<br />*/}
      {/*<p>Contact me in <a href='https://t.me/iYaroslav' target='_blank'>telegram</a></p>*/}
    </article>
  </Layout>
}
