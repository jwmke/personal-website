import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';

import ImageMosaic from '../../components/ImageMosaic';
import CustomLightBox from '../../components/CustomLightBox';
import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {

    const images = [
        {
            src: '/img/italy_final/Italy-01.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-02.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-03.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-04.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-05.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-06.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-07.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-08.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-09.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-10.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-11.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-12.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-13.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-14.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-15.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-16.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-17.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-18.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-19.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-20.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-21.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-22.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-23.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-24.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-25.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-26.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-27.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-28.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-29.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-30.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-31.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-32.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-33.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-34.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-35.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-36.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-37.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-38.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-39.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-40.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-41.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-42.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-43.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-44.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-45.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-46.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-47.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-48.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-49.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-50.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-51.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-52.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-53.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-54.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-55.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-56.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-57.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-58.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-59.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-60.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-61.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-62.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-63.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-64.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-65.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-66.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-67.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-68.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-69.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-70.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-71.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-72.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-73.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-74.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-75.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-76.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-77.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-78.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-79.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-80.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-81.jpg',
            height: 85,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-82.jpg',
            height: 80                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ,
            width: 110
        },
        {
            src: '/img/italy_final/Italy-83.jpg',
            height: 110,
            width: 85
        },
        {
            src: '/img/italy_final/Italy-84.jpg',
            height: 110,
            width: 85
        },
      ];

    const [isOpen, setOpen] = useState(false);
    const [currentImageIndex, setCurrentIndex] = useState(0);

    return (
      
      <div className='font-lato w-full min-h-screen flex bg-gradient-to-b from-white to-light-mint'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Italy on Film." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-navy text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                Italy on Film
            </div>
            <div className='text-pine text-xl child:mt-5 my-8'>
              <p>{"// Shot on a Kodak Ektar H35 with Kodak Gold 200 35mm"}</p>
            </div>
            <ImageMosaic images={images}
                handleClick={({ index }:any) => {
                setCurrentIndex(index);
                setOpen(true);
            }}/>
            <CustomLightBox images={images} currentImageIndex={currentImageIndex} setCurrentIndex={setCurrentIndex} isOpen={isOpen} onClose={() => setOpen(false)}/>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;