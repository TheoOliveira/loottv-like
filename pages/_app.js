// pages/_app.js
import '../styles/reset.scss'
import '../styles/base.scss'
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp