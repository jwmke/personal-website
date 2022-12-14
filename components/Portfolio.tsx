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
                        <p className='text-mint text-2xl'>
                            &lt;present&gt;
                        </p>
                        <p className='text-white text-2xl mt-5 ml-6'>
                            π Software Engineer at Kohl&apos;s
                        </p>
                        <p className='text-white text-2xl mt-8 ml-6'>
                            π Learning Korean, μλνμΈμ!
                        </p>
                        <p className='text-white text-2xl mt-8 mb-5 ml-6'>
                            β‘ Electric Longboarding Fanatic
                        </p>
                        <p className='text-mint text-2xl pb-5'>
                            &lt;/present&gt;
                        </p>
                    </div>
                    <div>
                        <p className='text-mint text-2xl'>
                            &lt;past&gt;
                        </p>
                        <p className='text-white text-2xl mt-5 ml-6'>
                            π Graduated from the Milwaukee School of Engineering
                        </p>
                        <p className='text-white text-2xl mt-8 ml-6'>
                            π­ Interned at Rockwell Automation and MSI Data
                        </p>
                        <p className='text-white text-2xl mt-8 mb-5 ml-6'>
                            π§ Co-founded a competitive robotics organization
                        </p>
                        <p className='text-mint text-2xl'>
                            &lt;/past&gt;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;