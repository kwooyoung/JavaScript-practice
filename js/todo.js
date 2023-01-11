const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.getElementById("#todo-form input");
const toDos=[];


function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){ 
    const li = event.target.parentElement;//click event target에 접근, 그 부모 element인 li를 셀렉
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
   li.appendChild(button);
   toDoList.appendChild(li); //appendchild toDoList 맨 마지막에 li 생성
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //toDoinput 입력값 newToDo 에 저장
    toDoInput.value=""; //input value 비우기(입력값 비우기) \
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);
/*submit의 기본동작은 페이지를 새로고침하는 것이라서 
event.preventDefault(); 함수를 통하여 기본동작을 막는다.
  */

const savedToDos = localStorage.getItem(toDos);

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}