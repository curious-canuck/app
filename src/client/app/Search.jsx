import React from 'react';

const Search = props=>
    <div className='container'>

<form onSubmit={props.onSubmitSearch}>
        <div className="form-group">
        <label for="">Country Search</label>
          <input
          value={props.query}
          type="text"
          placeholder="Enter a movie title..."
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


