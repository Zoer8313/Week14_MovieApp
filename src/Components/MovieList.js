import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
    render() {
        return (
            <div>
            {this.props.movies.map((movie) => {
             return (
                <MovieCard movie = {movie}/>
             );
           })}
         </div>
        )
    }
}

export default MovieList;