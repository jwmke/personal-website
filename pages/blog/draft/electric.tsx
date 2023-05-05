import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
              A Beginner&apos;s Guide to Personal Electric Vehicles
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>A consolidation of all the information I wish I had when starting to learn about Personal Electric Vehicles, Light EVs, Micromobility, or any of the other names by which these devices go by.</p>
              <div className='flex justify-center py-9'>
                <Image width={700} height={394} src={"/img/blog/PEV3.png"} alt="PEVs" className='rounded-xl'/>
              </div>
              <p>Before discussing the differences between the various sub-categories of Personal Electric Vehicles (PEVs) that exist, let&apos;s first describe what a PEV is, as well as what it isn&apos;t.</p>
              <p>Let&apos;s start with the obligatory Google definition:</p>
              <p className='italic'>PEVs are a category of electric vehicles designed for individual use, typically for short-distance travel within urban areas. These vehicles are often small, lightweight, and portable, and they are powered by rechargeable batteries.</p>
              <p>From this definition, we&apos;ll determine what isn&apos;t a PEV, or for my fellow discrete math friends, the negation of the set. </p>
              <p>First, since by definition, PEVs are considered to be lightweight and portable, i.e., you can bring them into a coffee shop or onto a bus/train if need be, vehicles such as E-bikes and Segways won&apos;t be included in this guide. </p>
              <p>Secondly, since PEVs be used to travel/commute short distances, ultra-small EVs such as E-skates and Hoverboards also won&apos;t be considered in this guide, as walking is often far more productive.</p>
              <p>With these exceptions out of the way let&apos;s briefly jump into why you&apos;d even want a PEV in the first place, before evaluating your best options in terms of purchasing one.</p>
              <p className='text-2xl font-bold pt-3'>Aren&apos;t these things just toys?</p>
              <p className='italic'>&quot;As men get older, the toys get more expensive.&quot;<br/>Marvin Davis</p>
              <p>Well, yes and no.</p> {/* explore philosophical side of fun then talk about last mile(s) commute */}
              <p>https://shop.niu.com/products/niu-kqi3-max-electric-kick-scooter-for-adults</p>
              <p>https://fluidfreeride.com/products/fluid-mosquito?ref=18</p>
              <p>https://www.euco.us/products/inmotion-v10-electric-unicycle</p>
              <p>https://onewheel.com/products/onewheel-pint-x</p>
              <p>https://www.backfireboards.com/products/backfire-zealot-belt-drive-electric-skateboard</p>
              <p>https://www.exwayboard.com/products/exway-atlas-carbon-2wd</p>
              <p>bottom text</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;