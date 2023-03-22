import React from "react";

export default function EachReview(props) {
    return (
        <div>
           <div className = "review-card">
            <div className = "cardHeader">
                <span className = "name">
                     <b>{props.review.name}</b>
                </span><br />
                <span className = "rating">
                    {props.review.rating}
                </span><br />
                <span className = "comment">
                    {props.review.comment}
                </span><br />
            </div>
           </div>
        </div>
    )
}