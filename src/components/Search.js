import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
        type="text"
        id="search"
        placeholder="Type a pokemon to search..."
        value={search}
        onChange={ (e) => setSearch(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
