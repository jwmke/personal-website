import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Gotta go fast." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                Title
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>https://shop.niu.com/products/niu-kqi3-max-electric-kick-scooter-for-adults</p>
              <p>https://fluidfreeride.com/products/fluid-mosquito?ref=18</p>
              <p>https://www.euco.us/products/inmotion-v10-electric-unicycle</p>
              <p>https://onewheel.com/products/onewheel-pint-x</p>
              <p>https://www.backfireboards.com/products/backfire-zealot-belt-drive-electric-skateboard</p>
              <p>https://www.exwayboard.com/products/exway-atlas-carbon-2wd</p>
              <p className='text-2xl font-bold pt-3'>heading</p>
              <p>Portable, no e-bikes. Practical, no hoverboards. </p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;