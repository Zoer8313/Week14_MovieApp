import React, { useState } from "react";
import ReactStars from "./ReactStars";

export default function CreateReview() {

    //const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [allReviews, setAllReviews] = useState([]);
    const [starRating, setStarRating] = useState(0);

    function handleName(e) {
        setName(e.target.value);
    }

    function handleComment(value) {
        setComment(value);
    }

    function handleStarRating(ratingValue) {
        setStarRating(ratingValue);
        
    }

    function processForm() {
        let newReview = {
            name: name,
            comment: comment,
            starRating: starRating
        }

        setAllReviews([...allReviews, newReview]);
    }

    return (
        <div>
            <div className = "card">
                <p><b>Enter a Review:</b></p>
        <div className = "name-input">
            <input type = "text" 
            placeholder = "Name Here"
            onChange = {handleName}>
            </input>   
        </div><br />
        <div className = "rating-input"> 
            <ReactStars handleStarRating = {handleStarRating} starRating = {starRating} />
            {/* pass in state and handleStarRating function as props to star component */}
        </div><br />
        <div>
          <textarea 
          className = "comment-input"
          defaultValue = { comment }
          placeholder = "Comments Here"
          onChange = {e => handleComment(e.target.value)}
          ></textarea> 
       </div> 
        <button 
          className = "btn btn-primary"
          onClick = {() => processForm()}
        >Submit</button>
       </div>
       </div>
    )
}