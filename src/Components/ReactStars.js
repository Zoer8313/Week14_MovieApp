//https://youtu.be/eDw46GYAIDQ

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReactStars = () => {
    const [rating, setRating] = useState(null);

    return <div>
        {[ ...Array(5)].map((star, i) => {
            const ratingValue = i + 1;//start at 1 not 0

            return <label>
                <input type = "radio" 
                name = "rating" 
                value = {ratingValue} 
                onClick = {() => setRating(ratingValue)}></input>
                <FaStar className = "star" color = {ratingValue <= rating ? "#ff4500" : "#808080"}size = {35}/>
                </label>
        })}
    </div>
}

export default ReactStars;