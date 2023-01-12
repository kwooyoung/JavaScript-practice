const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.getElementById("#todo-form input");
const TODOS_KEY="todos";
let toDos = [];

/*javascript object나 array 어떤것이든 string으로 바꿔주는 기능
    JSON.stringfy() 안에 넣기만 하면 됨 */

/*JSON.parse(); 단순한 string을 가지고 살아있는 object로 만들어줌 */
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); 
}
/*localStorage에는 array를 저장할 수 없음 오직 텍스트만 저장가능. */

function deleteToDo(event){ 
    const li = event.target.parentElement;//click event target에 접근, 그 부모 element인 li를 셀렉/.parentNode로도 가능
    li.remove();// 클릭 li remove
}
function paintToDo(newTodo){
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText= newTodo;
   const button = document.createElement("button");
   button.innerText = '❌';
   button.addEventListener('click',deleteToDo);
   li.appendChild(span); //li안에 span옵션 생성 button 생성을 위해 
   li.appendChild(button);//append는 맨 마지막에 생성됨 순서 주의!
   toDoList.appendChild(li); //appendchild toDoList 맨 마지막에 li 생성
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //toDoinput 입력값 newToDo 에 저장
    toDoInput.value=""; //input value 비우기(입력한 다음 값 비우기) 
    toDos.push(newTodo); //아래랑 바꾸면 어떨까? 안될듯
    paintToDo(newTodo);  
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);
/*submit의 기본동작은 페이지를 새로고침하는 것이라서 
event.preventDefault(); 함수를 통하여 기본동작을 막는다.
  */
 

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
if(savedToDos !== null){ 
    const parsedToDos = JSON.parse(savedToDos);//localStorage에서 가져온 스프링 형태의 TODOS_KEY 를 배열로 변경
    toDos = parsedToDos; //이전 투두리스트 값을 toDos에 복사.
    parsedToDos.forEach(paintToDo);
}