import React from 'react';
import './ReviewItem.scss';

const ReviewItem = ({ review }) => {

    return (
        <div className="reviewItem">
            <div className="container">
                <div className="user">
                    <img className="pp" src={review.userImage || '/images/noavatar.png'} alt="" />
                    <div className="info">
                        <span>{review.userName}</span>
                    </div>
                </div>
                <div className="stars">
                    {Array.from({ length: review.rating }, (_, index) => (
                        <img key={index} src="/star.png" alt="" />
                    ))}
                    <span>{review.rating}</span>
                </div>
                <p>{review.comment}</p>
                <div className="helpful">
                    <span>Helpful?</span>
                    <img src="/like.png" alt="" />
                    <span>Yes</span>
                    <img src="/dislike.png" alt="" />
                    <span>No</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;