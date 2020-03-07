const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
      let towninfo = document.createElement('section');
      let h2 = document.createElement('h2');
      let yearFounded = document.createElement('p');
      let motto = document.createElement('h3');
      let averageRainfall = document.createElement('p');
      let currentPopulation = document.createElement('p');

      h2.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      yearFounded.textContent = "founded " + towns[i].yearFounded;
      currentPopulation.textContent = "population " + towns[i].currentPopulation;      
      averageRainfall.textContent = "average rainfall " + towns[i].averageRainfall;



      towninfo.appendChild(h2);
      towninfo.appendChild(motto);
      towninfo.appendChild(yearFounded);
      towninfo.appendChild(currentPopulation);
      towninfo.appendChild(averageRainfall);

      document.querySelector('div.towninfo').appendChild(towninfo);
    }}
  });