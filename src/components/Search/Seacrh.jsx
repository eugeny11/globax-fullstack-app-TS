import React from "react";
import './Search.css'
import SearchIcon from '../../img/Search.png'

const Search = (props) => {
  const { searchTerm, onSearch } = props;

  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

    return(
        <div className="search-container">
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
      />
      <img src={SearchIcon} alt='search' />
        </div>
    )
}

export default Search