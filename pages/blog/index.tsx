import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';
import BlogCard from '../../components/BlogCard';
import Link from 'next/link';

const Blog: NextPage = () => {
    return (
      
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none min-h-screen'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Where I write about things that interest me." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
          <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
              Blog
            </div>
            <div className='text-xl mt-7'> 
              Welcome. This is where I write about things that interest me.
            </div>
            <div className='text-2xl font-bold mt-10 pb-3 md:pb-0'>
              General Posts
            </div>
            <BlogCard name='The Lasting Significance of the Context Window Problem' date='05/23' media='Window3' description='A deep dive into why issues with limited LLM context windows will last beyond the short term.' link='context' mediaBlur='data:image/jpeg;base64,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gCggCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACooAAigIAACgIAIAAACgAAACACgAIAogAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAqIAAAogAAAAKAgoCAAAAIoCACoKgCKiqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKigAqIAAKAgAAoAACACgAAAAigqCoAigIigqIoKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKACiACAoCAooAoiKAAAAoCCiiCoAigIKAiKCoigIigqIqCgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAogCgAogCgiigigoCgIKAAAACIKAgoCI0gqI0gIjSKIjSAiKCoiiKgqAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKACiAKAKKgooIooIooIKACgIKAgoAigIKAgoCIoCI0iiI0gMigMo0grIqKACKgoggCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgqoAoCigCgAoAKACgAoCKAAoCCgIKAgoCIoCCijIoDIoDKNICIqKMipQQAUAQEUQQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVEUUBUUBRRBQAUUAFABQRRQQUABQQUBBQEFAQUBBUBBRRBUBEaQERQGUaRRmo0lBmotRQARQBARUQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQFARQABQAUBRQFRQFFABQAUAFABQABAFBFAAAAABFFEFQBFAQVAQVARGkBEVFEZrSUVlK0zVEAEAEUAQQVEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUUAABQBQAUBQAUVAUAUFABQAUAFAAAUAAABQEUAEUEQUUQUFRFAQVAQVARFARFRREVAZqVqsqIi1AABABFEUZEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRRFAAAAAABQBQAUAFAUAUFAVFQFAFBQAUAFAAAFAAAAUEFAQUUQUBAAEUBEUBEUBEUBEVFERUBmo1WaozUaqKIAiACKAIIKiAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCgAAAoAAAAKAAACgCgAqooCigAoCoqAqKAoAKACooAACgAAAAAAoAAIoCAAIqAIqAIqAiKiiJWkoM1KtSqM1FqKIAiACAAiiKiAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCgAoAAAAAoIKAAAKigKigKigKAKqKAoAoAKAgoAKACgAKigAAAACiiCgIAAAAigIACAAiKgCKiiJVSgjNaZqiVlqs1QRUEAEABFAGRAEAAAAAAAAAAAAAAAAAAAAAAAAAAABRQAAFAAAFAAAAAABQAFRQUAFABVRQUAFBQFRUBUUAAFABQAAAFRVAAAABFQAAAAEAARUBAARFRREVARKqVRms1qs1QRUEAEABFAEEAZAAAAAAAAAAAAAAAAAAAAAAAAAABUVQAAAUAAFRQAAAAAAUABQBQAUAFUAUAFUAFBAUAAAUAFAAAAUFAAAABAAAAABAAEAEAURABEAESgozWaCggCACAAigCCAMgAAAAAAAAAAAAAAAAAAAAAAAAAAoKAAACgAAoAAAAA//9k='/>
            <BlogCard name='How to Make the World&apos;s Largest Bowl of Cereal' date='04/23' media='knee_deep' description='Ever had the sudden urge to construct a 9,000+ pound cereal bowl? Of course not. In case you ever do, this guide is here to help.' link='cocoa-puffs' mediaBlur='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAQQDAAAAAAAAAAAAAAAAAQQCAwURFDFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRMf/aAAwDAQACEQMRAD8Amm5KTyJG609XF2vAAE8K0lp//9k='/>
            <BlogCard name='For the Student Dreading the End of University' date='01/23' media='grad' description='A letter written to my younger self (and any other students who are currently feeling lost).' link='new-beginning' mediaBlur='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIDBBFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ+3blbFEiZmcAAH/9k='/>
            <div className='text-2xl font-bold mt-7 md:mt-14'>
              My Recipes
            </div>
            <div className='text-xl mt-7'>
              <Link href='/blog/orange' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>PX Orange Chicken 🍊</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/avocado' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Easy Avocado Toast 🥑</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/shake' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Zeus&apos; Protein Shake 🍫</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/rice' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Garlic Fried Rice 🍚</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/pizza' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Perfect NYC Pizza 🍕</span></Link>
            </div>
            <div className='text-2xl font-bold mt-7 md:mt-14'>
              Other Blogs I Enjoy
            </div>
            <div className='text-xl mt-7'>
              <a href='http://www.paulgraham.com/articles.html' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Paul Graham</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://sive.rs/blog' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Derek Sivers</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://paulstamatiou.com/' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Paul Stamatiou</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://mango.pdf.zone/' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Alex Mango</span></a>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default Blog;
  