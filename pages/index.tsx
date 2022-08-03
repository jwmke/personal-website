import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Landing from '../components/Landing';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-gradient-to-b bg-teal'>
      <Head>
        <title>Joe Weller</title>
        <meta name="description" content="Portfolio website of Joe Weller." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="relative w-full h-full bg-teal">
        <Navbar/>
        <Landing/>
        <Scene/>
      </div>
    </div>
  )
};

export default Home;
