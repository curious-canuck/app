'use strict'

export default class AjaxAdapter{

constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
}


fullPull(query) {
  return fetch(`/api/${query}`).then( r => r.json() );
}


handleCountryList() {

     return fetch('/dropd')
    .then(r => r.json())

}
}

