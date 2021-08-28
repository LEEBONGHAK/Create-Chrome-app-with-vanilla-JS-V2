// 날씨 정보를 얻기 위해 https://openweathermap.org/ 에서 얻은 API 사용
const API_KEY = "99d4f5c855fbbd672c510a2d64b980fc";

function getWeather(lat, lng) {
    // fetch() : 데이터 가져오기 -> promise (당장 일어나지 않고 시간이 좀 걸린 뒤 일어나는 것)
    // then() : 데이터가 완전히 들어온 이후 then() 내 함수 호출 (fetch()의 promise 특성 때문에 사용함)
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
            city.innerText = data.name;
        });
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    getWeather(lat, lng);
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)  // 현재 위치 좌표를 얻는 방법