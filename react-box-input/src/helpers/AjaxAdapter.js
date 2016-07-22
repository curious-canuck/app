export default class AjaxAdapter{

  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  }

   handleCountryList() {

    // let self = this
     return fetch('/dropd')
    .then(r => r.json())

}
}
