import PortfolioHeader from './PortfolioHeader';

const Portfolio = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-pine to-navy">
            <div className='mx-auto w-3/4 pt-32'>
                <div className='mb-8'>
                    <PortfolioHeader text={"// Just your average Joe"} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='mr-4'>
                        <p className='text-mint text-xl'>
                            &lt;present&gt;
                        </p>
                        <p className='text-white text-xl mt-5 ml-6'>
                            👕 Software Engineer at Kohl&apos;s
                        </p>
                        <p className='text-white text-xl mt-8 ml-6'>
                            🌏 Learning Korean, 안녕하세요!
                        </p>
                        <p className='text-white text-xl mt-8 mb-5 ml-6'>
                            🦜 Messing around with <a href='https://github.com/hwchase17/langchain' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>LangChain</a>
                        </p>
                        <p className='text-mint text-xl pb-5'>
                            &lt;/present&gt;
                        </p>
                    </div>
                    <div>
                        <p className='text-mint text-xl'>
                            &lt;past&gt;
                        </p>
                        <p className='text-white text-xl mt-5 ml-6'>
                            🎓 Graduated from the Milwaukee School of Engineering
                        </p>
                        <p className='text-white text-xl mt-8 ml-6'>
                            🏭 Interned at Rockwell Automation and MSI Data
                        </p>
                        <p className='text-white text-xl mt-8 mb-5 ml-6'>
                            🧀 Wisconsin native, born and raised
                        </p>
                        <p className='text-mint text-xl'>
                            &lt;/past&gt;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;