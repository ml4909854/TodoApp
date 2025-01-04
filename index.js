let todoInput = document.getElementById("todo-input")
let addtodoBtb = document.getElementById("addTodo")
let todolist = document.getElementById("todolist")

let todos = JSON.parse(localStorage.getItem("todos")) || []


function displayTodos() {
    todolist.innerHTML = " " 
    todos.forEach((todo, index) => {

        

        let li = document.createElement("li")
        li.classList.add("todostyle")
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${todo}</span>
        <button class="stylebtn" onclick="editTodo(${index})">Edit</button>
        <button class="stylebtn" onclick="removeTodo(${index})">Remove</button>
        `
        todolist.appendChild(li)
        
    });
}


addtodoBtb.addEventListener("click" , addTodo)
function addTodo(){
    const todo = todoInput.value.trim(" ")
    if(todo){
        todos.push(todo)
        todoInput.value = ""
        localStorage.setItem("todos" , JSON.stringify(todos))
        displayTodos()
    }
}

function editTodo(index){
    const newTodo = prompt("change your todo" , todos[index])
    if(newTodo){
        todos[index] = newTodo
        localStorage.setItem("todos" , JSON.stringify(todos))
         displayTodos()
    }
}

function removeTodo(index){
    todos.splice(index , 1)
    localStorage.setItem("todos" , JSON.stringify(todos))
    displayTodos()
}