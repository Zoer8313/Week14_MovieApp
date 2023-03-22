import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from "./Components/MovieList";
import MovieCard from "./Components/MovieCard";
import ReviewList from "./Components/ReviewList";
import Reviews from "./Components/Reviews";


class App extends Component {
 constructor() {
  super();

  this.state = {
    movies: [],
    showMovies: false
  };
 }

 componentDidMount() {
  fetch("https://641935bf29e7e36438f8391b.mockapi.io/movies/MovieLibrary")
  .then(response => (response.json()))
  .then((apiMovies) => 
    this.setState(() => {
    return { movies: apiMovies, showMovies: true };
  })
);
}

render() {
  let { showMovies, movies } = this.state;

  const filteredMovies = movies.filter((movie) => {
    return movie.title
  });

  let renderMovies = "Loading movies...";

  if(showMovies) {
    renderMovies = <MovieList movies = { filteredMovies }/>
  }

  return (
    <div className = "container">
    <div className = "App">
      <h1>Welcome to the 20th Annual Film Festival!</h1>
      <span>Independently created films playing all week long, here at the Panida Theater! Get your tickets while they last,
        and then enjoy leaving personal ratings for the filmmakers.
      </span>
      { renderMovies }
    </div>
    </div>
  );
}


}

export default App;
