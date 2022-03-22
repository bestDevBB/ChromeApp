"use strict";

const API_KEY = "851636a68b67640695b22b63a4550e3a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.name, data.weather[0].main); // weather은 array임
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    }); // 요청. DevTool의 Network에서 request를 확인할 수 있음!
};

function onGeoError() {
    alert("Can't find you, No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);