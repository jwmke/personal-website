import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';

const Dojoe: NextPage = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-teal to-mint'>
      <Head>
        <title>The Dojoe</title>
        <meta name="description" content="Joe Weller's hall of fame." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto font-lato text-white font-bold text-center">
        The Dojoe
      </main>
    </div>
  )
};

export default Dojoe;
