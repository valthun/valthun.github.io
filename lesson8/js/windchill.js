
    var t = parseFloat(document.getElementById("temp").textContent);
    var s = parseFloat(document.getElementById("speed").textContent);
    if (t <= 50 && s >= 3) {
        var c = windChill(t, s);
        document.getElementById("chill").textContent = c;
    }   else {
        var c = "N/A";
        document.getElementById("chill").textContent = c;
    }

    function windChill(t, s) {
    var wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
    var r = Math.round(wc * 100) / 100;
    return r;
    }