/* 
let headers = {
    Authorization: `Token 3b5138445f97d0cfd09f33e455f434ec91b43dbc`,
  };
let url =   'https://backend-prod.pollinate.co/api/v1/collective/?past_events=true'
 var req = req('req-promise');
    req({
    "method":"GET", 
    "url": url",
    "json": true,
    "headers": headers
  }).then(console.log, console.log);
 
  
var polli = {
  token:"3b5138445f97d0cfd09f33e455f434ec91b43dbc",
  
  getUser: function() {
    return req({
      "method":"GET", 
      "url": urls,
      "json": true,
      "headers": headers
    });
  }
}

function main(params) {
  polli.token = params.token;
  return polli.getUser();
}

main({"token": process.argv[2]}).then(function(result) {
  console.log(result);
});
*/
/* 
const { async } = require("postcss-js"); */

let headers = {
    Authorization: `Token 3b5138445f97d0cfd09f33e455f434ec91b43dbc`,
  };
let url =   'https://backend-prod.pollinate.co/api/v1/collective/?past_events=true'
/* aysnc await */
/* async function fetchGet() {
    const res = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
   
    if (res.status >= 400) {
      console.err("error 404");
    } else {
      const json = await res.json();
     console.info(json,"data");
    }
} */
/* 
 function fetchGet() {
    const res =  fetch(url, {
      method: 'GET',
      headers: headers,
    });
   
    if (res.status >= 400) {
      console.err("error 404");
    } else {
      const json = JSON.stringify(res) ;
     console.info(json,"data");
    }
} */
/* Promise */
/* function myDisplayer(value) {
     console.log(value)
  }
  function getData(){
let myPromise = new Promise(function fetchGet(myResolve, myReject) {
    const res =  fetch(url, {
      method: 'GET',
      headers: headers,
    });
   console.log(res,"response")
    if (res.status >= 400) {
       return myReject("error 404");
    } else {
     
    return  myResolve(res)
    }
}
);
myPromise.then(
    async function(value) {
        let data=await value.json()
        myDisplayer(data)},
    function(error) {myDisplayer(error);}
  );

} */

/* callback */
function myDisplayer(value) {
    console.log(value)
  }
  
async  function fetchGet() {
    const res = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
   console.log(res,"responeese")
    if (res.status >= 400) {
      console.err("error 404");
    } else {
        {
            const json = await res.json();
            console.info(json,"data");
          }
    }
};
  
 function callApi(){
fetchGet( myDisplayer);
 }

