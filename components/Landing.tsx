import TypeAnimation from 'react-type-animation';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Landing = () => {
    const { height, width } = useWindowDimensions();

    const content = width&&width<700 ? <div className="absolute h-1/2">
        <h1 className={`text-5xl text-white top-24 left-44 relative font-bold z-30 w-32`}>
            <TypeAnimation className='tall-lines'
                sequence={['Weller @ MKE', 10000000, '']}
            />
        </h1>
        <div className="top-36 left-10 relative z-30 w-80 text">
            <h1 className='text-2xl text-white tall-lines'>
                Hi! I'm Joe, a software engineer based
                out of Milwaukee, WI who's interested
                in robotics, computer vision, and full
                stack web development.
            </h1>
        </div>
    </div> : 
    <div className="absolute h-1/2">
        <h1 className={`text-8xl text-white top-1/3 left-1/4 relative font-bold z-30 `}>
            <TypeAnimation
                sequence={['Weller@MKE', 10000000, '']}
            />
        </h1>
        <div className="top-1/2 left-1/4 relative z-30 ">
            <h1 className='text-4xl text-white'>
                Hi! I'm Joe, a software engineer based
            </h1>
            <h1 className='text-4xl text-white pt-14'>
                out of Milwaukee, WI who's interested
            </h1>
            <h1 className='text-4xl text-white pt-14'>
                in robotics, computer vision, and full
            </h1>
            <h1 className='text-4xl text-white pt-14'>
                stack web development.
            </h1>
        </div>
    </div>;

    return (
        <div>
            {content}
        </div>
    );
}

export default Landing;