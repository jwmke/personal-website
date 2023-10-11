import Image from 'next/image';
import Link from 'next/link';

const BlogCard = (props: {
    name: string,
    description: string,
    media: string,
    mediaBlur: string,
    link: string,
    date: string,
    highlights?:string[] 
}) => {
    return (
        <>
            <Link href={`/blog/${props.link}`} target="_blank" rel="noreferrer"><div className='hover:text-teal underline hover:cursor-pointer text-xl mt-4 md:hidden block'>{props.name}</div></Link>
            <div className='mt-7 md:block hidden'>
                <Link href={`/blog/${props.link}`} target="_blank" rel="noreferrer">
                    <div className="relative rounded-xl max-h-32 max-w-3-1xl overflow-hidden shadow-black shadow-2xl bg-white transition ease-linear duration-150 hover:scale-105 hover:cursor-pointer hover:bg-mint active:bg-pine">
                        <div className='z-20 inline-block'>
                            <Image placeholder="blur" blurDataURL={props.mediaBlur} width={196} height={130} src={"/img/blog/" + props.media + ".jpg"} alt="project_img" />
                        </div>
                        <div className="inline-block absolute">
                            <div className="font-bold text-xl text-dark-navy relative top-3.5 mx-5 w-auto">{props.name}</div>
                            <div className='m-5 mt-6 w-12 h-1 border-pine border-b xl:block hidden'/>
                            <div className='text-dark-navy xl:-mt-2 mt-4 mx-5'>{props.description}</div>
                            {props.highlights && console.log(props.highlights)}
                            {/* <div className='text-pine -bottom-2 text-xs right-2 absolute'>{props.date}</div> */}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default BlogCard;
