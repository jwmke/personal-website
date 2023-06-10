import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Skip the drive-thru tonight." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                Panda Express Orange Chicken 🍊
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>A copycat recipe of Panda Express&apos; Orange Chicken to satisfy your cravings without the commute.</p>
              <p className='text-2xl font-bold pt-3'>Chicken</p>
              <p></p>
              <p className='pt-5 text-2xl font-bold'>Sauce</p>
              <p></p>
              <p className='pt-5 text-2xl font-bold'>Instructions</p>
              <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;
  