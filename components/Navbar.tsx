import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import { useSpring, animated } from 'react-spring';

import logo from '../public/img/logo.png';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const { height, width } = useWindowDimensions();

  const animatedProps = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: active || (width&&width>=1024) ? 1 : 0, marginTop: active || (width&&width>=1024) ? 0 : -200 },
    config: { mass: 1, tension: 150, friction: 10 }
  });

  return (
    <>
      <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src={logo} width={40} height={40}/>
          </a>
        </Link>
        <div className='inline-flex p-3 pt-2 rounded lg:hidden text-navy ml-auto outline-none'>
            <Hamburger toggled={active} toggle={setActive} color='#05396b' distance="sm"/>
        </div>
        <div className={` w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <animated.div style={{ ...animatedProps }} className="lg:ml-auto">
          <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-half px-3 py-2 rounded text-navy font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Portfolio
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-half px-3 py-2 rounded text-navy font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Bucket List
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-half px-3 py-2 rounded text-navy font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                LinkedIn
              </a>
            </Link>
          </div>
          </animated.div>
        </div>
      </nav>
    </>
  );
};