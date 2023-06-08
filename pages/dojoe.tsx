import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';

const Dojoe: NextPage = () => {
  const [goats, setGoats] = useState(['Paul Weller', 'Michelle Weller', 'Joseph Carey', 'Nathan DuPont', 'Trenton Bowser', 'Julian Singkham', 'Hannah Marron', 'Joel Frank', 'Cassie Viol', 'Brian Kim', 'William Chen', 'Grace Fleming', 'Christian Hennig', 'Seth Fenske', 'Isaac Ballone', 'Sabrina Stangler', 'Paul Rinaldi', 'Tony Zhang', 'Tony Tong', 'Ryan Erdman', 'John Osmanski', 'Drew Talo', 'Cody Daniels', 'Ethan Hindes', 'Cody Friso', 'Matthew Schmidt', 'Andrew Kempen', 'Jacob Voller', 'James Lembke', 'Ben Kraft', 'Mark Medinger', 'Meiling He', 'Kyle Rodrigues', 'Dwight Diercks', 'Brittany Kaehn', 'Ivan Moreno', 'Isaiah Zupke', 'Andrew Wojciechowski', 'Walter Schilling', 'Ben Felda', 'John Bukowy', 'Ronald Nowling', 'Fahim Mahmood', 'Britney Flores', 'Nathan Johnson', 'Sohum Sohoni', 'David Koper', 'Dylan Critz', 'Xander Neuwirth', 'Michael Spence', 'Michael Anderson', 'Isaiah Rondeau', 'Tou Tong Xiong', 'James Rector', 'Derek Riley', 'Kyler Johnson', 'Jason Jang', 'John Deng', 'Francisco Maturana', 'Alex Blackman', 'Morgan Patch', 'Matej Koncos', 'Karl Schwerin', 'Lucas Adrian', 'Julia Sajdowitz', 'Jorge Gutierrez', 'Garrett Bachmann', 'Albert Meng', 'Crystal Smith', 'Steven Mose', 'Jonathon Magaña', 'Nathan Nolte', 'Lex Fridman', 'Michael Hinder', 'George Hotz', 'Michael Holley', 'Tommy Jungwirth', 'Trey Guise', 'Kier Anderson', 'Ben Stern', 'Tim Bentz', 'Nathan Rothe', 'Carl Malagodi', 'Erick Johnson', 'Alex Kempen', 'Mike Novotny', 'Aaron Strong', 'Christian Abegglen', 'Supun Dewaraja', 'James Alumkal', 'Omer Saeday', 'Travis Ottelien','Todd Atkinson', 'Augustin Calderon', 'Sven Broman', 'Sundar Venkat']); 

  const shuffle = (array: string[]) => {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  useEffect(()=> {
    setGoats(shuffle(goats));
  }, [goats]);

  return (
    <div className='w-full flex bg-gradient-to-b from-teal to-navy font-lato select-none'>
      <Head>
        <title>The Dojoe</title>
        <meta name="description" content="My Hall of Fame." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar isFixed={true}/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-white text-left mx-5'>
          <span className='text-4xl font-bold'>
            Welcome to The Dojoe&nbsp;
          </span>
          <span className='text-4xl'>
            (My Hall of Fame)
          </span>
            <p className='text-xl leading-9 mt-8'>
              I&apos;ve been fortunate to meet some fantastic people throughout my life. These people have been the Mr. Miyagis in my journeys who have all impacted who I am today. They&apos;ve taught me technical skills and life lessons, given me opportunities, and have been there when I needed help.
            </p>
            <p className='text-xl my-5 leading-9'>
              The purpose of the Dojoe is twofold. It not only exists to show my appreciation to these folks; but it&apos;s also for you, the reader, to reflect on who would be in your hall of fame.
            </p>
            <p className='text-xl mt-5 mb-8'>
              To everyone here, thank you for everything.
            </p>
          </div>
          <Image width={720} height={200} src={"/logo/dojoe_tran2.png"} alt="the_dojoe_logo" priority/>
          <div className='text-xl text-left mb-24 mx-5'>
            <div className='text-left text-xl text-mint mb-4'>
              {"// The ordering of names is random"}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {shuffle(goats).map((name) => <p suppressHydrationWarning key={name} className='text-white mt-3'>{name}</p>)}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Dojoe;
