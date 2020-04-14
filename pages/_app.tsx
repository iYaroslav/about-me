import Head from "next/head"
import css from "../styles/layout.scss"

const App = ({Component, pageProps}) => <>
  <Head>
    <title>CV - Yaroslav Samardak</title>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap" rel="stylesheet"/>
  </Head>
  <Component css={css} {...pageProps} />
</>

export default App
