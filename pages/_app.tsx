import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Image Galery</title>
      </Head>

      <header></header>


      <Component {...pageProps} />

      <footer>
        <p>Written in NEXT.js & React.js with Typescript. Made by Kent Jordan.</p>
      </footer>
    </>

  )
}

export default MyApp
