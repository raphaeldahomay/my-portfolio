import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Font Awesome for footer icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>
      <body className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
