import React from 'react';

const Home = () => {
    return (
        <div className='mt-10 grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
            <div className='ml-10'>
                <h2 className='text-5xl font-bold'><span>2022 Land Rover</span>Range <span className='text-rose-700'> Rover</span></h2>
                <p className='mt-10 text-lg text-gray-600'>With its floating roofline, continuous waistline and lower accent graphics, 
                <br />
                we haven't set out to reimagine the Range Rover—we've simply made it better.</p>
                <button className='rounded-md h-10 w-40 bg-gradient-to-r from-cyan-600 to-blue-500 mt-5'>Live demo</button>
            </div>
            <div>
                <img className='' src="https://www.ccarprice.com/products/Land-Rover-Range-Rover-Evoque-P250-SE-2020.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;