import { useState, useRef } from 'react';

import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useSpring, animated } from 'react-spring';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import useWindowDimensions from '../hooks/useWindowDimensions';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { height, width } = useWindowDimensions();
  const triggerRef = useRef(null);
  const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: false });
  const triggerRefScroll = useRef(null);
  const dataRefScroll = useIntersectionObserver(triggerRefScroll, { freezeOnceVisible: false });

  const defaultAnimatedProps = useSpring({
    from: { opacity: 0, top: -400 },
    to: { opacity: dataRef?.isIntersecting ? 1 : 0, top: dataRef?.isIntersecting ? 0 : -400},
    config: { mass: 1, tension: 150, friction: 15 }
  });

  const scrollAnimatedProps = useSpring({
    from: { opacity: 0, top: -400 },
    to: { opacity: dataRefScroll?.isIntersecting ? 1 : 0, top: dataRefScroll?.isIntersecting ? 0 : -400},
    config: { mass: 1, tension: 150, friction: 15 }
  });

  const animatedProps = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: active || (width&&width>=1024) ? 1 : 0, marginTop: active || (width&&width>=1024) ? 0 : -300 },
    config: { mass: 1, tension: 150, friction: 10 }
  });

  const navbar = (position:string) => (
    <>
      <animated.div style={position == 'absolute' ? defaultAnimatedProps : scrollAnimatedProps} className={position == 'absolute' ? 'absolute z-50 w-full top-0': 'z-50 w-full top-0 fixed'}>
          <nav className='flex items-center flex-wrap p-3 mr-6'>
            <Link href='/'>
              <a className='inline-flex items-center m-5 p-1 bg-teal backdrop-blur-sm bg-opacity-20 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    height={45}
                    viewBox="0 0 500 500"
                    className={(position == 'fixed' ? "fill-white lg:hover:fill-pine" : 'fill-navy lg:hover:fill-white') + " z-40"}>
                        <path d="M174.2 91.8c.2.5 5.9 10.4 12.7 22l12.3 21.2H301.9l-49 85.7c-27 47.2-49.9 87-50.8 88.5l-1.7 2.8-24.9-43.6c-13.7-24-25.4-43.8-26-44-.6-.3-12.2-.3-25.8-.2l-24.7.3 50.5 88.5c27.7 48.7 50.8 88.3 51.2 88.1.7-.4 177.3-308.9 177.3-309.7 0-.2-45.9-.4-102.1-.4-56.1 0-101.9.4-101.7.8zM315.6 290.6 277 358.2l11.6 20.3c6.3 11.2 12.1 21 12.7 21.9 1 1.3 9.7-13.4 52-87.3 27.9-48.9 50.7-89.1 50.7-89.5 0-.3-11.2-.6-24.9-.6h-24.8l-38.7 67.6z" />
                </svg>
              </a>
            </Link>
            <div className='z-40 inline-flex m-2 mt-1 mr-0 p-1 lg:hidden ml-auto outline-none bg-teal backdrop-blur-sm bg-opacity-20 rounded-xl'>
                <Hamburger toggled={active} toggle={setActive} color={position == 'fixed' ? "#edf5e1" : '#05396b'} distance="sm"/>
            </div>
            <div className={` absolute lg:top-0 lg:relative top-24 ml-5 w-34 lg:inline-flex lg:flex-grow lg:w-auto`}>
            <animated.div style={{ ...animatedProps }} className="lg:ml-auto bg-teal backdrop-blur-sm bg-opacity-20 rounded-xl">
              <div className='lg:inline-flex lg:flex-row lg:w-auto lg:items-center flex flex-col items-start lg:h-auto'>
                <Link href='/dojoe'>
                  <a className={(position == 'fixed' ? "text-white hover:text-pine" : 'text-navy hover:text-white') + " text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded font-bold items-center justify-center"}>
                    .theDojoe()
                  </a>
                </Link>
                <Link href='/bucketlist'>
                  <a className={(position == 'fixed' ? "text-white hover:text-pine" : 'text-navy hover:text-white') + " text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded font-bold items-center justify-center"}>
                    .bucketList()
                  </a>
                </Link>
                <a className={(position == 'fixed' ? "text-white hover:text-pine" : 'text-navy hover:text-white') + " text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded font-bold items-center justify-center"}
                href='https://www.linkedin.com/in/joseph-weller/' target="_blank" rel="noreferrer">
                    .linkedIn()
                </a>
                <a className={(position == 'fixed' ? "text-white hover:text-pine" : 'text-navy hover:text-white') + " text-xl lg:inline-flex lg:w-auto w-half px-4 py-2 rounded font-bold items-center justify-center"}
                href='https://github.com/Joseph5062A' target="_blank" rel="noreferrer">
                    .github()
                </a>
              </div>
              </animated.div>
            </div>
          </nav>
        </animated.div>
        <div className='absolute top-10' ref={triggerRef}/>
        <div className='absolute max-top' ref={triggerRefScroll}/>
      </>
  );

  return (
    <>
      <div>
        {navbar("absolute")}
      </div>
      <div>
        {navbar("fixed")}
      </div>
    </>
  );
};

export default Navbar;