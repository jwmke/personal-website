import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import { useSpring, animated } from 'react-spring';

import logo from '../public/img/logo.png';
import hover_logo from '../public/img/logo_white.png';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Logo = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div
        className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        <Link href="/">
            {isHovering ? (
            <Image src={hover_logo} width={40} height={40} alt="logo" />
            ) : (
            <Image src={logo} width={40} height={40} alt="logo" />
            )}
        </Link>
        </div>
    );
};


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
          <a className='inline-flex items-center p-6 '>
            <Logo/>
          </a>
        </Link>
        <div className='inline-flex p-3 pt-2 rounded lg:hidden text-navy ml-auto outline-none'>
            <Hamburger toggled={active} toggle={setActive} color='#05396b' distance="sm"/>
        </div>
        <div className={` w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <animated.div style={{ ...animatedProps }} className="lg:ml-auto">
          <div className='lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/bucketlist'>
              <a className='lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'>
                _bucketList();
              </a>
            </Link>
            <Link href='/dojoe'>
              <a className='lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'>
                _theDojoe();
              </a>
            </Link>
            <a className='lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'
            href='https://www.linkedin.com/in/joseph-weller/' target="_blank">
                _linkedin();
            </a>
            <a className='lg:inline-flex lg:w-auto w-half px-4 py-2 rounded text-navy font-bold items-center justify-center hover:text-white'
            href='https://github.com/Joseph5062A' target="_blank">
                _github();
            </a>
          </div>
          </animated.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;