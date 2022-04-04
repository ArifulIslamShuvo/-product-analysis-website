import React from 'react';

const Review = (props) => {
    const {id, name, review, rating, img} = props.review;
    return (
        <div  className='rounded-2xl h-[200px] bg-sky-200 p-4'>
            <div className=''>
                <img className='rounded-full w-[50px] h-[50px]' src={img} alt="" />
            </div>
            <div className=''>
            <h2>Name: {name}</h2>
            <p>review: {review}</p>
            <p>Rating:{rating}</p>
            </div>
        </div>
    );
};

export default Review;