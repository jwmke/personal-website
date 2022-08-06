import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Portfolio = () => {
    const triggerRef = useRef();
    const dataRef = useIntersectionObserver(triggerRef, {
      freezeOnceVisible: true
    });

    const animatedProps = useSpring({
        from: { opacity: 0, marginLeft: -1000 },
        to: { opacity: dataRef?.isIntersecting ? 1 : 0, marginLeft: dataRef?.isIntersecting ? 0 : -1000 },
        config: { mass: 1, tension: 150, friction: 15 }
    });

    return (
        <div className="relative w-full h-full bg-gradient-to-b from-pine to-navy">
            <div className='mx-auto text-center w-3/4 sm:w-1/2 pt-32'>
                <div>
                    <animated.span style={animatedProps} className='text-mint text-5xl'>
                        // Just your average Joe
                    </animated.span>
                    <div ref={triggerRef as any} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <p className='text-white text-2xl mt-8'>
                        👕 Software Engineer at Kohl's
                        </p>
                        <p className='text-white text-2xl mt-8'>
                            🌏 Learning Korean, 안녕하세요!
                        </p>
                        <p className='text-white text-2xl mt-8'>
                            ⚡ Electric Longboarding Fanatic
                        </p>
                    </div>
                    <div>
                        <p className='text-white text-2xl mt-8'>
                        👕 Software Engineer at Kohl's
                        </p>
                        <p className='text-white text-2xl mt-8'>
                            🌏 Learning Korean, 안녕하세요!
                        </p>
                        <p className='text-white text-2xl mt-8'>
                            ⚡ Electric Longboarding Fanatic
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;