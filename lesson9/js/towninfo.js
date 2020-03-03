const requestURL = "json/towninfo.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towninfo = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      
      let towns = document.createElement('section');
      let h2 = document.createElement('h2');
      let birth = document.createElement('p');
      let place = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = + towns[i].town;
      birth.textContent = "Date of Birth: " + towns[i].birthdate;
      place.textContent = "Place of Birth: " + towns[i].birthplace;

      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', "picture of: " + h2.textContent);


      card.appendChild(h2);
      card.appendChild(birth);
      card.appendChild(place);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });