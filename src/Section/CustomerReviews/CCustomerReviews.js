import React from 'react';
import { reviews } from '../../constants/Index';
import ReviewCard from '../../Component/ReviewCard';

const CustomerReviews = () => {
  return (
    <div className='container mx-auto p-8'>
      <h3 className='text-3xl font-semibold text-center mb-4'>
        What Our <span className='text-orange-500'>Customers</span> Say?
      </h3>
      <p className='max-w-lg mx-auto text-center text-gray-600 mb-8'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
