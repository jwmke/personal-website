import Link from 'next/link';
import { useState, useEffect } from 'react';

const BlogSearch = (props: {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setIsLoading(true);

        const delayDebounceFn = setTimeout(async () => {
            console.log(searchTerm);
            // Send Axios request here
            setIsLoading(false);
        }, 2000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])

    return (
        <>
            {/* <div className='hover:cursor-text bg-pine text-lg shadow-pine shadow-2xl rounded-xl max-h-32 px-4 py-2 max-w-3-1xl flex'>
                <span className='flex-1 text-white hover:cursor-pointer hover:text-mint mr-2'>
                    { isLoading ? <div id='loading'/> : "🔎︎"}
                </span>
                <span style={{flex: "32"}}>
                    <input onChange={(e) => setSearchTerm(e.target.value)} autoFocus className='caret-white w-full placeholder-white placeholder-opacity-80' style={{backgroundColor: "transparent", "outline": "none"}} placeholder='Search contents of blogs...'/>
                </span>
            </div> */}
        </>
    );
}

export default BlogSearch;