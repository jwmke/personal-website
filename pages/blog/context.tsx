import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
    const styledLink = (text: string, link: string) => (
        <a href={link} target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>
            {text}
        </a>
    )

    return (
      <div className='font-lato w-full flex bg-gradient-to-b from-white to-light-mint'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="The Lasting Significance of the LLM Context Window Problem" />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar bg/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-navy text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
                The Lasting Significance of the Context Window Problem
            </div>
            <div className='text-xl child:mt-5 mt-8'>
            <div className='flex justify-center'>
                <div className='inline-block text-center text-xs'>
                    <Image width={700} height={466} src={"/img/blog/window3.jpg"} alt="knee_deep" className='rounded-xl'/>
                    <p>&quot;The Context Window&quot; by DALL-E</p>
                </div>
            </div>
              <p>Like most in tech, I&apos;ve been perpetually drowning in all of the recent news regarding LLMs. While all of this hype can be tedious, it&apos;s admittedly appropriate as the entire domain is currently in a gold rush for innovation. One week an unforeseen challenge with LLMs is pointed out, the next week five workarounds have been cobbled together, and not even month later the problem has a definitive solution and everyone&apos;s moved on.</p>
              <p>Of course, this isn&apos;t true for every issue that arises. In Phillip Carter&apos;s article on {styledLink("The Difficulties of Building with LLMs", "https://www.honeycomb.io/blog/hard-stuff-nobody-talks-about-llm")}, he discusses a few challenges that don&apos;t have an objective solution. These include the lack of best practices with prompt engineering, the unavoidable risk of {styledLink("prompt injections", "https://simonwillison.net/2023/May/2/prompt-injection-explained/")}, and the concern we&apos;ll specifically be delving into in this post, the limitations of the LLM context window.</p>
              <p>You might ask, what makes me qualified to evaluate this semi-complicated topic? Aside from a small {styledLink("hobby project", "https://github.com/jwmke/BiasCompass")} and a day or so of research, honestly not much. I only recently bit the bullet that the realm of building with LLMs won&apos;t be a specialized niche done by a handful of overachieving engineers, but rather, it will be an essential skill that all developers will need to stash in their toolkit to survive.</p>
              <p>But, then again, less than 18 months ago, I made the same claim regarding smart contracts, so I digress.</p>
              <p className='text-3xl font-bold pt-3'>What&apos;s a Context Window</p>
              <p>The amount of input an LLM can consume as well as the output it can produce, is finite. The magnitude of this combined finiteness is called the LLM&apos;s context window.</p>
              <p>More technically speaking, the context window is the total number of tokens an LLM can process at inference time. The general {styledLink("rule of thumb", "https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them")} for these tokens is that 100 of them represent around 75 words.</p>
              <p>Therefore, when interacting with a model such as {styledLink("GPT-3.5", "https://platform.openai.com/docs/models/gpt-3-5")}, which has a context window of around 4000 tokens, your input prompt, any additional data you might want to pass it, and the model&apos;s response are all confined to being less than 3000 words.</p>
              <p>This might not seem like an enormous deal at first, as 3000 words are more than enough for the majority of trivial consumer use cases. However, when trying to unlock the full potential of LLMs for anything that&apos;s more state-of-the-art, this limitation can become a severe handicap.</p>
              <p className='text-3xl font-bold pt-3'>Bigger is Better, Right?</p>
              <p className='italic'>&quot;Everything that exceeds the bounds of moderation has an unstable foundation.&quot;<br/>Lucius Seneca</p>
              <p>As with most things in life, there&apos;s no straightforward answer here. At the time of writing this, OpenAI has a flavor of {styledLink("GPT-4", "https://platform.openai.com/docs/models/gpt-4")} that has a 32k token context window, and another startup called {styledLink("Anthropic", "https://www.anthropic.com/index/100k-context-windows")} has an LLM with a context window of 100k tokens. While the {styledLink("benefits", "https://www.promptengineering.org/claudes-100k-context-window-how-this-will-transform-business-education-and-research/")} of these inflated context windows are consistently in the spotlight, their less-glamorous cons aren&apos;t as frequently discussed.</p>
              <p className='text-2xl font-bold'>$$$</p>
              <p>The first issue we run into is that the memory and time costs of inference with the attention mechanism of LLMs {styledLink("scale quadratically", "https://lilianweng.github.io/posts/2023-01-10-inference-optimization/")} with the size of their context window. In English, this means when going from 32k to 64k length of context window, it isn&apos;t 2x as expensive, but 4x more expensive.</p>
              <div className='flex justify-center'>
                  <Image width={468} height={244} src={"/img/blog/graph.jpg"} alt="graph" className='rounded-xl'/>
              </div>
              <p>At the moment, this is a rather big deal since it costs {styledLink("just under $2", "https://news.ycombinator.com/item?id=35841708")} to prompt GPT-4 with 32k tokens, despite OpenAI charging a flat amount per 1k tokens <p className='inline text-sm'>(if I had to speculate why they do this, I&apos;d say it&apos;s likely for increasing customer loyalty by offering a less confusing pricing model at the expense of reduced profit margins)</p>.</p>
              <p>However, this is the weaker of my critiques against using an inflated context window since:</p>
              <ol className='pl-10'>
                <li className='pb-2'>1. Computation is dirt cheap and will continue to become dirt cheaper; {styledLink("rest easy Gordon Moore", "https://www.makeuseof.com/tag/what-is-moores-law-and-what-does-it-have-to-do-with-you-makeuseof-explains/")}</li>
                <li className='pb-2'>2. Researchers at Meta have allegedly {styledLink("broken the sub-quadratic barrier", "https://arxiv.org/pdf/2305.07185.pdf")}, and even if they haven&apos;t, more breakthroughs will be inevitable with time</li>
              </ol>
              <p className='text-2xl font-bold'>No Silver Bullets</p>
              <p>The second issue with increasing the context window size is that it isn&apos;t as much of a magical silver bullet for existing LLM problems as you might think. In Chelsy Ma&apos;s article on {styledLink("whether large context windows are a trend", "https://medium.com/@machangsha/foundation-model-101-is-large-context-window-a-trend-22e352201099")}, she points out that &quot;expanding the context window alone contradicts Lev Vygotsky&apos;s {styledLink("Zone of Proximal Development", "https://en.wikipedia.org/wiki/Zone_of_proximal_development")} (ZPD) theory.&quot; Now what on earth does that mean?</p>
              <p>Ma goes on to explain that &quot;according to ZPD theory, the key to bringing learners to the next level is to identify their zone (through prompt engineering LLMs) and scaffold with tailored instructions (fine-tuning LLMs). A teacher wouldn&apos;t give a student a 100-page book (long context) and ask the student to answer any questions (text generation). Instead, the right way is to instruct (fine-tuning) the student (LLM) to build the knowledge (model skills).&quot;</p>
              <p>This excerpt demonstrates two main points. The first is that LLMs cannot retain information from prompt to prompt. Meaning, that every time you prompt, the same context data needs to be provided and relearned by the LLM again. </p>
              <p>This is absurdly inefficient.</p>
              <p>If you&apos;ve interacted with ChatGPT before, this might be counterintuitive, as you might recall that it can remember details from the conversation history. However, this is just an illusion, as behind the scenes, OpenAI is {styledLink("feeding the whole conversation", "https://ai.stackexchange.com/a/38262")}, or perhaps even an LLM-created summary of it, into the prompt every time you send a new message to the agent.</p>
              <div className='flex justify-center'>
                  <Image width={391} height={249} src={"/img/blog/silver.png"} alt="silver" className='rounded-xl'/>
              </div>
              <p>The second takeaway from Ma&apos;s excerpt is that by expanding the context window, all we&apos;re doing is keeping the LLM confined to its existing constraints, i.e. its &quot;current understanding zone,&quot; while throwing more data at it. As Ma puts it, &quot;You cannot count on an LLM to execute any tasks out of its zone.&quot;</p>
              <p>Continuing down this path with the mindset of increasing the context window as an end-all solution for LLM&apos;s interactions with substantial amounts of data is pure laziness, and it will stifle future innovation if we&apos;re not cautious.</p>
              <p>Therefore, we must abandon this mindset and expand our awareness of alternative solutions.</p>
              <p className='text-3xl font-bold pt-3'>Improvise, Adapt, Overcome</p>
              <p className='italic'>&quot;Complaining about a problem without posing a solution is called whining.&quot;<br/>Theodore Roosevelt</p>
              <p>When all is said and done, if you want to digest and analyze large amounts of data with LLMs, you have three main options:</p>
              <p className='text-2xl font-bold'>Context Window</p>
              <p>The first is what we&apos;ve discussed up to this point in the article; find the LLM with the most sizable context window available and throw everything and the kitchen sink into its prompt. While I&apos;ve been overly critical about this option and its pitfalls so far, I&apos;d like to mention that there will still be niche use cases, though far and few in between, where this will be the appropriate option.</p>
              <p className='text-2xl font-bold'>Fine-Tuning</p>
              <p>The second option is to exploit {styledLink("few-shot learning", "https://blog.paperspace.com/few-shot-learning/")} by fine-tuning the LLM on the large data set. The details of this option are still being researched, as academics are trying to determine how to make {styledLink("models not overfit on fine-tuned tasks", "https://arxiv.org/pdf/2211.00635.pdf")}. Unfortunately, once this is solved, this option will still only be applicable in niche cases due to the {styledLink("cons", "https://towardsdatascience.com/overcoming-the-limitations-of-large-language-models-9d4e92ad9823")} it has of the high cost of the fine-tuning process as well as the requirement for the fine-tuning data to be immutable.</p>
              <p className='text-2xl font-bold'>External Search</p>
              <p>The third option, which I&apos;ll broadly call External Search, is currently seen by some as just a hacky workaround to the context window problem. However, I believe it&apos;s not going anywhere anytime soon due to its cost-effectiveness and versatility in comparison to the other options.</p>
              <p>External Search can be widely defined as empowering LLMs to search for and retrieve the exact information they need within a large data set without directly inspecting all of the data during every inference.</p>
              <p>In his article, mentioned earlier in this post, Carter comments that this can currently be done by &quot;using {styledLink("embeddings", "https://platform.openai.com/docs/guides/embeddings/what-are-embeddings")} and praying to the dot product gods that whatever distance function you use to pluck a &apos;relevant subset&apos; out of the embedding is actually relevant.&quot; However, this is one of the most basic and naive searches one can do.</p>
              <p>The backbone of External Search is information retrieval, a massive problem space. So massive that this {styledLink("academic paper", "https://arxiv.org/pdf/2301.08801.pdf")} exists, whose sole purpose is to assemble all other recent advances in information retrieval to provide a starting point for those who want to learn more about the domain.</p>
              <p>Combine information retrieval with other recently developed LLM techniques, such as {styledLink("chunking data", "https://www.pinecone.io/learn/chunking-strategies/#:~:text=In%20the%20context%20of%20building,the%20LLM%20to%20embed%20content.")} and {styledLink("chaining calls", "https://docs.langchain.com/docs/components/chains/index_related_chains")}, and you end up with External Search.</p>
              <p>And if you&apos;re still not sold, a Hacker News user by the name of binarymax provides this excellent perspective in {styledLink("this comment", "https://news.ycombinator.com/item?id=36098681")}: &quot;You can scan an entire book for the part you&apos;re looking for (a huge context window), or you can look it up in the index in the back (a good retriever). The latter is a better approach when you&apos;re serving production use cases. It&apos;s both faster and less expensive.&quot;</p>
              <p className='text-3xl font-bold pt-3'>In Closing</p>
              <p>As time progresses, models with million token context windows and beyond will certainly emerge. However, until breakthroughs that mitigate the aforementioned issues occur, an enlarged context window should not be treated as a silver bullet.</p>
              <p>Instead, ingenuity and innovation from both academics and engineers will be the necessary alternative that will prevail, far beyond the short term.</p>
              <div className='flex justify-center pt-4'>
                <a target="_blank" rel="noreferrer" href='https://notbyai.fyi/' className='hover:cursor-pointer hover:shadow-2xl'>
                  <Image width={132} height={42} src={"/img/blog/human.png"} alt="human"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default BlogPost;