import { useMemo } from "react"
import getAge from 'get-age'
import Layout from "../components/Layout"
import About from "../components/About"
import Article from "../components/Article";
import Edu from "../components/Edu";

export default () => {
  const age = useMemo(() => getAge('1991-12-19'), [])

  return <Layout>
    <About />
    <Edu />
  </Layout>
}
