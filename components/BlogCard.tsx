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
            <Link href={props.link === "bucketlist" ? "/bucketlist" : `/blog/${props.link}`} target="_blank" rel="noreferrer"><div className='hover:text-teal underline hover:cursor-pointer text-xl mt-4 md:hidden block'>{props.name}</div></Link>
            <div className='mt-7 md:block hidden max-w-3-1xl'>
                <Link href={props.link === "bucketlist" ? "/bucketlist" : `/blog/${props.link}`} target="_blank" rel="noreferrer">
                    <div className={`${props.highlights && props.highlights?.length > 0 ? "" : "shadow-black shadow-2xl"} z-50 relative rounded-xl max-h-32 max-w-3-1xl overflow-hidden shadow-black shadow-custom bg-white transition ease-linear duration-150 hover:scale-105 hover:cursor-pointer hover:bg-mint active:bg-pine`}>
                        <div className='z-20 inline-block'>
                            <Image placeholder="blur" blurDataURL={props.mediaBlur} width={196} height={130} src={"/img/blog/" + props.media + ".jpg"} alt="project_img" />
                        </div>
                        <div className="inline-block absolute">
                            <div className="font-bold text-xl text-dark-navy relative top-3.5 mx-5 w-auto">{props.name}</div>
                            <div className='m-5 mt-6 w-12 h-1 border-pine border-b xl:block hidden'/>
                            <div className='text-dark-navy xl:-mt-2 mt-4 mx-5'>{props.description}</div>
                            {/* <div className='text-pine -bottom-2 text-xs right-2 absolute'>{props.date}</div> */}
                        </div>
                    </div>
                </Link>
                <div className={`${props.highlights && props.highlights?.length > 0 ? "" : "hidden"} z-30 bg-pine max-w-3-1xl relative -top-3 pt-4 pb-2 px-5 rounded-b-xl shadow-black shadow-lg`}>
                    {props.highlights && props.highlights?.map((message:string) => {
                        let newMessage:string = message.replaceAll("<em>", '<b>');
                        newMessage = newMessage.replaceAll("</em>", "</b>");
                        return <div key={message} dangerouslySetInnerHTML={{__html: newMessage}} />
                    })}
                </div>
            </div>
        </>
    );
}

export default BlogCard;
