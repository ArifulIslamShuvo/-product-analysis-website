import React from 'react';
import ReviewsData from '../../CustomHooks/ReviewsData';
import AllReviews from '../AllReviews/AllReviews';

const Reviews = () => {
    const [reviews, setReviews] = ReviewsData()
    return (
        <div className='mb-5'>
            <h2 className='text-5xl text-center font-bold py-20 text-rose-700'> Ours Customers Reviews </h2>
            <div className='grid-cols-1 md:grid-cols-3 grid gap-4 mx-10'>
                {
                    reviews.map(review => <AllReviews
                        key={review.id} review={review}></AllReviews>)
                }
            </div>
        </div>
    );
};

export default Reviews;