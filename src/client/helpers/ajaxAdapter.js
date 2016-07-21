function fullPull(query) {
  return fetch(`/api/${query}`).then( r => r.json() );
}

export default fullPull;
