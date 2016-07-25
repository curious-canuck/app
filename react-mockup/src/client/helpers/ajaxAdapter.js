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

  getComments(countryCode){
    return fetch(`/comments/${countryCode}`)
      .then(r=>r.json())
  }

  addComment(newComment, code){
    console.log("from addComment ajax: ", newComment)
    return fetch(`/comments/add/${code}`,
      {
        method:'PUT',
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        },
        body:JSON.stringify(newComment)
      })
      .then(r=>r.json())
  }
}
