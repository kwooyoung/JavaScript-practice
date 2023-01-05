const h1 = document.querySelector(".hello:first-child h1");
console.dir(h1);
function handleTitleClick(){
    console.log("title was clicked!");
    h1.style.color="blue";
}   
function handleMouseEnter(){
   h1.innerText="Mouse is here!";
}
function mouseLeave(){
    h1.innerText="Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowPaste(){
    alert("출처를 작성하세요!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("All GOOOD");
}

h1.onclick = handleTitleClick; //title.addEventListener("click",handleTitleClick);
h1.onmouseenter = handleMouseEnter; //title.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",mouseLeave);

/*
이벤트를 생성하는 두가지의 방법이 있지만 addEventListener은 
.removeEventListener를 통해서 이벤트 제거가 가능하기에 더 좋다.
*/

window.addEventListener("resize",handleWindowResize);
/* window 가 resize(화면크기가 바뀜)될 경우에, 
document를 호출하고, 바디에 접근-> size 변경 시 색상 변경 */
window.addEventListener("copy", handleWindowCopy);
//복사 감지 이벤트리스너 생성, alert 발생 
window.addEventListener('paste',handleWindowPaste);
//복사 감지 이벤트리스너 생성, alert 발생 

window.addEventListener('offline',handleWindowOffline);
/* offline,online  */
window.addEventListener('online',handleWindowOnline);