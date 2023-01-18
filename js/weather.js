const API_KEY="41e1bb3cf35ce5a5477995fee85713a8";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric `
    fetch(url)
    .then(response => response.json())
        .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
        
    
    //fetch url을 부름(call) 
    /* 구글 크롬 개발자도구 network에 가면 Wifi에서 확인하면 
    javascript에서 url요청한 내역이 보임
    javascript가 대신 url을 부름 .
    &units=metric = url 끝에 붙여 화씨 온도를 섭씨로 변경.
    response.json()은 network에서 알려주는 정보들을 추출
    .then(date) 추출한 다음 데이터를 가져옴 
    console.log로 원하는걸 볼 수 있음
    data.name   = 현재 위치의 도시
    data.weather[0].main = 현재 날씨, 섭씨 온도를 가리킴
     */
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);