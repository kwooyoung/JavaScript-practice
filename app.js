const h1 = document.querySelector(".hello:first-child h1");
console.dir(h1);
/*
function handleTitleClick(){
  if(h1.className==="active"){
    h1.className="";
  }else{
    h1.className="active";
  }
}
↓↓↓↓↓↓↓ 코드 위험요소 제거 part 1 (raw value 제거) 
 */
/*
function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass){
        h1.className="";
      }else{
        h1.className = clickedClass;
      }
}

기존에 적용 되었던 class에 영향을 주지 않기 위에 classList를 사용
예시 : 기존 h1에 font를 수정하는 class가 적용 되어 있는 상태에서 
javascript 에서 className을 변경 시 기존에 사용하던 class(font)는 사라짐
↓↓↓↓↓↓↓ 코드 위험요소 제거 part 2 (classList 사용)
*/

function handleTitleClick(){
    /*,classList.contains 이 함수는 우리가 명시한 class가 html element의 
    class에 포함되어있는지 말해 줌. */
/*    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        //classList내부에 있는 contains 함수는 classList에서 clicked를 포함하고 있는지 확인
        h1.classList.remove(clickedClass);
      }else{
        h1.classList.add(clickedClass); 
        //clicked 요소가 h1 classList에 있다면 제거, 없다면 추가
      }

      element가 classname을 포함하고 있는지 확인하는 것은 개발자라면 흔한 일 
      ↓↓↓↓↓↓↓ part 3 간략한 함수 사용(toggle function 사용)
      */
      const clickedClass = "clicked";
      h1.classList.toggle(clickedClass);

      /*toggle function은 class name이 존재하는지 확인
      존재한다면 toggle은 class name을 제거 그리고 classname이 존재하지 않는다면
      toggle은 classname을 추가*/
      
}
h1.addEventListener("click",handleTitleClick);
