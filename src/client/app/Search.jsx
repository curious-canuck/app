import React from 'react';

const Search = props=>
  <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">

      <form onSubmit={props.onSubmitSearch}>
        <div className="form-group">
          <input
          onChange={props.onUpdateSearch}
          value={props.query}
          type="text"
          placeholder="Enter a country..."
          className="form-control" />
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button
          className="btn btn-block btn-primary"
          type="submit">
            Search
          </button>
        </div>
      </form>

  </div>

export default Search;
