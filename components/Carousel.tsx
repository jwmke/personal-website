import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Carousel = (props: {
    details: {
        media: string
        description: string
    }[]
}) => {

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null as any);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction: any) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
    }, []);

    return (
        <div className="carousel mx-auto">
            <div className="relative overflow-hidden">
                <div className="flex justify-between absolute top left w-full h-full">
                    <button
                        onClick={movePrev}
                        className="bg-navy text-white rounded-l-lg w-10 h-full text-center opacity-25 hover:opacity-100 disabled:opacity-10 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="bg-navy text-white rounded-r-lg w-10 h-full text-center opacity-30 hover:opacity-100 disabled:opacity-10 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container relative flex gap-2 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {props.details.map((resource, index) => {
                        return (
                            <div
                                key={index}
                                className="carousel-item text-center relative w-72 h-56 snap-start"
                            >
                                <div
                                    className="h-full w-full rounded-lg aspect-video block bg-origin-padding bg-left-top bg-cover bg-no-repeat bg z-0"
                                    style={{ backgroundImage: `url(${"/img/" + resource.media || ''})` }}
                                >
                                    <Image
                                        src={"/img/" + resource.media || ''}
                                        alt={resource.media}
                                        className="w-full rounded-lg"
                                        layout="fill" objectFit="inherit"
                                    />
                                </div>
                                <a
                                    href={'/img/' + resource.media} target="_blank" rel="noreferrer" 
                                    className="h-full w-full aspect-square block rounded-lg absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-90 bg-navy z-10 hover:cursor-nesw-resize"
                                >
                                    <h3 className="text-white py-6 px-10 mx-auto text-xl">
                                        {resource.description}
                                    </h3>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
