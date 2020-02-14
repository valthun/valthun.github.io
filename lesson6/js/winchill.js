
    var t = document.getElementById("temp");
    var s = document.getElementById("speed");
    var c = 35.74 + 0.6215*t + (0.4275*t -35.75) * Math.pow(s, 0.16);
    document.getElementById("chill").innerHTML=c;
