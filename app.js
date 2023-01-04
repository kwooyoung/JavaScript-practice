const title = document.querySelector(".hello:first-child h1");
console.dir(title);
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="blue";
}   
function handleMouseEnter(){
   title.innerText="Mouse is here!";
}
function mouseLeave(){
    title.innerText="Mouse is gone!";
}
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",mouseLeave);
