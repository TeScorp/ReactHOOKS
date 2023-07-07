import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
      <div className="movie-card">
        <img src={posterURL} alt={title} />
        <h3 style={{paddingTop:'10px'}}>{title}</h3>
        <p>{description}</p>
        <p style={{fontWeight:'600'}}>Rating: {rating}</p>
      </div>
  );
};

export default MovieCard;
