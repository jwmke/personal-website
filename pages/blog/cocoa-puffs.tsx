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
              <p className='text-pine'>{"//"} TL;DR - a step-by-step guide on how to fill a <p className='inline line-through'>roofing dumpster</p> bowl with over nine thousand pounds of cereal and milk because why not</p>
              <p>*record scratch* Yep, that&apos;s me. You&apos;re probably wondering how I got here.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                    <Image width={700} height={466} src={"/img/blog/knee_deep.jpg"} alt="knee_deep" className='rounded-xl'/>
                    <p>Knee deep in a 8 foot tall dumpster full of Cocoa Puffs</p>
                </div>
              </div>
              <p>To get there, we first need to rewind by 6 months from when this picture was taken, to when my roommate approached me, seemingly innocently, to show me a listing on one of the most problematic digital markets to gain traction since the Silk Road, Facebook Marketplace.</p> {/* https://en.wikipedia.org/wiki/Silk_Road_(marketplace) */}
              <p className='text-3xl font-bold pt-3'>Step 0: Get Lucky</p>
              <p className='italic'>&quot;Luck is when an opportunity comes along and you&apos;re prepared for it&quot;<br/>Denzel Washington</p>
              <p>It all began with a General Mills truck driver, for the sake of anonimity, we&apos;ll call him Carl. Sometime in January of 2020, Carl was assigned an objective to transport a trailer of 24 pallets of Cocoa Puffs from one coast to the other.</p>
              <p>As Carl reached the end of his journey he noticed a fatal mistake he had made at the start of it. This error pertained to the tamper tag on his trailer, or rather, the lack thereof.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/tag.jpg"} alt="tag" className='rounded-xl'/>
                  <p>Tamper tag on a semi truck</p>
                </div>
              </div>
              <p>For those who aren&apos;t as brushed up on your trucker terminology, a tamper tag is a glorified zip tie that&apos;s required by law to seal semi-trailers when they&apos;re transporting consumable goods. If the tag is removed in transit, or, in the case of Carl, forgotten to be put on in the first place, the goods are considered to be compromised, and must either be:</p>
              <ol>
                <li className='pb-2'>1. Incinerated</li>
                <li className='pb-2'>2. Buried in a landfill</li>
                <li className='pb-2'>3. Given away for free</li>
              </ol>
              <p>With Carl&apos;s villain origin story out of the way, we come back to my roommate who, with a slight grin on his face, is handing his phone to me with a Marketplace listing on-screen.</p>
              <p className='text-2xl font-bold'>FREE - 24 Pallets of Cocoa Puffs. First Come, First Served.</p>
              <p>I took a quick glance at the post, &quot;haha, pretty interesting dude&quot;, and as I&apos;m handing his phone back I notice a glisten in his eye as he began to speak.</p>
              <p>Honestly, I don&apos;t remember a majority of the conversation that followed, likely because my brain repressed it as a response to the traumatic stress of the ensuing clown carnival ride of experiences that followed. However, in essence, my roommate wanted to do something big. Bigger than anything he, or anyone he knew, had done before. And he viewed these 24 pallets of cereal as being the gateway to doing that big thing, agnostic of what that big thing might be.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/pallet.jpg"} alt="pallet" className='rounded-xl'/>
                  <p>Pallet containing a ~600 lb bag of Cocoa Puffs, skid-steer for scale</p>
                </div>
              </div>
              <p>While my head was overflowing with questions, he abruptly asked if I would help him &quot;get the cereal.&quot; I was reluctant, but since our winter break was less than a week away, and I didn&apos;t have any other plans, I figured that helping out with this, whatever <p className='inline italic'>this</p> was going to be, would likely be more entertaining than immediately heading home, so I agreed.</p>
              <p>He organized a day to meet up with the man who was in possession of the pallets and reached out to around 10 other friends, who turned out to be just as bored yet curious as me, to see if they&apos;d be willing to lend a hand.</p>
              <p>Then, with an army amassed, the ringleader and his troops marched into war.</p>
              <p className='text-3xl font-bold pt-3'>Step 1: Obtain 10,000 lbs of Cereal for Free</p>
              <p>The plan was simple. Two phases. In and out.</p>
              <p className='text-2xl font-bold'>Phase 1, Procuring</p>
              <ol>
                <li className='pb-2'>1. Rent the largest moving truck we could legally drive and attach a trailer to it for good measure</li>
                <li className='pb-2'>2. Pull up to the cargo yard where the semi-trailer containing the Cocoa Puffs was located</li>
                <li>3. Fill every square inch of the moving truck with cereal, first with pallets, then with garbage bags full of cereal to fill in all nooks and crannies <p className='italic inline'>(shoutout to Phil and his friends from the cargo yard for letting us use their heavy machines and for offering us some of their weed (we graciously declined))</p></li>
              </ol>
              <p>Once dusk was upon us, we would pack up and drive to a self-storage facility 40 minutes from the cargo yard. The second phase of the plan would be then be initiated.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/uhaul.jpg"} alt="uhaul" className='rounded-xl'/>
                  <p>The CocoaMobile</p>
                </div>
              </div>
              <p className='text-2xl font-bold'>Phase 2, Hoarding</p>
              <ol>
                <li className='pb-2'>1. Redeem two <p className='inline font-bold'>first-month free</p> deals for the self-storage place&apos;s largest lockers. This would be done under the name of the two of us who drew the shortest straws</li>
                <li className='pb-2'>2. Discreetly unload ten thousand pounds of cereal into the lockers, this time without heavy machines</li>
                <li className='pb-2'>3. Wait 29 days before drawing straws again to determine who would use the same deal to sign up for two new lockers, and then proceed to migrate all of the cereal from locker to locker</li>
                <li>4. Rinse and repeat the previous step until we determine what we&apos;re going to do with ten thousand pounds of Cocoa Puffs</li>
              </ol>
              <p>All in all, the first half of the day went according to plan, however, once we approached the second phase, we began to encounter just a few <p className='inline text-lg'>slight</p> <p className='inline text-base'>minor</p> <p className='inline text-sm'>tiny</p> <p className='inline text-xs'>hiccups.</p></p>
              <p className='text-3xl font-bold pt-3'>Step 2: Survive</p>
              <p>At around 5:00 PM, as the sun was setting, we departed from the cargo yard, beginning our trek to the self-storage facility.</p>
              <p>Leading the convoy was a minivan, (also filled to the brim with cereal garbage bags), behind it, the CocoaMobile in all its glory, and the trailing escort vehicle was an SUV carrying the remainder of the infantry.</p>
              <p>The CocoaMobile may or may not have been just a pound or two <p className='inline line-through'>thousand</p> over its suggested haul limit, so the SUV was strategically following it at the tail end of the convoy, with the passengers of both vehicles on speed dial with each other in case any catastrophes were to arise.</p>
              <p>With the exception of the fact that the CocoaMobile max speed was 10 miles under the highway speed limit, the voyage was going smoothly until around 20 minutes in.</p>
              <p>Out of nowhere, an NPC truck attempted to cut off CocoaMobile, causing its driver to slam on the brakes. This caused the trailer to force itself off the hitch, meaning the trailer was only attached by the safety chains as the front of it was grinding itself into nothingness against the road.</p>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/cord.jpg"} alt="cord" className='rounded-xl'/>
                  <p>Break-light cord that got guillotined by the trailer&apos;s safety chains, kept as a souvenir</p>
                </div>
              </div>
              <p>It was easy to notice this was happening from the SUV&apos;s point of view, not only because of the light show of sparks that suddenly occurred but also because the trailer began to start violently fishtailing back and forth.</p>
              <p>The passenger of the SUV nearly immediately called the CocoaMobile and politely screamed at the driver what was happening, and that he needed to speed up, (to stop the fishtailing), then slow down and pull over.</p>
              <p>Luckily the driver was able to get to the side of the highway safely, but if that call would have been made even 10 seconds later, this post likely would have had a different title.</p>
              <p className='text-2xl font-bold'>How to Cause a Three-Hour Delay on Interstate-94 Using Only 5 Tons of Cereal</p>
              <p>After we reattached the trailer and mentally confirmed that there was now only a {"<5%"} chance that we&apos;d be receiving our deposit back. Our journey resumed, and somehow, we eventually made it to the self-storage facility.</p>
              <p>I&apos;ll just give the SparkNotes about how the second phase unfolded so that we can get to the meat and potatoes of the guide, i.e. the cereal bowl.</p>
              <ul>
                <li className='pb-2'>• Having no heavy machinery meant that we had to simply push and drop the pallets off the back of the CocoaMoble, and pray they didn&apos;t explode in the process (most didn&apos;t)</li>
                <li className='pb-2'>• The rented lockers were randomly selected to be on the second floor of the facility, meaning we not only had to bring the cereal to them by hand, but we also had to fit everything in an elevator with an opening barely wider than the width of the pallets</li>
                <li className='pb-2'>• The garbage bags and pallets were constantly leaking and tearing, leaving piles of Cocoa Puffs everywhere in our path (parking lot, corridors, elevator shaft, etc.) as we were transporting them to the lockers. This resulted in a total loss of around 1000 pounds of puffs</li>
                <li>• Our unlimited free storage hack was discovered the second time we were transferring the cereal to different lockers, so we had to move all of the cereal to a new self-storage facility, resulting in around another 1000 lost pounds of puffs</li>
              </ul>
              <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                  <Image width={468} height={244} src={"/img/blog/before-after.gif"} alt="before-after" className='rounded-xl'/>
                  <p>Proof we cleaned up because we&apos;re not a-holes</p>
                </div>
              </div>
              <p>Now that we had <p className='inline line-through'>10K</p> <p className='inline line-through'>9K</p> 8K pounds of cereal in our possession, we sat down and asked ourselves, why?</p>
              <p className='text-3xl font-bold pt-3'>Step 3: <p className='inline line-through'>Contemplate Existence</p> Make a Plan</p>
              <p>A</p>
              <p className='text-3xl font-bold pt-3'>Step 4: Got Milk?</p>
              <p>A</p>{/* Yes, 550 Gallons of Milk */}
              <p className='text-3xl font-bold pt-3'>Step 5: Praise Capitalism</p>
              <p>A</p>
              <p className='text-3xl font-bold pt-3'>Step 6: Showtime</p>
              <p>A</p>
              <p className='text-3xl font-bold pt-3'>Step 7: Swimming in It</p>
              <p>A</p>
              <p className='text-3xl font-bold pt-3'>Step 8: Condemn Capitalism</p>
              <p>A</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;