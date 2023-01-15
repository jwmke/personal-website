import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Joe Weller's Blog." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
              Test
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;
  