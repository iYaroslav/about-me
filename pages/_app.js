import { useEffect } from 'react'
import Head from "next/head"
import { analytics } from '../components/firebase'
import useFont from "../hooks/useFont"
import css from "../styles/_app.scss"

const App = ({Component, pageProps}) => {
  useFont('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap')

  useEffect(() => {
    analytics()
  }, [])

  return <>
    <Head>
      <title>Yaroslav Samardak</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="cloudinary_cloud_name" content="iyaroslav" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Component css={css} {...pageProps} />
  </>
}

export default App
