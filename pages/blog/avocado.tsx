import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Guac 'n roll." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                Easy Avocado Toast 🥑
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>The only snack in my diet that&apos;s both healthy and somehow tastes good. Here&apos;s how to quickly make it with minimal cleanup involved.</p>
              <p className='text-2xl font-bold pt-3'>Ingredients</p>
              <p>2 Slices of Bread (Sourdough or Whole Grain)</p>
              <p>1 Hass Avocado</p>
              <p>.5 tsp, Extra Virgin Olive Oil</p>
              <p>.25 tsp, Sea Salt</p>
              <p>.25 tsp, White Pepper</p>
              <p>.25 tsp, <a href='https://www.traderjoes.com/home/products/pdp/ground-fermented-black-garlic-067160' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Ground Fermented Black Garlic</a> (or Garlic Powder)</p>
              <p>.25 tsp, Red Chili Flakes </p>
              <p>.5 tsp, Sesame Seeds</p>
              <p>1/4 cup, <a href='https://www.culinaryhill.com/how-to-toast-walnuts/' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Toasted Walnuts</a> (optional)</p>
              <p className='text-2xl font-bold pt-3'>Preparation Tips</p>
              <p>While toasting the bread, use a large knife to slice the Avocado into quarters, vertically.</p>
              <p>For each quarter, peel off the skin, slice it vertically 2-3 times, and then set the slices aside.</p>
              <p>Lightly drizzle the EVOO on the toasted bread slices before laying the avocado wedges on them.</p>
              <p>Lastly, sprinkle the seasoning blend over the avocado toast and enjoy.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;