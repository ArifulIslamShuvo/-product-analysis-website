import React from 'react';
import ReviewsData from '../../CustomHooks/ReviewsData';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [reviews, setReviews] = ReviewsData()
    const sliceReviews = reviews.slice(0, 3);
    return (
        <div>
            <div className='mt-10 grid items-center w-full grid-cols-1 gap-12 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div className='p-5'>
                    <h2 className='text-5xl font-bold'><span>2022 Land Rover</span>Range <span className='text-rose-700'> Rover</span></h2>
                    <p className='mt-10 text-lg text-gray-600'>With its floating roofline, continuous waistline and lower accent graphics,
                        <br />
                        we haven't set out to reimagine the Range Rover—we've simply made it better.</p>
                    <button className='text-white text-xl rounded-md h-12 w-40 bg-gradient-to-r from-cyan-700 to-blue-500 mt-5'>Live demo</button>
                </div>
                <div>
                    <img className='p-5' src="https://www.ccarprice.com/products/Land-Rover-Range-Rover-Evoque-P250-SE-2020.jpg" alt="" />
                </div>
            </div>

            <div>
                <h2 className='text-4xl text-center font-bold py-20 text-rose-700'> Customer Reviews</h2>
                <div className='grid-cols-1 md:grid-cols-3 grid gap-4 mx-10'>
                    {

                        sliceReviews.map(review => <Review
                            key={review.id} review={review}></Review>)
                    }
                </div>
                <div onClick={() => navigate(`/reviews`)} className='flex justify-center '>
                    <div><button className='rounded-md text-xl text-bold h-12 w-40 bg-gradient-to-r text-white from-cyan-600 to-blue-500  my-12'>See All Reviews</button></div>
                </div>
            </div>
        </div>

    );
};

export default Home;