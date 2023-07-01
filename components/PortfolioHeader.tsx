import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useWindowDimensions from '../hooks/useWindowDimensions';

const PortfolioHeader = (props : {text: String, color?: String}) => {
    const triggerRef = useRef(null);
    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: false });
  const { height, width } = useWindowDimensions();

    const animatedProps = useSpring({
        from: { opacity: 0, marginLeft: width&&width>700 ? -1000 : 0 },
        to: { opacity: dataRef?.isIntersecting ? 1 : 0, marginLeft: dataRef?.isIntersecting ? 0 : width&&width>700 ? -1000 : 0 },
        config: { mass: 1, tension: 150, friction: 15 }
    });

    const color = props.color ? props.color : 'text-mint';

    return (
        <div>
            <animated.span style={animatedProps} className={`${color} text-3xl md:text-5xl`}>
                {props.text}
            </animated.span>
            <div ref={triggerRef} />
        </div>
    );
}

export default PortfolioHeader;