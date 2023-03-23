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

        setName("");
        setComment("");
        setStarRating(0);
    }



    return (
        <div>
            <div className = "card">
                <p><b>Enter a Review:</b></p>
        <div className = "name-input">
            <input type = "text" 
            placeholder = "Name Here"
            value = {name}//so we can reset to blank
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
          value = {comment}//so we can reset to blank
          onChange = {e => handleComment(e.target.value)}
          ></textarea> 
       </div> 
        <button 
          className = "btn btn-primary"
          onClick = {() => processForm()}
        >Submit</button>
       </div>

        <div> 
                <h2><b>Reviews:</b></h2>
                <ul>
                    {allReviews.map((review, index) => (
                        <li key={index}>
                            <p><b>Name: </b>{review.name}</p>
                            <p><b>Comment: </b>{review.comment}</p>
                            <p><b>Star Rating: </b>{review.starRating}</p>
                        </li>
                    ))}
                </ul>
            </div>

       </div>
    )
}