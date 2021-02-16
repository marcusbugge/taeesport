function countdown() {
    var currentDato = new Date();
    var eventDato = new Date("23 Feb 2021");

    var currentTime = currentDato.getTime();
    var eventTime = eventDato.getTime();

    var diff = (eventTime - currentTime + 72000000) / 1000;


    var s = Math.floor(diff) % 60;
    var m = Math.floor(diff / 60) % 60;
    var h = Math.floor(diff / 3600) % 24;
    var d = Math.floor(diff / 3600 / 24);


    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

}

countdown();
setInterval(countdown, 1000);
