import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';
import Link from 'next/link';

const Blog: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Joe Weller's Blog." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left h-screen">
        <div className='mx-auto pt-36'>
          <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
              Blog
            </div>
            <div className='text-xl mt-7'> {/* TODO: remove &apos;ll after first blog post */}
              Welcome. This is where I&apos;ll write about things that interest me.
            </div>
            <div className='text-2xl font-bold mt-7'>
              General Posts
            </div>
            <div className='text-xl mt-7'>
              Coming soon...
            </div>
            <div className='text-2xl font-bold mt-7'>
              Recipes
            </div>
            <div className='text-xl mt-7'>
              <Link href='/blog/rice' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Garlic Fried Rice</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/pizza' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Perfect NYC Pizza</span></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default Blog;
  