import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const MovieApp = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Tirailleurs',
      description:"Bakary Diallo s'enrôle dans l'armée française pour rejoindre Thierno, son fils de 17 ans, qui a été recruté de force. Envoyés sur le front, père et fils vont devoir affronter la guerre ensemble. Galvanisé par la fougue de son officier qui veut le conduire au cœur de la bataille, Thierno va s'affranchir et apprendre à devenir un homme, tandis que Bakary va tout faire pour l'arracher aux combats et le ramener sain et sauf.",
      posterURL: 'https://www.torrent9.fm/pictures/tirailleurs-french-bluray-1080p-2023.jpg',
      rating: 8.3,
    },
    {
      title: 'Suits, avocat sur mesure',
      description:"Avocat très ambitieux d'une grosse firme de Manhattan, Harvey Specter a besoin de quelqu'un pour l'épauler. Son choix se porte sur Mike Ross, un jeune homme très brillant mais sans diplôme, doté d'un talent certain et d'une mémoire photographique très précieuse. Ensemble, ils forment une équipe gagnante, prête à relever tous les défis. Mike devra cependant user de toutes les ruses pour maintenir sa place sans que personne ne découvre qu'il n'a jamais passé l'examen du barreau",
      posterURL: 'https://www.torrent9.fm/pictures/suits-saison-1-french-hdtv.jpg',
      rating: 6.2,
    },
    {
      title: 'Narcos',
      description:"Loin d’un simple biopic de Pablo Escobar, Narcos retrace la lutte acharnée des États-Unis et de la Colombie contre le cartel de la drogue de Medellín, l’organisation la plus lucrative et impitoyable de l’histoire criminelle moderne. En multipliant les points de vue — policier, politique, judiciaire et personnel — la série dépeint l’essor du trafic de cocaïne et le bras de fer sanglant engagé avec les narcotrafiquants qui contrôlent le marché avec violence et ingéniosité.Biopic de Pablo Escobar.",
      posterURL: 'https://www.torrent9.fm/pictures/narcos-s01e01-french-hdtv.jpg',
      rating: 7.2,
    },
    {
      title: 'Money heist ',
      description:"Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
      posterURL: 'https://www.torrent9.fm/pictures/la-casa-de-papel-s05e06-10-french-hdtv.jpg',
      rating: 10,
    },
    // Add more movie objects here...
  ]);

  const [filteredTitle, setFilteredTitle] = useState('');
  const [filteredRating, setFilteredRating] = useState('');

  const handleTitleChange = (event) => {
    setFilteredTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setFilteredRating(event.target.value);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filteredTitle.toLowerCase()) &&
      (filteredRating === '' || movie.rating >= parseFloat(filteredRating))
    );
  });

  //new movie
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, posterURL, rating } = event.target.elements;
    const newMovie = {
      title: title.value,
      description: description.value,
      posterURL: posterURL.value,
      rating: parseFloat(rating.value),
    };
    addMovie(newMovie);
    event.target.reset();
  };
//end new movie
  return (
    <div className="movie-app">
      <h1>Movie App</h1>
      <Filter
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
      <form 
      style={{
        margin:'0',
        padding:'0',
        display:'flex' ,
       alignItems:'center' , 
       justifyContent:'space-evently' , 
       backgroundColor:'gray' , 
      color:'white'}} 
       onSubmit={handleSubmit}>
        <h2>Add New Movie</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div>
          <label htmlFor="posterURL">Poster URL:</label>
          <input type="text" id="posterURL" name="posterURL" required />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" min="0" max="10" step="0.1" required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
      {/* Add a form or input fields to add new movies and call the addMovie function */}
    </div>
  );
};

export default MovieApp;
