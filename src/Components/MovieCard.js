import React, { Component } from "react";
import CreateReview from "./CreateReview";

class MovieCard extends Component {
    render() {
        return (
            <div className = "card text-center">
                <div className = "movie-info">
                <img src = {this.props.movie.poster} alt = "Movie posters."></img>
                <h2>{this.props.movie.title}</h2>
                <span><b>Directed by:</b></span><br />
                <span>{this.props.movie.director}</span><br />
                <span><b>Average Rating:</b> {this.props.movie.rating}%</span>
                </div>
                <div className = "review-component">
                    <CreateReview />
                </div>
            </div>
        )
    }
}

export default MovieCard;

//how to get these side by side?! Can't for the life of me