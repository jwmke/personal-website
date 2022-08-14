import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MediaCarousel = (props: {
    details: {
        media: String
        description: String
    }[]
}) => {
    return (
        <Carousel>
            {props.details.map((mediaDetails) => (
                    <div key={mediaDetails.media as any}>
                        <Image className='w-full' width={892} height={408} src={"/img/" + mediaDetails.media + ".png"} alt="project_img"/>
                        <p className='legend'>{mediaDetails.description}</p>
                    </div>
                )
            )}
        </Carousel>
    );
}

export default MediaCarousel;