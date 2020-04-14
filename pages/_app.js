import Head from "next/head"
import css from "../styles/_app.scss"
import useFont from "../hooks/useFont"

const App = ({Component, pageProps}) => {
  useFont('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap')

  return <>
    <Head>
      <title>Yaroslav Samardak</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="cloudinary_cloud_name" content="iyaroslav" />
    </Head>
    <Component css={css} {...pageProps} />
  </>
}

export default App
