const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input"); 

const nomadLink = document.querySelector("a");


function onLoginSubmit(event){
    event.preventDefault(); //preventDefault 함수는 어떤 event의 브라우저의 기본행동이든지 발생되지 않도록 막는 것이다. 
    console.log(loginInput.value);
}

function handleLinkClick(event){  //js가 
    event.preventDefault(); //링크로 가는걸 막아주고 event의 내부를 확인할 수 있음.
    console.dir(event); //PointerEvent이벤트 오브젝트를 확인. 
    
}

loginForm.addEventListener("submit",onLoginSubmit);
/*

 onLoginSubmit()브라우저는 위에서 submit 이벤트가 발생하면 onLoginSubmit()함수를 실행하기도 하지만,
onLoginSubmit() 브라우저는 브라우저 내에서 event로부터 정보를 잡아내서 
이 argument 안에 정보를 주고 있다. 
event가 발생할 때 브라우저가 내 function을 호출하게 되는데, onLoginSubmit() 이렇게 비어있는 채로 호출하지 않고,
첫번째 argument로써 추가적인 정보를 가진 채 호출하게 된다. 어떤 정보를 브라우저가 주고 있는지 
보는 방법은 위 함수를 이렇게 변경해보면 된다.

function jsInfo(info){
    event.preventDefault();
    console.log(info);
} 
javascript는 EventLisener에 어떤 function을 추가하던 간에 첫번째 argument(info)로 발생된
event에 대한 정보를 준다. 받고 싶지 않으면 비워두면 된다.

loginForm.addEventListener("submit",jsInfo);

모든 EventListener fuction의 첫번째 argument는 항상 발생한 일에 대해 필요로 할만한 정보들을 준다.


*/
nomadLink.addEventListener("click",handleLinkClick);

