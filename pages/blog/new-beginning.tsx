import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-white to-light-mint'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Advice for the student dreading the end of university." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar bg/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left select-none">
        <div className='mx-auto pt-36'>
        <div className='text-navy text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                For the Student Dreading the End of University
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <p>It was around halfway into my final year at university when the eager anticipation of my upcoming graduation transformed into dismay.</p>
              <div className='flex justify-center'>
                <Image width={700} height={466} src={"/img/blog/grad.jpg"} alt="grad" className='rounded-xl'/>
              </div>
              <p>Up until then, graduation was the light at the end of the tunnel that my peers and I had been wandering toward for the entirety of our emerging adulthood. This wandering was more or less aimless as I naively thought that all of the efforts I was contributing were in the name of escaping some sort of metaphoric prison that was infringing on my sense of agency.</p>
              <p>In reality, that prison was a sanctuary.</p>
              <p className='text-3xl font-bold pt-3'>The Price We Pay for Love</p>
              <p className='italic'>&quot;How lucky I am to have something that makes saying goodbye so hard?&quot;<br/>Winnie-the-Pooh</p>
              <p>Narrowing my attention to the short-term future, I could only focus on what was going to be lost upon graduating. I progressively became more aware of everything that I had been taking for granted; as I did, my melodramatic side felt like the world around me was collapsing in on itself.</p>
              <p>I first began to fear the loss of structure that university provided. In one way or another, every aspect of university was methodically planned out. From the socializing that&apos;s built into the framework of education, to the foundational routines of learning and activities that were omnipresent, each component of university was organized such that I could continuously improve myself, as well as enjoy myself, all while essentially living on autopilot.</p>
              <p>After more reflection, I realized the loss of community that would occur. Never before in my life had I made connections as deep as the ones that I built up with my friends and professors. While I knew it would still be possible to maintain these connections with my closest friends post-graduation, the idea of no longer being able to easily communicate and banter with my peers made me feel as if I was leaving a significant part of my life behind.</p>
              <p>Lastly, I became aware of the loss of identity that I would experience. There had never been a time period in my sentient past where I wasn&apos;t a student. The idea of this student fragment of my identity being torn away sent me into a state of confusion and disconnectedness. In addition to this, I became painfully aware of my own mortality, which I had been blissfully ignoring for the previous 22 years of my life.</p>
              <p>When the day finally came, and I walked across that stage, nothing had ever felt more anticlimactic. I had seemingly spent my entire life working towards this exact moment, yet I was nearly entirely void of emotion. As I walked back to my seat and sat down I thought to myself, &quot;what now?&quot;</p>
              <p className='text-3xl font-bold pt-3'>Moving Forward</p>
              <div className='flex justify-center'>
                <Image width={468} height={244} src={"/img/blog/copium.jpg"} alt="copium" className='rounded-xl'/>
              </div>
              <p>You might be thinking I&apos;m just using this post to cope with my recent departure from university, or you also might assume the impression that I&apos;m not aware of how privileged I am to be in my position. While I believe I&apos;ve worked hard to get to where I am, it&apos;s not my place to agree or disagree with this assumption. However, one thing is certain, there&apos;s never a reason to not strive to be better, even when originating from a place of privilege.</p>
              <p>Throughout university, the concept of self-betterment became a topic that I became engaged with, and for good reason. Through the effort of attempting to live every day even 1% better than the last, as opposed to simply doing what was expedient, my self-esteem grew, my mental health improved, and I was steadily moving closer to my own definition of success.</p>
              <p>Moving towards this definition of success was by no means easy. The consistent sacrifice of the present was required in order to improve the odds of a better future. This was a truth that held constant post-university as well. The only difference was that I, not anyone else, was the now only one enforcing accountability to maintain the routines and habits that better aimed my trajectory at this definition of success.</p>
              <p>But how does one craft their own definition of success? In my opinion, this is one of the most complex, multivariable questions that can be asked. It is synonymous with determining the meaning of life, and nearly every indivudual on the planet will have a varying answer. Nonetheless, I&apos;ll attempt to solicit some guidance on how you can begin to approach the question.</p>
              <p>First, you must understand that your answer must be malleable and will therefore change over the course of your life, therefore, there&apos;s no purpose in stressing about creating the perfect answer now. When designing your answer, you&apos;ll want to consider both your values and your aspirations in life. These are the elements in life that are truly the most important to you and the corresponding goals that meaningfully align with them.</p>
              <p>Not only is it necessary to maintain a flexible mindset and be receptive to feedback once you determine your answer, but you also mustn&apos;t be too strict on yourself in the pursuit of this success. After all, the best of life is experienced on the detours and adventures along the way, not at the destination.</p>
              <p className='text-3xl font-bold pt-3'>It&apos;s the Journey</p>
              <div className='flex justify-center'>
                <Image width={468} height={244} src={"/img/blog/obi.gif"} alt="obi" className='rounded-xl' unoptimized={true}/>
              </div>
              <p className='italic'>&quot;Life moves pretty fast. If you don&apos;t stop and look around once in a while, you could miss it.&quot;<br/>Ferris Bueller</p>
              <p>To live life to the fullest, and be present for the whole journey, you need an aim. When I sat back down in that seat after I had walked across the stage, the first thing I did was decouple my identity from being a student. The new identity I chose wasn&apos;t tied to my career, or else I&apos;d risk being miserable upon retirement, but instead built upon countless hours of introspection in which I discovered my core priorities and, along with them, my own definition of success.</p>
              <p>To anyone who&apos;s currently nearing the end of their university odyssey, you must uncover what you want out of life, and use the vehicle of habitual betterment as means to arrive at this destination.</p>
              <p>Armed with this knowledge, go forth, and conquer the world.</p>
              <div className='flex justify-center pt-4'>
                <a target="_blank" rel="noreferrer" href='https://notbyai.fyi/' className='hover:cursor-pointer hover:shadow-2xl'>
                  <Image width={132} height={42} src={"/img/blog/human.png"} alt="human"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;
  