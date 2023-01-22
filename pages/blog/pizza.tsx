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
              The Perfect(ish) NYC Pizza 🍕
            </div>
            <div className='text-xl mt-7'>
              Wisconsin man&apos;s experimental journey to make the ideal NYC pizza.<br/>
            </div>
            <div className='text-xl mt-5'>
              Bucket List Progress as of 1/22/23: <span className='text-navy font-bold'>44/1000</span>
            </div>
            <div className="w-full bg-mint rounded-full h-2 mt-2">
              <div className="bg-navy h-2 rounded-full" style={{"width": ((44/1000.0)*100) + "%"}}></div>
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <div className='align-text-bottom'>
                <span className='inline-block'>
                  <p className='pt-2 text-2xl font-bold'>Dough</p>
                </span>
                <span className='inline-block ml-3'>  
                  <p className='text-left text-mint text-xl'>{"// four 14\" pies, rise in fridge for 24 hours"}</p>
                </span>
              </div>
              <p>520g lukewarm water (~2.25 cups)</p>
              <p>3.5g dry yeast (~1 tsp)</p>
              <p>12g sugar (~1 tbsp)</p>
              <p>17g salt (~1 tbsp)</p>
              <p>780g bread flour (~6 cups)</p>
              <p>20g olive oil (~1.5 tbsp)</p>
              <div className='align-text-bottom'>
                <span className='inline-block'>
                  <p className='pt-5 text-2xl font-bold'>Sauce</p>
                </span>
                <span className='inline-block ml-3'>  
                  <p className='text-left text-mint text-xl'>{"// four pies worth"}</p>
                </span>
              </div>
              <p>12oz roma tomato sauce</p>
              <p>6g salt (~1 tsp)</p>
              <p>4g sugar (~1 tsp)</p>
              <p>13g olive oil (~1 tbsp)</p>
              <p>1 garlic clove, minced</p>
              <p>1g dried oregano (~1 tsp)</p>
              <div className='align-text-bottom'>
                <span className='inline-block'>
                  <p className='pt-5 text-2xl font-bold'>Cheese</p>
                </span>
                <span className='inline-block ml-3'>  
                  <p className='text-left text-mint text-xl'>{"// per pie"}</p>
                </span>
              </div>
              <p>1oz shredded parmesan</p>
              <p>5oz-7oz low-moisture, whole milk mozzarella</p>
              <p className='pt-5 text-2xl font-bold'>Cooking Tips</p>
              <p>When making the dough, measure the ingredients by weight for best results</p>
              <p>Put your pizza steel(recommended)/stone on the second highest oven rack before preheating</p>
              <p>Preheat oven to its highest temperature for at least 25 minutes</p>
              <p>Cook until crust is browned to your liking, this should take around 6-8 minutes</p>
              <p>Drizzel a light layer of olive oil over the pizza before baking for extra flavor/aroma</p>
              <p>Set the pizza on to a cooling rack when it's done baking for a crispier crust</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;
  