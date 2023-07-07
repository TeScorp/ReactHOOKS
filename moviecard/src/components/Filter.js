import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={onTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        onChange={onRatingChange}
      />
    </div>
  );
};

export default Filter;
