// pages/_app.js
import '../styles/reset.scss'
import '../styles/base.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
         <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
      <Component {...pageProps} />
      </>
  )
}

export default MyApp