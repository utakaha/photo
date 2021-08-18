import Head from 'next/head'
import styles from './layout.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { NAME, SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from '../lib/constants'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta charSet="utf-8" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="/images/icon.jpeg" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${NAME}`} />
        <meta name="twitter:creator" content={`@${NAME}`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
