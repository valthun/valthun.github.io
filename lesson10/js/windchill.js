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

const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=81785cac2327d15c890f8bdde7a8bf16';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fiveday);

        for (let i=0; i<fiveday.length; i++) {
            document.getElementById('fore1').textContent = fiveday[i].main.temp;

        }




        /*const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
        const desc1 = jsObject.list[0].weather[0].description;
        document.getElementById('icon1').setAttribute('src', imagesrc1);
        document.getElementById('icon1').setAttribute('alt', desc1);

        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png';
        const desc2 = jsObject.list[1].weather[0].description;
        document.getElementById('icon2').setAttribute('src', imagesrc2);
        document.getElementById('icon2').setAttribute('alt', desc2);

        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png';
        const desc3 = jsObject.list[2].weather[0].description;
        document.getElementById('icon3').setAttribute('src', imagesrc3);
        document.getElementById('icon3').setAttribute('alt', desc3);

        const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png';
        const desc4 = jsObject.list[3].weather[0].description;
        document.getElementById('icon4').setAttribute('src', imagesrc4);
        document.getElementById('icon4').setAttribute('alt', desc4);

        const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[4].weather[0].icon + '.png';
        const desc5 = jsObject.list[4].weather[0].description;
        document.getElementById('icon5').setAttribute('src', imagesrc5);
        document.getElementById('icon5').setAttribute('alt', desc5);*/
    });

    //5 days


    var day = new Date().getDate();
    var week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednsday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";
    var we = week[m.getDay()];
    
    document.getElementById('weekday1').innerHTML=we;