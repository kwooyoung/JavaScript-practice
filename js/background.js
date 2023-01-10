const images=[
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"
];

 const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");  
//console(bgImage);<img> 생성 

bgImage.src = `img/${chosenImg}`;//img src = "img/*.jpg"
document.body.appendChild(bgImage);//body맨 마지막에 에 생성
/*
document.body.prepend(bgimage); 가장위에 추가하고 싶으면 prepend

appendChild를 사용할 때 body원하는 위치에 넣고 싶으면,
insertBefore() 메소드를 사용,
참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입
const h2 = document.querySelector("#clock");
document.body.insertBefore(bgImage, h2);
두개의 인자중에 앞의 bgImage는 새로운 노드 즉 추가하고 
싶은 노드이고 h2는 참조할 노드입니다. 
즉 이렇게 코드를 짜시면 h2요소 앞에 bgImage가 추가되게 된다.
*/
