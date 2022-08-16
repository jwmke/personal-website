import { useState } from 'react';

import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useSpring, animated } from 'react-spring';

import useWindowDimensions from '../hooks/useWindowDimensions';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { height, width } = useWindowDimensions();

  const animatedProps = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: active || (width&&width>=1024) ? 1 : 0, marginTop: active || (width&&width>=1024) ? 0 : -200 },
    config: { mass: 1, tension: 150, friction: 10 }
  });

  return (
    <div className='absolute z-20 w-full'>
      <nav className='flex items-center flex-wrap p-3 mr-6'>
        <Link href='/'>
          <a className='inline-flex items-center p-5 '>
            <svg xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                viewBox="0 0 500 500"
                className='fill-navy hover:fill-white z-40'>
                    <path d="M174.2 91.8c.2.5 5.9 10.4 12.7 22l12.3 21.2H301.9l-49 85.7c-27 47.2-49.9 87-50.8 88.5l-1.7 2.8-24.9-43.6c-13.7-24-25.4-43.8-26-44-.6-.3-12.2-.3-25.8-.2l-24.7.3 50.5 88.5c27.7 48.7 50.8 88.3 51.2 88.1.7-.4 177.3-308.9 177.3-309.7 0-.2-45.9-.4-102.1-.4-56.1 0-101.9.4-101.7.8zM315.6 290.6 277 358.2l11.6 20.3c6.3 11.2 12.1 21 12.7 21.9 1 1.3 9.7-13.4 52-87.3 27.9-48.9 50.7-89.1 50.7-89.5 0-.3-11.2-.6-24.9-.6h-24.8l-38.7 67.6z" />
            </svg>
          </a>
        </Link>
        <div className='z-40 inline-flex p-2 pt-1 rounded lg:hidden text-navy ml-auto outline-none'>
            <Hamburger toggled={active} toggle={setActive} color='#05396b' distance="sm"/>
        </div>
        <div className={` w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <animated.div style={{ ...animatedProps }} className="lg:ml-auto">
          <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/dojoe'>
              <a className='text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'>
                .theDojoe()
              </a>
            </Link>
            <Link href='/bucketlist'>
              <a className='text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'>
                .bucketList()
              </a>
            </Link>
            <a className='text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'
            href='https://www.linkedin.com/in/joseph-weller/' target="_blank" rel="noreferrer">
                .linkedIn()
            </a>
            <a className='text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'
            href='https://github.com/Joseph5062A' target="_blank" rel="noreferrer">
                .github()
            </a>
          </div>
          </animated.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;