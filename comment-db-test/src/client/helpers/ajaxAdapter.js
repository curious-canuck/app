export default class AjaxAdapter{

  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  }

  getComments(countryCode){
    return fetch(`/comments/${countryCode}`)
      .then(r=>r.json())
  }

  addComment(countryCode){
    return fetch(`/comments/add/${countryCode}`,
      {
        method:'PUT',
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        },
        body:JSON.stringify(countryCode)
      })
      .then(r=>r.json())
  }

}

