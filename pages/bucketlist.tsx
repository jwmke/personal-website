import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';

const BucketList: NextPage = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-teal to-mint'>
      <Head>
        <title>Joe Weller</title>
        <meta name="description" content="Joe Weller's bucket list." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto font-lato text-white font-bold text-center">
        BucketList
      </main>
    </div>
  )
};

export default BucketList;
