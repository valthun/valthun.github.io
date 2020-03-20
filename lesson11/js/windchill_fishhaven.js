//weather summary
const apiURL1 = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=81785cac2327d15c890f8bdde7a8bf16';

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = jsObject.main.temp_max;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;

        var t = parseFloat(document.getElementById("temp").textContent);
        var s = parseFloat(document.getElementById("speed").textContent);
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

const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=81785cac2327d15c890f8bdde7a8bf16';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fiveday);



        for (let i = 0; i < fiveday.length; i++) {

            let x = i + 1;
        
            document.getElementById('fore'+x).textContent = fiveday[i].main.temp;

            var day = new Date(fiveday[i].dt_txt);
            var week = new Array(7);
            week[0] = "Sun";
            week[1] = "Mon";
            week[2] = "Tues";
            week[3] = "Wed";
            week[4] = "Thur";
            week[5] = "Fri";
            week[6] = "Sat";
            var we = week[day.getDay()];

            document.getElementById('weekday'+x).innerHTML = we;

            const imagesrc1 = 'https://openweathermap.org/img/w/' + fiveday[i].weather[0].icon + '.png';
            const desc1 = jsObject.list[0].weather[0].description;
            document.getElementById('icon'+x).setAttribute('src', imagesrc1);
            document.getElementById('icon'+x).setAttribute('alt', desc1); 

        }


    });