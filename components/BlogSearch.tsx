import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BlogSearch = (props: {setResults: Function}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setIsLoading(true);

        const delayDebounceFn = setTimeout(async () => {

            const elasticSearchUrl = `https://afya525i8p:f74juqzpop@pw-search-4151560379.us-east-1.bonsaisearch.net:443/blog/_search/?source_content_type=application/json&source={"query":{"match_phrase":{"body":"${searchTerm}"}},"highlight":{"fragment_size":80,"fields":{"body":{}}}}`;

            if (searchTerm !== "") {
                let resultList:any = [];

                const res:any = await axios.get(elasticSearchUrl, {
                 auth: {
                    username: "afya525i8p",
                    password: "f74juqzpop"
                  }
                });
                
                const resultsArray:any = res.data.hits.hits;

                resultsArray.forEach((post:any) => {
                    resultList.push({
                        title: post._source.title,
                        highlights: post.highlight.body
                    })
                });

                props.setResults(resultList);
            } else {
                props.setResults([]);
            }
            setIsLoading(false);
        }, 300)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])

    return (
        <>
            <div className='hover:cursor-text md:flex hidden bg-pine text-lg shadow-pine shadow-2xl rounded-xl max-h-32 px-4 py-2 max-w-3-1xl'>
                <span className='flex-1 text-white hover:cursor-pointer hover:text-mint mr-2'>
                    { isLoading ? <div id='loading'/> : "🔎︎"}
                </span>
                <span style={{flex: "32"}}>
                    <input onChange={(e:any) => setSearchTerm(e.target.value)} autoFocus className='caret-white w-full placeholder-white placeholder-opacity-80' style={{backgroundColor: "transparent", "outline": "none"}} placeholder='Search contents of blogs...'/>
                </span>
            </div>
        </>
    );
}

export default BlogSearch;