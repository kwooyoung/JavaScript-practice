function onGeoOK(position){
     const lat = position.coords.latitude;
     const lng = position.coords.longitude;
     console.log("you live in", lat, lng);
}
function onGeoError(){
    alert("can't find yoiu . No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
/*getCurrentPosition()는 2개의 인수가 필요, 1개는 실행이 잘 되었을때 
실행할 함수 나머지 하나는 에러가 발생했을 때 실행할 함수.
이 메서드는 장치의 현재 위치를 가져옴.

*/