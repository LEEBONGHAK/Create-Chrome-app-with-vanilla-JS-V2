// 날씨 정보를 얻기 위해 https://openweathermap.org/ 에서 얻은 API 사용
const API_KEY = "99d4f5c855fbbd672c510a2d64b980fc";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in ", lat, lng);
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)  // 현재 위치 좌표를 얻는 방법