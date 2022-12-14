import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';

const BucketList: NextPage = () => {
  return (
    
    <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
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
            <p className='pt-5'>Read 500 books</p>
            <p>Pass the TOPIK-I (Test of Proficiency in Korean)</p>
            <p>Walk 4,000,000 steps in a year</p>
            <p>Earn a purple belt in Brazilian Jiu-Jitsu</p>
            <p>Ski a black diamond in Colorado</p>
            <p>Live in NYC for one year</p>
            <p>Cook 1000 homemade pizzas</p>
            <p>Attend CES in Las Vegas</p>
            <p className='line-through'>Speak in front of a large crowd (April, 2022)</p>
            <p>Make every dish in a cookbook</p>
            <p>Explore Eastern Asia for 3 months</p>
            <p className='line-through'>Meditate for 30 days in a row (December, 2022)</p>
            <p>Attend the Battle of Oranges in Italy</p>
            <p>Be a guest lecturer at a university</p>
            <p>Reach 1600 elo in blitz chess</p>
            <p>Attend the Summer Olympics</p>
            <p>Attend the Winter Olympics</p>
            <p>Write and publish a book</p>
            <p className='line-through'>Have my name on a patent (August, 2021)</p>
            <p>Celebrate the Chinese New Year in China</p>
            <p>Achieve zero debt</p>
            <p>Stay in a hostel</p>
            <p>Climb Mount Kilimanjaro</p>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
};

export default BucketList;
