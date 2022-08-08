import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const PortfolioHeader = (props : {text: String}) => {
    const triggerRef = useRef(null);
    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true });

    const animatedProps = useSpring({
        from: { opacity: 0, marginLeft: -1000 },
        to: { opacity: dataRef?.isIntersecting ? 1 : 0, marginLeft: dataRef?.isIntersecting ? 0 : -1000 },
        config: { mass: 1, tension: 150, friction: 15 }
    });

    return (
        <div>
            <animated.span style={animatedProps} className='text-mint text-5xl'>
                {props.text}
            </animated.span>
            <div ref={triggerRef} />
        </div>
    );
}

export default PortfolioHeader;