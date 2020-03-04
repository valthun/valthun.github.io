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
      let founded = document.createElement('p');
      let motto = document.createElement('p');
      let rainfall = document.createElement('p');

      h2.textContent = towninfo[i].town;
      founded.textContent = towninfo[i].founded;
      motto.textContent = towninfo[i].motto;

      rainfall.textContent = towninfo[i].rainfall;


      towns.appendChild(h2);
      towns.appendChild(founded);
      towns.appendChild(motto);

      document.querySelector('div.towns').appendChild(towns);
    }
  });