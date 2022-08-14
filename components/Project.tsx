import Image from 'next/image';
import { useState } from 'react';
import MediaCarousel from './MediaCarousel';

const Project = (props: {
    details: {
        name: String,
        tags: String[],
        description: String,
        media: String,
        buttonNames: String[]
        buttonLinks: String[],
        modalDescription: String,
        modalMediaDetails: {
            media: String,
            description: String
        }[]
    }
}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(!showModal)} className="max-w-sm mr-3 rounded-lg overflow-hidden shadow-2xl bg-mint mb-24 transition ease-linear duration-150 hover:scale-105 hover:cursor-pointer hover:bg-white">
                <Image className="w-full" width={550} height={280} src={"/img/" + props.details.media + ".png"} alt="project_img" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-dark-navy">{props.details.name}</div>
                    <p className="text-base text-dark-navy">
                        {props.details.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-pine rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{props.details.tags[0]}</span>
                    <span className="inline-block bg-pine rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{props.details.tags[1]}</span>
                    <span className="inline-block bg-pine rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{props.details.tags[2]}</span>
                </div>
            </div>
            {showModal ? (
                <>
                    <div className="font-lato justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-8" onClick={() => setShowModal(false)}>
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {props.details.name}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-navy opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <MediaCarousel details={props.details.modalMediaDetails}/>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-navy text-lg leading-relaxed">
                                        {props.details.modalDescription}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-navy rounded-b">
                                    <button
                                        className="text-navy background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-teal text-navy active:bg-mint font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Project Repository
                                    </button>
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