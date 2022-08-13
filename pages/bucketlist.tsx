import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';

const BucketList: NextPage = () => {
  return (
    
    <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy'>
    <Head>
        <title>Joe Weller</title>
        <meta name="description" content="Joe Weller's Bucket List." />
        <link rel="icon" href="/favicon/favicon.ico" />
    </Head>
    <Navbar/>
    <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
      <div className='mx-auto pt-36'>
      <div className='text-white text-left mx-5 mb-24'>
          <div className='text-4xl font-bold'>
            Bucket List
          </div>
          <div className='text-2xl child:mt-5'>
            <p className='pt-5'>Read 1000 books</p>
            <p>Pass the TOPIK-I (Test of Proficiency in Korean)</p>
            <p>Walk 4,000,000 steps in a year</p>
            <p>Earn a purple belt in Brazilian Jiu-Jitsu</p>
            <p>Ski a black diamond in Colarado</p>
            <p>Live in NYC for at least one year</p>
            <p className='line-through'>Speak in front of a large crowd (April, 2022)</p>
            <p>Work as a digital nomad in South East Asia</p>
            <p>Meditate for 30 days in a row</p>
            <p>Be a guest lecturer at a university</p>
            <p>Reach 1600 elo in blitz chess</p>
            <p>Write and publish a book</p>
            <p className='line-through'>Have my name on a patent (August, 2021)</p>
            <p>Achieve zero debt</p>
            <p>Climb Mount Kilimanjaro</p>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
};

export default BucketList;
