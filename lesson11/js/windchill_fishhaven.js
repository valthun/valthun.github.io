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

            document.getElementById('fore1').textContent = fiveday[0].main.temp;
            document.getElementById('fore2').textContent = fiveday[1].main.temp;
            document.getElementById('fore3').textContent = fiveday[2].main.temp;
            document.getElementById('fore4').textContent = fiveday[3].main.temp;
            document.getElementById('fore5').textContent = fiveday[4].main.temp;


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


            document.getElementById('weekday1').innerHTML = we;
            document.getElementById('weekday2').innerHTML = we;
            document.getElementById('weekday3').innerHTML = we;
            document.getElementById('weekday4').innerHTML = we;
            document.getElementById('weekday5').innerHTML = we;

            const imagesrc1 = 'https://openweathermap.org/img/w/' + fiveday[0].weather[0].icon + '.png';
            const desc1 = jsObject.list[0].weather[0].description;
            document.getElementById('icon1').setAttribute('src', imagesrc1);
            document.getElementById('icon1').setAttribute('alt', desc1);

            const imagesrc2 = 'https://openweathermap.org/img/w/' + fiveday[1].weather[0].icon + '.png';
            const desc2 = jsObject.list[1].weather[0].description;
            document.getElementById('icon2').setAttribute('src', imagesrc2);
            document.getElementById('icon2').setAttribute('alt', desc2);

            const imagesrc3 = 'https://openweathermap.org/img/w/' + fiveday[2].weather[0].icon + '.png';
            const desc3 = jsObject.list[2].weather[0].description;
            document.getElementById('icon3').setAttribute('src', imagesrc3);
            document.getElementById('icon3').setAttribute('alt', desc3);

            const imagesrc4 = 'https://openweathermap.org/img/w/' + fiveday[1].weather[0].icon + '.png';
            const desc4 = jsObject.list[3].weather[0].description;
            document.getElementById('icon4').setAttribute('src', imagesrc4);
            document.getElementById('icon4').setAttribute('alt', desc4);

            const imagesrc5 = 'https://openweathermap.org/img/w/' + fiveday[1].weather[0].icon + '.png';
            const desc5 = jsObject.list[4].weather[0].description;
            document.getElementById('icon5').setAttribute('src', imagesrc5);
            document.getElementById('icon5').setAttribute('alt', desc5);

        }


    });