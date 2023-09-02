import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../../components/Navbar';

const BlogPost: NextPage = () => {
  const styledLink = (text: string, link: string) => (
    <a href={link} target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>
        {text}
    </a>
  )
    return (
      <div className='font-lato w-full flex bg-gradient-to-b from-white to-light-mint select-none'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Life is suffering, but is that a bad thing?" />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
        <div className='text-navy text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
              Romanticization of the Doomer in Postmodern Western Society
            </div>
            <div className='text-xl child:mt-5 mt-8'>
              <div className='flex justify-center'>
                  <Image width={700} height={466} src={"/img/blog/doom2.jpg"} alt="doomer" className='rounded-xl'/>
              </div>
              <p>In the shadows of our digital age, a peculiar figure has emerged, captivating the minds of a substantial subset of Western society. With melancholy and mystery, the Doomer archetype has become a symbol of detachment that serves as a welcomed distraction for those without direction.</p>
              <p>This post will dissect who the Doomer archetype represents, explore the cultural factors that led to its rise in popularity in the West as well as the future of its cultural impact, and finally, I&apos;ll share some advice from the OG, 19th-century Doomer philosophers, in case you find yourself in a state of empathy.</p>
              <p className='text-3xl font-bold pt-3'>The Doomer</p>
              {/* <p>If you&apos;re not as chronically online as me and aren&apos;t familiar with who the Doomer depicts, this section is for you.</p> */}
              <p>The origins of the Doomer come from 4chan in 2018 when users began creating caricatures using the -oomer suffix, derived from &quot;{styledLink("boomer", "https://en.wikipedia.org/wiki/Baby_boomers")}&quot;, to mock a variety of different online groups. One of these caricatures, the &quot;Doomer,&quot; was described as a 20-something who had &quot;simply stopped trying.&quot;</p>
              <p>The archetype initially embodied nihilism and despair, with a belief in the impending end of the world, whether that be due to the climate apocalypse, opioid crisis, or unavoidable nuclear armageddon. Since then, however, the definition has evolved to be more amorphous.</p>
              <p>Nowadays, while anyone can be a Doomer, the stereotypical Doomer is depicted as a man in their early 20s who feels a sense of aimlessness or loneliness and is consequently stricken with a deep despair for life; through their lens, life is void of meaning, and the world is inevitably doomed by humanity&apos;s ignorance, greed, and futility.</p>
              <p>As a result, the Doomer sees little to no reason to engage in traditional pursuits and instead retreats from society into apathetic isolation.</p>
              <p>While online depictions of the Doomer often involve smoking, binge drinking, or consuming antidepressants like candy, these actions are outcomes rather than root causes. Ultimately, anyone can adopt the mindset of a Doomer, irrespective of their vices or circumstances.</p>
              <p>Now that we have a better idea of the archetype that the Doomer caricature portrays, we&apos;ll look into the cultural currents and societal shifts that have allowed Doomer ideologies to gain traction in postmodern Western society.</p>
              <p className='text-3xl font-bold pt-3'>A Lonlieness Epidemic</p>
              <p>While there are a variety of factors that have propelled the Doomer into the spotlight, increasing loneliness among the youth takes the cake by far.</p>
              <p>Loneliness in young adults has been on the rise for over a decade. My original intention was to regurgitate some statistics about this fact to emphasize this point. However, I&apos;ll assume you don&apos;t want to read random internet stats as much as I don&apos;t want to copy-paste them. So I&apos;ll spare your time. But, just in case you really want the numbers, {styledLink("here", "https://newsroom.osfhealthcare.org/the-pandemic-loosens-its-grip-but-loneliness-epidemic-keeps-a-tight-hold/")} {styledLink("are", "https://www.bbc.co.uk/programmes/articles/2yzhfv4DvqVp5nZyxBD8G23/who-feels-lonely-the-results-of-the-world-s-largest-loneliness-study")} {styledLink("a", "https://newsroom.thecignagroup.com/loneliness-epidemic-persists-post-pandemic-look")} {styledLink("few", "https://d25d2506sfb94s.cloudfront.net/cumulus_uploads/document/m97e4vdjnu/Results%20for%20YouGov%20RealTime%20%28Friendship%29%20164%205.7.2019.xlsx%20%20%5BGroup%5D.pdf")} {styledLink("studies", "https://www.campaigntoendloneliness.org/facts-and-statistics/")}, and let&apos;s move on.</p>
              <div className='flex justify-center'>
                <Image width={500} height={300} src={"/img/blog/v_graph.jpg"} alt="v_graph" className='rounded-xl'/>
              </div>
              <p>Those who are detached from reality might be quick to point their fingers at social media and video games as the scapegoat for this occurrence. And while they&apos;re partially correct, the core of the problem is far more multivariable.</p>
              <p>To start, the notion of community has been slowly disintegrating since the advent of the digital age. Not only have {styledLink("Third Places", "https://en.wikipedia.org/wiki/Third_place")} been becoming progressively {styledLink("less common", "https://www.aier.org/article/the-death-and-life-of-the-great-third-place/#:~:text=Third%20places%20are%20dying%20every,or%20work%20(second%20place).")} among younger generations, but their online replacements come with their own abundance of problems.</p>
              <p className='text-2xl font-bold'>Counterfeit Friends</p>
              <p>Let&apos;s say that you&apos;re part of a small to medium-sized online community. This community could center around some sort of hobby, video game, or influential person you and other internet drifters are interested in. For the sake of this example, you&apos;re an active member of this community, and you frequently and proudly engage with it.</p>
              <p>Depending on who you are as a person, a range of different titles exist that you might prescribe to the other active members of this community. Some people will call them acquaintances and leave it at that, while others might refer to the other members as being their close friends.</p>
              <p>The latter scenario is where epistemic concerns arise. While it&apos;s not impossible to develop and maintain relationships with others in an online environment, it&apos;s {styledLink("statistically unlikely", "https://link.springer.com/article/10.1007/s10676-011-9284-4")}.</p>
              <p>If you disagree with this, try putting your current closest friends, both online and not, through the litmus test of an imaginary scenario. By envisioning who would be there for you when you need someone the most, whether that be to pick you up at 3 in the morning or post your bail, you can develop a stronger sense of who your true friends are.</p>
              <p>The unfortunate reality of these faux friendships is that they&apos;re often unidirectional, causing whoever&apos;s behind them to perceive that they&apos;re socially thriving when they&apos;re actually living in the Matrix.</p>
              <p className='text-2xl font-bold'>The Inescapable Abyss</p>
              <p>Another issue with the internet is that it is an infinite abyss. Every corner of it breaks apart into infinitely smaller permutations, and for better or worse, nearly all these permutations have communities surrounding them.</p>
              <div className='flex justify-center'>
                  <Image width={400} height={300} src={"/img/blog/mandel.jpg"} alt="Mandelbrot Fractal" className='rounded-xl'/>
              </div>
              <p>The more time you spend online, the more you&apos;re susceptible to engaging with more and more niche communities until you eventually end up in excessively esoteric territory.</p>
              <p>Some might see this as a great thing, after all, what type of loser wants to be the NPC who only interacts with mainstream fads? While I&apos;m not saying we should all throw critical thinking out the door and become part of the herd, I believe there&apos;s danger in aimlessly delving into the bottomless abyss.</p>
              <p>As one continues to delve without an end in sight, they&apos;re increasingly likely to find radical communities that, on the surface, seem perfectly fine to engage with since they&apos;ve been exploring near space for a while. However, if any ordinary member of society even glanced at the same communities, they would be appalled.</p>
              <p>Once one chooses to engage with or consume from one of these communities, characteristics and tendencies from it might begin leaking into their personality. Depending on just how radical these communities are, those engaging in them could be on the path of putting their future and current friendships in jeopardy.</p>
              <p>The fact that the internet has enabled people to live entirely online isn&apos;t much help here. Not only is it possible to work, shop, date, and so much more from home, but it&apos;s often societally encouraged.</p>
              <p>If you don&apos;t want to escape the infinite abyss, you don&apos;t have to.</p>
              <p className='text-2xl font-bold'>Hyper Optimization</p>
              <p>Picture this. It&apos;s 50 years ago, and you&apos;re a young adult living in an average-sized town. One morning, you wake up and decide you want to become a top 5%, high-value person.</p>
              <p>You decide to make an agenda on how you&apos;ll achieve this:</p>
              <ul className='pl-10'>
                <li className='pb-2'>• Get a job with modest benefits</li>
                <li className='pb-2'>• Buy a reliable car, maybe a nice Cadilac</li>
                <li className='pb-2'>• Mortgage a decent house</li>
                <li className='pb-2'>• Start saving some money</li>
                <li>• Eat healthy and start taking care of yourself</li>
              </ul>
              <p>Hopefully, we agree that these are all relatively normal things by today&apos;s standards.</p>
              <p>Let&apos;s fast forward to now. Regardless of where you&apos;re geographically located, you&apos;re no longer in an average-sized town. You have new competition now &mdash; every person on this planet with an internet connection. The peak of your dominance hierarchy is occupied by the Tates, Musks, and Rogans of the world (extrapolate this to prominent figures outside the {styledLink("Manosphere", "https://en.wikipedia.org/wiki/Manosphere")} too, if you must). This large of a hierarchy has never before happened in human history.</p>
              <div className='flex justify-center'>
                  <Image width={450} height={300} src={"/img/blog/alpha.jpg"} alt="hierarchy" className='rounded-xl'/>
              </div>
              <p>If you opt into playing this new game, everything turns into endless improvement and competitiveness. As you get more competitive, the risk of failing becomes increasingly daunting as it will set you back. So, instead of participating in trial and error to achieve your goals at a delayed pace, you opt to optimize your life such that you get everything right the first time.</p>
              <p>Everywhere there was previous trial and error, you instead apply this newfound optimization.</p>
              <p>You think, instead of going to the gym to become healthier, why not take it a step further and decide to optimize your fitness journey. You choose to optimize everything. Optimal rep ranges for only the most optimal lifts, optimal dosages of supplements, optimal rest durations, optimal ratios of macros consumed at the optimal times of the day, etc., etc., etc.</p>
              <p>Soon enough, you&apos;ll be on anabolic steroids &quot;for extra gains&quot; despite knowing the risk of arriving on death&apos;s doorstep on your 40th birthday.</p>
              <p>But it doesn&apos;t stop at weight lifting, this hyper optimization is everywhere.</p>
              <p>Optimized practices in the music industry have created the lowest common denominator of hip-hop and bubblegum pop. Mr. Beast creates content for the widest possible audience. Results-oriented businesses always beat &quot;passionate&quot; businesses.</p>
              <p>So much accumulated knowledge and examples of success exist, that all life has become is min-maxing to create the most broken build.</p>
              <p>While the internet undoubtedly has had damaging effects on young adults&apos; psyches, leading some of them to question life&apos;s meaning, a subgenre of media has simultaneously been growing in popularity for these newfound Doomers to cling to.</p>
              <p className='text-3xl font-bold pt-3'>The Rise of Literally Me</p>
              <p>When composing a new movie or TV show, one of the goals screenwriters are often guided by is to create characters that the audience can relate to.</p>
              <p>In most media, you might partially see a bit of yourself in the characters, but occasionally, a film or show appears with a character who strikes such a chord that you say &quot;it&apos;s literally me.&quot;</p>
              <p>While this never actually occurs in reality, the Literally Me subgenre was created as a mix between a coping mechanism and a joke to keep track of the media that contains such characters.</p>
              <div className='flex justify-center'>
                <a href='https://www.youtube.com/watch?v=MEWjPtTOMZo' target="_blank" rel="noreferrer" className='hover:cursor-nesw-resize'>
                  <Image width={533} height={300} src={"/img/blog/me.jpg"} alt="literally me" className='rounded-xl'/>
                </a>
              </div>
              <p>Within it, you&apos;ll find disconnected and extreme characters who often experience tragedy due to their shortcomings. Among many others, Literally Me characters include Patrick Bateman from American Psycho, Arthur Fleck from The Joker, Tyler Durden from Fight Club, Travis Bickle from Taxi Driver, and Walter White from Breaking Bad.</p>
              <p>If you&apos;ve seen these movies, you likely can draw the lines between these characters, otherwise, this is your obligatory spoiler warning for the next paragraph.</p>
              <p>Baetman&apos;s obsession with fitting in caused him to express himself in extreme ways, making him lose touch with his sense of humanity. Durden&apos;s desire for more than just consumerism combined with his mental health issues resulted in a self-operating cult with the goal of overthrowing society&apos;s power structures. And Travis Bickle&apos;s traumatic past, combined with his insomnia, causes him to lose touch with reality, initiating his descent into madness.</p>
              <p>It only makes sense that as young adults navigate their way through this world, they would find solstice in these movies and shows, as they represent exaggerated examples of what they experience on a day-to-day basis.</p>
              <p>This might seem unhealthy to some, however, it offers these self-declared Doomers a piece of media that they can hold close in a world that often shies away from representing these topics in media without explicitly villainizing them.</p>
              <p>And hile no one sees themselves as actually being Patrick Bateman, the Literally Me subgenre has developed a growing community that glorifies these characters&apos; struggles through memes and romanticized edits.</p>
              <div className='flex justify-center'>
                <iframe
                  width="700"
                  height="466"
                  src={`https://www.youtube.com/embed/XuQUvdYQMlk`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  className='rounded-xl'
                />
              </div>
              <p>For most, before stumbling upon these films and shows, they&apos;ve likely never associated with the lives of any of these characters. However, once they take their first drink from the firehose of this content and see the admiration shown to the characters for their resilience, they might decide to join the community of self-proclaimed outcasts.</p>
              <p>In doing so, they&apos;re choosing to be miserable together by exacerbating the problems that essentially all young people have in order to fit in with the group so that they can feel like the main character of their own tragic life.</p>
              <p className='text-3xl font-bold pt-3'>Depression as a Vice</p>
              <p>The final reason, in this post, at least, that the Doomer has risen to notoriety is the age-old adage that there is beauty in suffering.</p>
              <p>By observing pop culture, one can start to pick up on how artists express their negative emotions through their work, attempting to resonate with others online with similar grievances.</p>
              <p>The intentions of these artists, more often than not, are to provide a glimmer of hope in the world. They overcame the trials that life threw at them, so you can too. And in many cases, these works of art can be just the thing that someone needs to cope with what they&apos;re going through until they eventually develop the strength to overcome it.</p>
              <p>But for every person who overcomes this negativity, there&apos;s another who gets lost in the beauty and aesthetic that exists in suffering. Without suffering, life can feel meaningless. If you don&apos;t believe me, try finding any compelling show to watch that lacks drama, tension, or heartache.</p>
              <p>These negative aspects of life have an alluring aesthetic on their own, and nowadays, social media has been capitalizing on our tendency to draw toward negativity, which has brought the Doomer out of many of us.</p>
              <p className='text-3xl font-bold pt-3'>Existential Band-Aids</p>
              <p>Due to the limited reach of this post, speculating macro solutions to any of the prior phenomena likely wouldn&apos;t be of much help to anyone.</p>
              <div className='flex justify-center'>
                  <Image width={500} height={300} src={"/img/blog/n-s.jpg"} alt="Nietzsche and Schopenhauer" className='rounded-xl'/>
              </div>
              <p>Instead, I&apos;ll use this final section to pass forward the micro advice of 19th-century philosophers Nietzsche and Schopenhauer, who were Doomers before it was trendy.</p>
              <p className='text-2xl font-bold'>Nihilism</p>
              <p>The brainchild for which Friedrich Nietzsche is most commonly credited is Nihlism. It&apos;s the belief that nothing in life has any fundamental meaning and that life will always involve suffering through this meaninglessness.</p>
              <p>For Nietzsche, this meaninglessness doesn&apos;t suggest that we should retreat into a dull and apathetic life, but rather the realization that life is meaningless permits us to look inside ourselves and create our own meaning and self-identity.</p>
              <p>Life is, and always will be, endless suffering. The Doomer archetype simply represents a heightened awareness of this fundamental truth. Through the lens of Nietzsche, the key to life is found in how you interact with this suffering.</p>
              <p>Rather than caving into the hardships that life brings and falling into a lethargic state of indifference, you must deliberately tread through the mud of life, realizing that there will be ongoing pains and challenges.</p>
              <p>But instead of turning away from these adversities, you must lean into them and face the sufferings head-on. In doing so, you invite suffering in and recognize it as an opportunity to develop wisdom and resilience.</p>
              <p>Only then can you create your own purpose in the wake of life&apos;s underlying futility.</p>
              <p className='text-2xl font-bold'>Pessimism</p>
              <p>Like peanut butter and jelly, you can&apos;t just mention Nietzsche without acknowledging the work of Arthur Schopenhauer when assembling your existential sandwich.</p>
              <p>Schopenhauer, the Father of Pessimism, had a nearly identical initial outlook as Nietzsche. He claimed that life is riddled with unavoidable pain and absurdity, and because of this, we&apos;re kept prisoner by our unconscious primitive instincts to survive, reproduce, and preserve existence. Everything in life is merely a product of these invisible forces, void of any purpose except to sustain itself.</p>
              <p>The real problem isn&apos;t with this realization of life&apos;s meaningless suffering but how we handle it. Schopenhauer offered guidance in the form of two different solutions for this realization.</p>
              <p>The first was asceticism, that is, the disciplined avoidance of pleasure. To undertake asceticism, you must overcome your unconscious desire and pursuit for the selfish and material (i.e. vanity, sex, status, etc.)</p>
              <div className='flex justify-center'>
                  <Image width={450} height={300} src={"/img/blog/monk.jpg"} alt="Thích Quảng Đức" className='rounded-xl'/>
              </div>
              <p>He claimed that by taking control over the ceaseless yearning of this world, you can find a form of happiness in the present moment. However, he also specified that due to the amount of discipline and commitment this would require, it would be a nearly impossible task, even for the wisest of individuals.</p>
              <p>His alternative solution was to engage in art and philosophy.</p>
              <p>To do this, you must first explore and find your creative outlet, whether poetry, theater, music, painting, literature, etc. Schopenhauer professed that these outlets have the power to reveal a truth that liberates the individual from the absurdity of this world in the moments in which they&apos;re engaging in them.</p>
              <p>If one is to express their felt pain and absurdity through one of these outlets, the pain and absurdity can be transmuted into wonder and purpose for oneself as well as the world.</p>
              <p>The Doomer archetype and its surrounding community perfectly embody this idea. By creating, sharing, and engaging with Doomer content as a means of expressing your sense of doom, you&apos;re translating it into something meaningful and enjoyable instead.</p>
              <p>Which brings us to this post. After spending far too many hours consuming Philosophy Lite™ from {styledLink("Sisyphus 55", "https://www.youtube.com/@Sisyphus55")}, {styledLink("Fads", "https://www.youtube.com/@Fads")}, {styledLink("oliSUNvia", "https://www.youtube.com/c/oliSUNvia")}, {styledLink("Art Chad", "https://www.youtube.com/@artchad")}, {styledLink("Pursuit of Wonder", "https://www.youtube.com/@PursuitofWonder")}, and {styledLink("Du Cinema", "https://www.youtube.com/@DuCinema1")} (all of whom are fantastic and were instrumental in the creation of this post), I chose to take my hand at creating content within the space.</p>
              <p>And after doing so, I couldn&apos;t agree with Schopenhauer more. So, if you empathized with the Doomer at any point in this post, I encourage you to find your creative outlet and follow in my footsteps.</p>
              <p>Armed with that outlet, go forth into the world and express your own doom.</p>
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