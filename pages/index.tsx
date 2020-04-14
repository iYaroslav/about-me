import { useState, useMemo } from "react"
import Layout from "../components/Layout"
import useInterval from "@use-it/interval"
import getAge from 'get-age'

export default () => {
  const age = useMemo(() => getAge('1991-12-19'), [])
  const [skillIndex, setSkillIndex] = useState(0)
  useInterval(() => setSkillIndex(i => i + 1), 1500)

  return <Layout>
    <article>
      <h3>Hello!</h3>
      <p>My name is Yaroslav Samardak.</p>
      <p>I'm a {age}-year old web developer and software engineer from Tashkent, Uzbekistan.</p>
    </article>
  </Layout>
}
