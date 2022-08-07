import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Portfolio = () => {
    const triggerRef = useRef();
    const triggerRef2 = useRef();
    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true });
    const dataRef2 = useIntersectionObserver(triggerRef2, { freezeOnceVisible: true });

    const animatedProps = useSpring({
        from: { opacity: 0, marginLeft: -1000 },
        to: { opacity: dataRef?.isIntersecting ? 1 : 0, marginLeft: dataRef?.isIntersecting ? 0 : -1000 },
        config: { mass: 1, tension: 150, friction: 15 }
    });

    const animatedProps2 = useSpring({
        from: { opacity: 0, marginLeft: -1000 },
        to: { opacity: dataRef2?.isIntersecting ? 1 : 0, marginLeft: dataRef2?.isIntersecting ? 0 : -1000 },
        config: { mass: 1, tension: 150, friction: 15 }
    });

    return (
        <div className="flex w-full bg-gradient-to-b from-pine to-navy">
            <div className='mx-auto w-3/4 sm:w-3/4 pt-32'>
                <div className='mb-8'>
                    <animated.span style={animatedProps} className='text-mint text-5xl'>
                        // Just your average Joe
                    </animated.span>
                    <div ref={triggerRef as any} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='mr-4'>
                        <p className='text-mint text-2xl'>
                            &lt;present&gt;
                        </p>
                        <p className='text-white text-2xl mt-5 ml-6'>
                        👕 Software Engineer at Kohl's
                        </p>
                        <p className='text-white text-2xl mt-8 ml-6'>
                        🌏 Learning Korean, 안녕하세요!
                        </p>
                        <p className='text-white text-2xl mt-8 mb-5 ml-6'>
                        ⚡ Electric Longboarding Fanatic
                        </p>
                        <p className='text-mint text-2xl pb-5'>
                            &lt;/present&gt;
                        </p>
                    </div>
                    <div>
                        <p className='text-mint text-2xl'>
                            &lt;past&gt;
                        </p>
                        <p className='text-white text-2xl mt-5 ml-6'>
                            🎓 Graduated from the Milwaukee School of Engineering
                        </p>
                        <p className='text-white text-2xl mt-8 ml-6'>
                            🏭 Interned at Rockwell Automation and MSI Data
                        </p>
                        <p className='text-white text-2xl mt-8 mb-5 ml-6'>
                            🔧 Co-founded a competitive robotics organization
                        </p>
                        <p className='text-mint text-2xl'>
                            &lt;/past&gt;
                        </p>
                    </div>
                </div>
                <div className='mt-24 mb-8'>
                    <animated.span style={animatedProps2} className='text-mint text-5xl'>
                        // Stuff I've done
                    </animated.span>
                    <div ref={triggerRef2 as any} />
                </div>
                <div className='grid'>
                    <div className='text-white'>
                        AI Robotics Platform
                        MSOE Blockchain Development Curriculum Design
                        Lymphocite Detection In Ovarian Cancer Biopsies
                        MSOE Robotics Websites
                        RSA & AES Paralllelization
                        Glomerular Injury Assessor
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;