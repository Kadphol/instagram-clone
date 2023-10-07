import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='description' content='Instagram Clone' />
        <link rel='icon' href='/instagram.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
