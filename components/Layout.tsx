import Link from 'next/link'
import Head from 'next/head'

import '../styles/layout.scss'

export default ({
  children,
  title = 'CV - Yaroslav Samardak',
  page = 'index'
}) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap" rel="stylesheet" />
    </Head>
    <aside>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </aside>

    <section>
      { children }
    </section>

    <footer>{'I`m here to stay'}</footer>
  </div>
)
