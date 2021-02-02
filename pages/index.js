import { useMemo, useEffect } from "react"
import getAge from 'get-age'
import Layout from "../components/Layout"
import About from "../components/About"
import Article from "../components/Article"
import Edu from "../components/Edu"
import matomo from '../components/matomo'

export default () => {
  const age = useMemo(() => getAge('1991-12-19'), [])

  useEffect(() => {
    matomo.track({
      url: window.location.href,
      action_name: 'Visit home page',
    })
  }, [])

  return <Layout>
    <About />
    <Edu />
  </Layout>
}
