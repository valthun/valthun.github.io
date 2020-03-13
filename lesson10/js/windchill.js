//weather summary
const apiURL1 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=81785cac2327d15c890f8bdde7a8bf16';

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = jsObject.main.temp_max;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;

        let t = jsObject.main.temp;
        let s = jsObject.main.speed;
        if (t <= 50 && s >= 3) {
            var c = windChill(t, s);
            document.getElementById('chill').textContent = c;
        } else {
            var c = "N/A";
            document.getElementById('chill').textContent = c;
        }

        function windChill(t, s) {
            var wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
            var r = Math.round(wc * 100) / 100;
            return r;
        }

    });




//forecast    

/*const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=81785cac2327d15c890f8bdde7a8bf16';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });*/