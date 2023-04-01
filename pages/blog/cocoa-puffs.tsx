import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Cuckoo for the sake being cuckoo." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                How to Make the World&apos;s Largest Bowl of Cereal
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>*record scratch* Yep, that&apos;s me. You&apos;re probably wondering how I got here.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                    <Image width={700} height={466} src={"/img/blog/knee_deep.jpg"} alt="knee_deep" className='rounded-xl'/>
                    <p>Knee deep in a 9 foot tall dumpster full of Cocoa Puffs</p>
                </div>
              </div>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 1: Obtain 10,000 lbs of Cereal for Free</p>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 2: Store 9,000 lbs of Cereal for Free</p>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 3: Store 8,000 lbs of Cereal for Not Free</p>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 4: <p className='inline line-through'>Contemplate Existence</p> Make a Plan</p>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 5: Got Milk?</p>
              <p>A</p>{/* Yes, 550 Gallons of Milk */}
              <p className='text-2xl font-bold pt-3'>Step 6: Praise Capitalism</p>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 7: Showtime</p>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 8: Swimming in It</p>
              <p>A</p>
              <p className='text-2xl font-bold pt-3'>Step 9: Condemn Capitalism</p>
              <p>A</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;