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
            <BlogCard name='Romanticization of the Doomer in Western Society' date='07/23' media='doom4' description='Exploring the Doomer archetype, its rise to popularity in the West, and some solutions to it at an personal scale.' link='doom' mediaBlur='data:image/jpeg;base64,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zpqDWms6aK1prOmgumppoLpqamirpqaagupqaaC6mpqaDWpqamgupqamoLampqWgalqWpagWs2lqWiFrNEVm0AVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUUFEVGhUBVAFAAAAdBB6OdRAFEAUQ0GtGdURRBRV1nTQa1dZ1dRY1q6zpo03prOrqK1prOrorWms6aK1q6zpqK1prOmg1pqaaK1prOmgumppoq6azpqDWms6aC6azpoLpqamgums6agupqamgupqalqC6zampoLalqIAgKzagCsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIoqiKigAoqAKIA0ammta8sXTU000xrTWdNNMa01nTV1Ma0TTTTGhnTQxrTWdXQxdXWdNVG9XXPV1Go3q6xq6NNausauorWrrGrorWms6aDWrrGrorWms6aDWms6aitaazqaDWms6aDWms6mitaazqag1prOpoNams6moNams6AupqAAIqaIIM2qgKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoiiioIqiAKIAaagrK6agC6agDWmsgjWmsqGLpqAYurrIGNaazpppjWrrGmrpjpprGmiummsaajTpprGmit6uueroremsaaDemsaaK3prGmg3prGmpqtaazqGjeprIDWpqCC6gACAgCKmqggmqgis6ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogKogAAIAAAAAAAAAAAAAAAAAAoii6oiouqIC6oiigCKogCiAKIAogGgAmggpqoAmggJogKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgCqyouqIIuqIougAaABoAGgIGqICaqCKmqICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAogLqiAaogGqICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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'/>
            <BlogCard name='How to Make the World&apos;s Largest Bowl of Cereal' date='04/23' media='knee_deep' description='Ever had the sudden urge to construct a 9,000+ pound cereal bowl? Of course not. In case you ever do, this guide is here to help.' link='cocoa-puffs' mediaBlur='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAQQDAAAAAAAAAAAAAAAAAQQCAwURFDFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRMf/aAAwDAQACEQMRAD8Amm5KTyJG609XF2vAAE8K0lp//9k='/>
            <BlogCard name='For the Student Dreading the End of University' date='01/23' media='grad' description='A letter written to my younger self, and any other students who are currently feeling lost.' link='new-beginning' mediaBlur='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIDBBFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ+3blbFEiZmcAAH/9k='/>
            <div className='text-2xl font-bold mt-7 md:mt-14'>
              Random Posts
            </div>
            <BlogCard name='Italy on Film' date='09/23' media='Italy-16' description='A collection of some pictures I took from my trip to Italy.' link='italy' mediaBlur='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABqAIkDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACgQAQACAQMDAwQDAQAAAAAAAAABAgMEEWEhMVESFEEFE0JSM3GBkf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAGxEBAQEAAwEBAAAAAAAAAAAAAAERAhIhUUH/2gAMAwEAAhEDEQA/APZgAAAMW7Mo8ltoBBllRzStZbKWazTKpmlQzSt5rKOayIq5ZQTPVvlurTk6iLFZT0lSpdYpduNxcpKasqtLpq3aaWIk3RRdn1qr2g19UeT1w4MthFOWIR2z8gmteIVsmRFfNyrZM3KjfLkUs2RjLm5U82blNZa5sihny92c+eI36uXqNTvv16M3kzaznz99pVLZuvRHe82nhosn1Zx+p6amYnqt4tTE/LmsxMx2blbnjuY80eU9crg01Fq/KxTVy3LK3JrtRlZ+7y5Maxn3n9tYvV773PLE6nlwvfR5YnXR5efWcdq2p5RW1PLjW10fsiv9Qr+ydkx176nlXyanlx8n1KsflCpl+pxPad07fErr5dVHlQz6yI36uXk1t79le17W7ymcqzlqzn1U2npO6ra02neWBuSRZMAFUAAABnefJ6p8sAan91l/aWJ1OWfzlCJka7VvObJP5z/1rNrT3tM/6wGRNoAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALvsbeGltHePiXovsR4aWwR4dfPjfjzdsF694lHMTD0V9PHhTz6Os/B1lZuOQJs2Ccc9e3lFMbMcuNiMAMgAAAAAAAAAD3HoazRK1s6Kr3orZKLllfIo5upxRMT0cnJX02mHbz9pcfP/JLpPZjH6gAeZoAAAAAAAAAB/9k='/>
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
            <div className='text-xl mt-7'>
              <a href='https://geohot.github.io/blog/' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>George Hotz</span></a>
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
  