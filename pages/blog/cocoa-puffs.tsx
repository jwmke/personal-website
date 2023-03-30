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
                The World&apos;s Largest Cereal Bowl; an Ode to Absurdism
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>*record scratch* Yep, that's me. You're probably wondering how I got here.</p>
              <div className='flex justify-center'>
                <Image width={700} height={466} src={"/img/blog/knee_deep.jpg"} alt="knee_deep" className='rounded-xl'/>
              </div>
              <p>text</p>
              <p className='text-2xl font-bold pt-3'>heading</p>
              <p>text</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;