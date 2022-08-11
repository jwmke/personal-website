import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Navbar from '../components/Navbar';

const Dojoe: NextPage = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-teal to-navy'>
      <Head>
        <title>The Dojoe</title>
        <meta name="description" content="Joe Weller's hall of fame." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto text-center">
        <div className='mx-auto w-3/4 pt-40'>
          <Image width={720} height={200} src={"/logo/dojoe_tran.png"} alt="the_dojoe_logo"/>
        </div>
      </main>
    </div>
  )
};

export default Dojoe;
