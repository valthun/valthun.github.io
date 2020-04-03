const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&APPID=81785cac2327d15c890f8bdde7a8bf16';

fetch(apiURL)
.then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('temp').textContent = jsObject.main.feels_like;
        document.getElementById('looks').textContent = jsObject.weather[0].description;
        
    });