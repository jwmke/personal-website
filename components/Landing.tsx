import { useState, useEffect } from 'react';

import TypeAnimation from 'react-type-animation';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useSpring, animated } from 'react-spring';

const Landing = () => {
    const { height, width } = useWindowDimensions();

    const [showText, setShowText] = useState(false);

    const fadeStyles = useSpring({
        from: { opacity: 0 },
        to: { opacity: showText ? 1 : 0 },
        config: { duration: 800 }
    });

    useEffect(()=> {
        setTimeout(()=>{setShowText(true)}, 1500);
    }, []);

    return (
        <div>
            {width&&width<700 ? <div className="absolute h-1/2">
                <h1 className={`text-5xl text-white top-24 mt-12 mx-10 relative font-bold z-30`}>
                    <TypeAnimation className='tall-lines'
                        sequence={[1000, 'Weller@MKE', 10000000, '']}
                    />
                </h1>
                <animated.div style={fadeStyles} className="top-36 left-10 relative z-30 w-80 text">
                    <h1 className='text-2xl text-white tall-lines'>
                        Hi! I&apos;m Joe, an engineer based
                        out of Milwaukee, WI who&apos;s interested
                        in robotics, full stack development, machine learning
                        and more.
                    </h1>
                </animated.div>
            </div> : 
            <div className="absolute h-1/2">
                <h1 className={`text-8xl text-white top-1/3 left-1/4 relative font-bold z-30 `}>
                    <TypeAnimation
                        sequence={[1000, 'Weller@MKE', 10000000, '']}
                    />
                </h1>
                <animated.div style={fadeStyles} className="top-1/2 mt-10 left-1/4 relative z-30 ">
                    <h1 className='text-4xl text-white'>
                        Hi! I&apos;m Joe, a software engineer based
                    </h1>
                    <h1 className='text-4xl text-white pt-12'>
                        out of Milwaukee, WI who&apos;s interested
                    </h1>
                    <h1 className='text-4xl text-white pt-12'>
                        in robotics, machine learning, full stack
                    </h1>
                    <h1 className='text-4xl text-white pt-12'>
                        development and more.
                    </h1>
                </animated.div>
            </div>}
        </div>
    );
}

export default Landing;