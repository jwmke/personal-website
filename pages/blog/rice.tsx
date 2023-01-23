import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Rice Rice Baby." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
              Garlic Fried Rice 🍚
            </div>
            <div className='text-xl mt-7'>
              My take on the traditional Chinese dish of fried rice, with certain elements borrowed from Sinangag, a traditional Filipino dish. 
              Heavily inspired by <a href='https://www.youtube.com/mrnigelng' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Uncle Roger</a>&apos;s fried rice recipe. 
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <div className='align-text-bottom'>
                <span className='inline-block'>
                  <p className='pt-2 text-2xl font-bold'>Ingredients</p>
                </span>
                {/* <span className='inline-block ml-3'>  
                  <p className='text-left text-mint text-xl'>{"// future comment"}</p>
                </span> */}
              </div>
              <p>~1.5 cups, rice (50:50 blend of long-grain white rice and jasmine rice)</p>
              <p>2 medium sized eggs</p>
              <p>~3 tbsp, peanut OR vegetable oil</p>
              <p>4-6 cloves of garlic, minced</p>
              <p>~1 tsp, MSG (Monosodium Glutamate)</p>
              <p>~0.5 tsp, white pepper</p>
              <p>~1 tsp, sugar</p>
              <p>~2 tbsp, soy sauce</p>
              <p>~1.5 tbsp, sesame oil</p>
              <p>~1 tbsp, rice vinegar</p>
              <p>~1 tbsp, Gochujang (optional)</p>
              <p>1 spring onion, sliced</p>
              <p className='pt-5 text-2xl font-bold'>Cooking Tips</p>
              <p>Coming Soon...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;
  