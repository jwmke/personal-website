import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-white to-light-mint'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Preferred beverage of Zeus." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar bg/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full h-100 lg:text-center text-left">
        <div className='mx-auto pt-36 mb-24'>
        <div className='text-navy text-left mx-5'>
            <div className='text-4xl font-bold'>
                Zeus&apos; 1K Calorie Chocolate Protein Shake 🏋️
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>A peanut butter, banana, and chocolate milkshake that contains 65g of protein, 1100 calories, and makes for the perfect post-workout treat.</p>
              <p className='text-2xl font-bold pt-3'>Ingredients</p>
              <p>1 banana</p>
              <p>1 cup, whole milk</p>
              <p>1 5oz pack, greek yogurt</p>
              <p>4 tbsp, peanut butter</p>
              <p>1/4 cup, chocolate whey protein powder</p>
              <p>1.5 tbsp, olive/coconut oil</p>
              <p>0.5 tbsp, cocoa powder</p>
              <p>2 ice cubes</p>
              <p>5g, creatine monohydrate (optional)</p>
              <p className='pt-5 text-2xl font-bold'>Instructions</p>
              <p>Throw everything into a blender and puree for 30-45 seconds</p>
              <p>To avoid powder clumps at the bottom of the blender, add the milk before the powder ingredients</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;