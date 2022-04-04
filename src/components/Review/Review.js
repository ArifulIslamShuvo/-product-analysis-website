import React from 'react';

const Review = (props) => {
    const {id, name, review, rating, img} = props.review;
    return (
        <div  className='rounded-2xl h-[250px] p-5 bg-lime-200 shadow-lg shadow-cyan-400/50'>
            <div className='flex justify-center'>
                <div><img className='rounded-full w-[60px] h-[60px]' src={img} alt="" /></div>
            </div>
            <div className='p-4 text-center'>
            <h2 className='text-2xl text-bold text-b border-l-black-50  mb-2'>Name: {name}</h2>
            <p><span className='text-rose-700'>review:</span> {review}</p>
            <p>Rating:{rating}</p>
            </div>
        </div>
    );
};

export default Review;