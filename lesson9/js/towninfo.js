const requestURL = "https://valthun.github.io/lesson9/json/towninfo.json";

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
      let population = document.createElement('p');

      h2.textContent = towninfo[i].town;
      motto.textContent = towninfo[i].motto;
      founded.textContent = "founded " + towninfo[i].founded;
      population.textContent = "population " + towninfo[i].population;      
      rainfall.textContent = "average rainfall " + towninfo[i].rainfall;



      towns.appendChild(h2);
      towns.appendChild(motto);
      towns.appendChild(founded);
      towns.appendChild(population);
      towns.appendChild(rainfall);

      document.querySelector('div.towns').appendChild(towns);
    }
  });