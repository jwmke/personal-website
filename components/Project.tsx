import Image from 'next/image';

const Project = (props: { details: {
        name: String,
        tags: Array<String>,
        description: String,
        media: String
    }}) => {
    
    return (
        <div className="max-w-sm mr-3 rounded overflow-hidden shadow-2xl bg-mint mb-24 transition duration-150 hover:scale-105 hover:cursor-pointer hover:bg-white">
            <Image className="w-full" width={550} height={280} src={"/img/" + props.details.media + ".png"} alt="project_img"/>
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
    );
}

export default Project;