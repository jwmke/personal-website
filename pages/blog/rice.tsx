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
            <div className='text-xl child:mt-5 mt-7'>
              <div className='align-text-bottom'>
                <span className='inline-block'>
                  <p className='pt-2 text-2xl font-bold'>Ingredients</p>
                </span>
                {/* <span className='inline-block ml-3'>  
                  <p className='text-left text-mint text-xl'>{"// future comment"}</p>
                </span> */}
              </div>
              <p>~1.5 cups, rice (50:50 blend of long-grain white rice and jasmine rice)</p>
              <p>2 large eggs</p>
              <p>~3 tbsp, peanut OR vegetable oil</p>
              <p>4-6 cloves of garlic, minced</p>
              <p>~1 tsp, MSG (Monosodium Glutamate)</p>
              <p>~0.5 tsp, white pepper</p>
              <p>~1 tsp, sugar</p>
              <p>~2 tbsp, soy sauce</p>
              <p>~1.5 tbsp, sesame oil</p>
              <p>~1 tbsp, rice vinegar</p>
              <p>~1 tbsp, Gochujang (optional)</p>
              <p>1 spring onion, sliced (optional)</p>
              <p className='pt-5 text-2xl font-bold'>Preparation</p>
              <p>In a small dish combine the soy sauce, rice vinegar and Gochujang</p>
              <p>In a second small dish combine the MSG, white pepper and sugar</p>
              <p>In a third small dish whisk the eggs and add a pinch of salt</p>
              <p className='pt-5 text-2xl font-bold'>Cooking Instructions</p>
              <p>1. Heat the vegetable/peanut oil in a wok over medium heat</p>
              <p>2. Add the minced garlic to the wok and stir fry until it turns a light golden color</p>
              <p>3. Remove the garlic from the wok into a small dish, leaving the garlic-infused oil behind</p>
              <p>4. Add the eggs to the wok and stir until almost solid</p>
              <p>5. Add the rice to the wok and stir fry for 30 seconds, breaking any clumps as necessary</p>
              <p>6. Pour the wet ingredient dish along the outside of the wok and mix everything</p>
              <p>7. Dump the dry ingredient dish into the wok and continue mixing for 30 seconds</p>
              <p>8. Remove the wok from the heat, drizzle the sesame oil over the rice</p>
              <p>9. Garnish the garlic fried rice with the sliced spring onion and enjoy</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;
  