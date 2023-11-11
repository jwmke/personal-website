import { useState, useEffect } from 'react';

import Typewriter from "typewriter-effect";
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useSpring, animated } from 'react-spring';

const Landing = () => {
    const { height, width } = useWindowDimensions();

    const [showText, setShowText] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    const fadeStyles = useSpring({
        from: { opacity: 0 },
        to: { opacity: showText ? 1 : 0 },
        config: { duration: 1000 }
    });

    const arrowFadeStyles = useSpring({
        from: { opacity: 0 },
        to: { opacity: showArrow ? 1 : 0 },
        config: { duration: 500 }
    });

    useEffect(()=> {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                    setShowArrow(window.pageYOffset < 20)
                }
            );
        }
        setTimeout(()=>{setShowText(true)}, 1400);
        setTimeout(()=>{setShowArrow(true)}, 2800);
    }, []);

    useEffect(()=> {

        if (!showArrow) {
            window.removeEventListener("scroll", () => {
                setShowArrow(window.pageYOffset < 20)
            });
        }

    }, [showArrow]);

    return (
        <div>
            {width&&width<700 ? <div className="absolute h-1/2">
                <h1 className={`text-4xl small-text bg-gradient-to-r from-pine to-teal bg-clip-text inline-block text-transparent top-24 mt-12 mx-10 relative font-bold z-30`}>
                    <div className="tall-lines">
                        <Typewriter
                        onInit={(typewriter)=> {
                        typewriter
                        .changeDelay(45)
                        .typeString("Weller@TPA")
                        .start();
                        }}
                        />
                    </div>
                </h1>
                <animated.div style={fadeStyles} className="top-28 left-10 relative z-30 w-3/4 text">
                    <h1 className='text-xl text-pine tall-lines'>
                        Hi! I&apos;m Joe, an engineer based
                        out of Tampa, FL who&apos;s interested
                        in robotics, full stack development, machine learning
                        and more.
                    </h1>
                </animated.div>
            </div> : 
            <div className="absolute h-1/2">
                <h1 className={`text-8xl bg-gradient-to-r from-pine to-teal bg-clip-text inline-block text-transparent pb-1 top-2/3 left-1/4 lg:left-64 relative font-bold z-30`}>
                    <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .changeDelay(45)
                    .typeString("Weller@TPA")
                    .start();
                    }}
                    />
                </h1>
                <animated.div style={fadeStyles} className="top-2/3 left-1/4 lg:left-64 mt-14 ml-2 relative z-30 ">
                    <h1 className='text-3xl text-pine'>
                        Full Stack • Machine Learning • Robotics
                    </h1>
                </animated.div>
            </div>}
            <animated.div style={arrowFadeStyles}>
                <div className='fixed bottom-8 w-screen z-30'>
                    <div className="scroll-down-dude w-4 mx-auto"/>
                </div>
            </animated.div>
            <div className="custom-shape-divider-bottom-1697386315">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}

export default Landing;