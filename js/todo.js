const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY ="todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(event){
    const li = event.target.parentNode;
    li.remove();

}
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY) //현재 string 상태
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //array로 변환
    parsedToDos.forEach(()=>{
        
    })
}