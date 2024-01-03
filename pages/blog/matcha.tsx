import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      <div className='font-lato w-full flex bg-gradient-to-b from-white to-light-mint min-h-screen'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Matcha made in heaven" />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar bg/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-navy text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                Iced Vanilla Matcha Latte 🍵
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>1/10 the price and 1/2 as much sugar as the Starbucks <a href='https://www.starbucks.com/menu/product/468/iced/nutrition' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>alternative</a>, yet somehow tastes that much better since you made it yourself.</p>
              <p className='text-2xl font-bold pt-3'>Ingredients</p>
              <p>1.5 tsp, Matcha Powder</p>
              <p>1/4 cup, Boiling Water</p>
              <p>1 cup, Milk</p>
              <p>1/2 cup, Ice</p>
              <p>2 tsp, Vanilla Syrup</p>
              <p>1 tbsp, Granulated Sugar</p>
              <p className='text-2xl font-bold pt-3'>Instructions</p>
              <p>0. Sift matcha powder into a cup to avoid clumping (optional)</p>
              <p>1. Pour the boiling water into the cup with the matcha powder and whisk thoroughly</p>
              <p>2. Add the milk, ice, vanilla and sugar to the glass</p>
              <p>3. Stir, and enjoy</p>
              <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;