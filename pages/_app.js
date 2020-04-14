import Head from "next/head"
import css from "../styles/_app.scss"

const App = ({Component, pageProps}) => <>
  <Head>
    <title>CV - Yaroslav Samardak</title>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap" rel="stylesheet"/>
    <meta name="cloudinary_cloud_name" content="iyaroslav" />
  </Head>
  <Component css={css} {...pageProps} />
</>

export default App
