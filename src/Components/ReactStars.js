//https://youtu.be/eDw46GYAIDQ

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";


const ReactStars = ({ handleStarRating, starRating }) => {
    const [rating, setRating] = useState(null);
// need to communicate with parent to show what changed. use props

useEffect(() => {
    if (starRating) {
      setRating(starRating);
    }
  }, [starRating]);

    return <div>
        {[ ...Array(5)].map((star, i) => {
            const ratingValue = i + 1;//start at 1 not 0

            return <label>
                <input type = "radio" 
                name = "rating" 
                value = {ratingValue} 
                onClick = {() => {
                    setRating(ratingValue);
                    handleStarRating(ratingValue);
                }} ></input>
                <FaStar className = "star" color = {ratingValue <= rating ? "#ff4500" : "#808080"}size = {35}/>
                </label>
        })}
    </div>
}

export default ReactStars;