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
              <p className='text-pine'>// TL;DR - a step-by-step guide on how to fill a <p className='inline line-through'>roofing dumpster</p> bowl with over nine thousand pounds of cereal and milk because why not</p>
              <p>*record scratch* Yep, that&apos;s me. You&apos;re probably wondering how I got here.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                    <Image width={700} height={466} src={"/img/blog/knee_deep.jpg"} alt="knee_deep" className='rounded-xl'/>
                    <p>Knee deep in a 8 foot tall dumpster full of Cocoa Puffs</p>
                </div>
              </div>
              <p>To get there, we first need to rewind by 6 months from when this picture was taken, to when my roommate approached me, seemingly innocently, to show me a listing on one of the most problematic digital markets to gain traction since the Silk Road, Facebook Marketplace.</p> {/* https://en.wikipedia.org/wiki/Silk_Road_(marketplace) */}
              <p className='text-2xl font-bold pt-3'>Step 1: Obtain 10,000 lbs of Cereal for Free</p>
              <p>It all began with an anonymous General Mills truck driver, we&apos;ll call him Carl, whose objective for the week was to transport a trailer of 24 pallets of Cocoa Puffs from coast to coast.</p>
              <p>As Carl reached the end of his journey he noticed a fatal mistake he had made at the start it. This error pertained to the tamper tag on his trailer, or rather, the lack thereof.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/tag.jpg"} alt="tag" className='rounded-xl'/>
                  <p>Tamper tag on a semi truck</p>
                </div>
              </div>
              <p>For those who aren&apos;t as brushed up on your trucker terminology, a tamper tag is a glorified zip tie that's required by law to seal semi-trailers when they&apos;re transporting consumable goods. If the tag is removed in transit, or, in the case of Carl, forgotten to be put on in the first place, the goods are considered to be compromised, and must either be:</p>
              <ol>
                <li>1. Incinerated</li>
                <li>2. Buried in a landfill</li>
                <li>3. Given away for free</li>
              </ol>
              <p>With Carl&apos;s villain origin story out of the way, we come back to my roommate who, with a slight grin on his face, is handing his phone to me with a Marketplace listing on-screen.</p>
              <p className='font-bold'>FREE - 24 Pallets of Cocoa Puffs. First Come, First Served.</p>
              <p>I took a quick glance at the post, &quot;haha, pretty interesting dude&quot;, and as I'm handing his phone back I notice a glisten in his eye as begins to speak.</p>
              <p>Being honest, I don&apos;t remember a majority of the conversation that followed, likely because my brain repressed it as a response to the traumatic stress of the ensuing clown carnival ride of experiences that followed. However, in essence, my roommate wanted to do something big. Bigger than anything he, or anyone he knew, had done before. And he viewed these 24 pallets of cereal as being the gateway to doing that big thing, agnostic of what that big thing might be.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/pallet.jpg"} alt="pallet" className='rounded-xl'/>
                  <p>Pallet of Cocoa Puffs, skid-steer for scale</p>
                </div>
              </div>
              <p>While my head was overflowing with questions, he abruptly asked if I would help him &quot;get the cereal.&quot; I was reluctant, but since our winter break was less than a week away, and I didn&apos;t have any other plans, I figured that helping out with this, whatever <p className='inline italic'>this</p> was going to be, would likely be more entertaining than immediately heading home, so I agreed.</p>
              <p>He organized a day to meet up with the man who was in possession of the pallets and reached out to around 10 other friends, who turned out to be just as bored and curious as me, to see if they&apos;d be willing to help.</p>
              <p>Then, with an army amassed, the ringleader and his troops marched into war.</p>
              <p className='text-2xl font-bold pt-3'>Step 2: Store 9,000 lbs of Cereal for Free</p>
              <p>A</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/uhaul.jpg"} alt="uhaul" className='rounded-xl'/>
                  <p>The CocoaMobile</p>
                </div>
              </div>
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