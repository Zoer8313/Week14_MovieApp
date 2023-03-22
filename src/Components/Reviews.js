//a container inside of a Movie that houses Review components

import React, { useState } from "react";
import ReviewList from "./ReviewList";
import EachReview from "./EachReview";
import CreateReview from "./CreateReview";

export default function Reviews() {

   const [reviews, setReviews] = useState(ReviewList); 

    return (
        <div>
            <div className = "review-header">
            <h4><b>Reviews:</b></h4>
            </div>
        <div>
            {reviews.length > 0 ? reviews.map((item, index) => {
                return <EachReview review = {item} key = {index}/>
            }) : "No reviews."}
        </div>
        <div>
            <CreateReview />
        </div>
       </div> 
    )
}