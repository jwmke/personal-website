import TypeAnimation from 'react-type-animation';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Landing = () => {
    const { height, width } = useWindowDimensions();

    const textSize = width&&width<700 ? "text-5xl" : "text-8xl";

    return (
        <div className="absolute h-1/2 w-1/2">
            <h1 className={`${textSize} text-white top-1/3 left-1/4 relative font-bold z-30 `}>
                <TypeAnimation
                    sequence={['Weller@MKE', 10000000, '']}
                />
            </h1>
            <div className="top-1/2 left-1/4 relative z-30 ">
                <h1 className='text-4xl text-white font-bold'>
                    Howdy! I'm Joe, a software
                </h1>
                <h1 className='text-4xl text-white font-bold pt-14'>
                    engineer who's interested in
                </h1>
                <h1 className='text-4xl text-white font-bold pt-14'>
                    robotics, computer vision,
                </h1>
                <h1 className='text-4xl text-white font-bold pt-14'>
                    and full stack development.
                </h1>
            </div>
        </div>
    );
}

export default Landing;