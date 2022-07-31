import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joe Weller</title>
        <meta name="description" content="Portfolio website of Joe Weller." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className={"container mx-auto"}>
        Hello World!
      </main>
    </>
  )
}

export default Home
