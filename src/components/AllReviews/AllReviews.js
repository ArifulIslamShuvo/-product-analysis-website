import React from 'react';

const AllReviews = (props) => {
    const {name, review, rating, img} = props.review;
    return (
        <div  className='rounded-2xl h-[250px] bg-sky-100 p-5 shadow-lg'>
            <div className='flex justify-center'>
                <div><img className='rounded-full w-[60px] h-[60px]' src={img} alt="" /></div>
            </div>
            <div className='p-4'>
            <h2 className='text-2xl text-bold text-b border-l-black-50 mb-2'>Name: {name}</h2>
            <p>review: {review}</p>
            <p>Rating:{rating}</p>
            </div>
        </div>
    );
};

export default AllReviews;