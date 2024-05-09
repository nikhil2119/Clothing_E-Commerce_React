import React, { useState, useEffect } from 'react';
import starimg from "./Images/star-icon-white-background_212417-976-removebg-preview.png";



const ReviewForm = ({ onAddReview }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview({ rating, reviewText });
    setRating(0);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rating-buttons">
        <button className='star-rating-container' type="button" onClick={() => handleRatingChange(1)}><img src={starimg} alt="" className='star-rating' /></button>
        <button className='star-rating-container' type="button" onClick={() => handleRatingChange(2)}><img src={starimg} alt="" className='star-rating'/></button>
        <button className='star-rating-container' type="button" onClick={() => handleRatingChange(3)}><img src={starimg} alt="" className='star-rating'/></button>
        <button className='star-rating-container' type="button" onClick={() => handleRatingChange(4)}><img src={starimg} alt="" className='star-rating'/></button>
        <button className='star-rating-container' type="button" onClick={() => handleRatingChange(5)}><img src={starimg} alt="" className='star-rating'/></button>
      </div>
        Review:
      <label>
        <textarea value={reviewText} onChange={handleTextChange} />
      </label>
      <br />
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
  
};

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <br />
      {reviews.map((review, index) => (
        <div key={index} className='line-left-after-rating'>
          <p>Rating: {review.rating} Stars</p>
          <p>Review: {review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (storedReviews) {
      setReviews(storedReviews);
      calculateAverageRating(storedReviews);
    }
  }, []);

  const calculateAverageRating = (reviews) => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((acc, cur) => acc + cur.rating, 0);
      const avgRating = totalRating / reviews.length;
      setAverageRating(avgRating.toFixed(1));
    } else {
      setAverageRating(0);
    }
  };

  const addReview = (newReview) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    calculateAverageRating(updatedReviews);
  };

  return (
    <div className='ratingArea'>
      <h2 className='Average-Rating'>{averageRating}</h2>
      <br />
      DON'T FORGET TO WRITE A REVIEW
      <ReviewForm onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Review;
