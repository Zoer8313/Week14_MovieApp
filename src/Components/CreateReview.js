import React, { useState } from "react";
import ReactStars from "./ReactStars";

export default function CreateReview() {

    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    function handleName(value) {
        setName(value);
    }

    function handleComment(value) {
        setComment(value);
    }

    function processForm() {
        
    }

    return (
        <div>
            <div className = "card">
                <p><b>Enter a Review:</b></p>
        <div className = "name-input">
            <input type = "text" 
            placeholder = "Name Here"
            onChange = {e => handleName(e.target.value)}>
            </input>   
        </div><br />
        <div className = "rating-input"> 
            <ReactStars />
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