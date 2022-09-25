import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Landing from '../components/Landing';
import Portfolio from '../components/Portfolio';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Home: NextPage = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className='h-screen bg-teal font-lato select-none'>
      <Head>
        <title>Joe Weller</title>
        <meta name="description" content="Portfolio website of Joe Weller." />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="google-site-verification" content="agRJm9VBzesdZT70vlgmKho0_6W-JC1TdrkD6LSjnw4" />
      </Head>
      <div className="relative w-full h-full bg-gradient-to-b from-teal to-pine">
        <Navbar/>
        <Landing/>
        <div className={width&&width<700 ? 'fixed h-full w-full opacity-0 z-40' : ''}/>
        <Scene/>
      </div>
      <Portfolio/>
      <Projects/>
      <Skills/>
    </div>
  )
};

export default Home;
