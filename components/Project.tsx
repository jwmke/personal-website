import Image from 'next/image';
import { useState } from 'react';
import Carousel from './Carousel';

const Project = (props: {
    details: {
        name: string,
        tags: string[],
        description: string,
        media: string,
        mediaBlur: string,
        buttonNames: string[]
        buttonLinks: string[],
        modalDescription: string[],
        modalMediaDetails: {
            media: string,
            description: string
        }[]
    }
}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="mx-auto max-w-sm mb-12 rounded-xl overflow-hidden shadow-dark-navy shadow-2xl bg-white transition ease-linear duration-150 hover:scale-105 hover:cursor-pointer hover:bg-teal grid-span-2">
            <a href={props.details.buttonLinks[0]} target="_blank" rel="noreferrer">
                <div className='z-20'>
                    <Image placeholder="blur" blurDataURL={props.details.mediaBlur} className="w-full" width={550} height={285} src={"/img/" + props.details.media + ".jpg"} alt="project_img" />
                </div>
                <div className="px-6 py-3">
                    <div className="font-bold text-xl mb-2 text-dark-navy">{props.details.name}</div>
                    {props.details.description}
                </div>
                <div className="px-6 pt-2 pb-2">
                    {props.details.tags.map(tag => (
                        <span key={tag} className="inline-block bg-pine rounded-full shadow-sm shadow-dark-navy px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tag}</span>
                    ))}
                </div>
                </a>
            </div>
            {showModal ? (
                <>
                    <div className="font-lato justify-center items-center flex overflow-x-hidden overflow-y-auto no-scrollbar fixed inset-0 z-50 outline-none focus:outline-none" onClick={()=> setShowModal(false)}>
                        <div className="relative w-auto mx-auto md:max-w-4xl max-w-small max-h-screen" onClick={(e)=> e.stopPropagation()}>
                            {/*content*/}
                            <div className="border-0 rounded-xl shadow-black shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex w-full items-start justify-between p-5 rounded-t">
                                    <h3 className="text-3xl font-semibold text-navy">
                                        {props.details.name}
                                    </h3>
                                    <button
                                        className="ml-auto bg-transparent border-0 text-navy float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-navy opacity-20 duration-150 transition hover:opacity-70 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className='md:container mx-auto py-3 px-10 max-w-small'>
                                    <Carousel details={props.details.modalMediaDetails}/>
                                </div>
                                {/*body*/}
                                <div className="relative py-2 px-6 flex-auto md:max-h-96 overflow-y-auto">
                                {props.details.modalDescription.map((text, index) => (<p className="my-4 text-navy text-lg leading-relaxed" key={index}>{text}</p>))}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end py-6 px-4 border-t border-solid border-navy rounded-b mx-5">
                                    <button
                                        className="text-navy background-transparent font-bold uppercase px-5 py-2 text-sm outline-none hidden sm:inline focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    {props.details.buttonNames.map((name, index) => (
                                        <a href={props.details.buttonLinks[index]} target="_blank" rel="noreferrer" key={index}>
                                            <button
                                                className="bg-teal text-navy active:bg-mint font-bold uppercase text-sm px-5 py-3 mx-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                            {name}
                                        </button>
                                    </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Project;