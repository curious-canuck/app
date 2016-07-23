export default class AjaxAdapter{

  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  }

  fullPull(countryCode) {
    return fetch(`/api/${countryCode}`).then( r => r.json() );
  }

  handleCountryList() {
    return fetch('/dropd')
      .then(r => r.json())
  }
}

