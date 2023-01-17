API_KEY = "41e1bb3cf35ce5a5477995fee85713a8";
function onGeoOK(position){
     const lat = position.coords.latitude;
     const lon = position.coords.longitude;
     console.log("you live in", lat, lng);
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    }
function onGeoError(){
    alert("can't find yoiu . No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
/*getCurrentPosition()는 2개의 인수가 필요, 1개는 실행이 잘 되었을때 
실행할 함수 나머지 하나는 에러가 발생했을 때 실행할 함수.
이 메서드는 장치의 현재 위치를 가져옴.

*/