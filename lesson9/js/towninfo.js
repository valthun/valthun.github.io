const requestURL = "http://valthun.github.io/lesson9/json/towninfo.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towninfo = jsonObject['towninfo'];

    for (let i = 0; i < towninfo.length; i++ ) {
      
      let towns = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let 

      h2.textContent = towninfo[i].town;


      towns.appendChild(h2);

      document.querySelector('div.towns').appendChild(towns);
    }
  });