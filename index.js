// let index = 1;

// function addtodo(){
//     // alert("Add todo called!")
 
//     const input = document.querySelector("#inputData");
//     const inputValue = input.value;
//     if(!inputValue){
//         return;
//     }
//     // console.log(inputValue);

     
   
  
//     const todoParentDiv = document.querySelector("#dotos");
//     if (todoParentDiv.children.length === 0) {
//         index = 1;   // This will NOT work correctly (shadowing issue)
//     }
//      const currentIndex = index; 
//     const newDiv = document.createElement("h2");
//     const todoListDiv = document.createElement("div");
//     todoListDiv.setAttribute("id", "todo"+index);
//     const deleteButton  = document.createElement("button");
//     deleteButton.innerHTML = "delete";
//     deleteButton.setAttribute("id", `todoBtn${index}`);
//     deleteButton.addEventListener("click", function(){
//         deleteTodo(currentIndex)}
//     );
//     newDiv.innerHTML = inputValue;
//     todoParentDiv.appendChild(todoListDiv);
//     todoListDiv.appendChild(newDiv);
//     todoListDiv.appendChild(deleteButton);
//      input.value = "";
//     index++;
// // console.log(index);
   
    
    
    
// }


// function deleteTodo(index){
// // alert("delete Todo Called");
// const element = document.getElementById("todo"+index);
// const todoParentDiv = document.querySelector("#dotos");
// console.log(index);
// todoParentDiv.removeChild(element);

// }

let todos = [];

window.onload = function(){
    const existingTodo = localStorage.getItem("todo");
    if(existingTodo){
        todos = JSON.parse(existingTodo);
    }
    renderTodo();
}




function renderTodo(){
     const parentDiv = document.querySelector("#dotos");
     parentDiv.innerHTML = "";
    todos.forEach((todo, index)=>{
       
        const newDiv = document.createElement("div");
        const h1 = document.createElement("h2");
        h1.innerHTML = todo;
        const button = document.createElement("button");
        button.innerHTML = "delete";

        button.addEventListener("click", ()=>{
            deleteTodo(index);
        })

        newDiv.appendChild(h1);
        newDiv.appendChild(button);
        parentDiv.appendChild(newDiv);
    })
}

function addtodo(){
const input = document.querySelector("#inputData");
let inputValue = input.value;
if(!inputValue){
    return;
}

todos.push(inputValue);
saveTodo();
renderTodo();
input.value = "";
}


function saveTodo(){
    localStorage.setItem("todo", JSON.stringify(todos));
    // renderTodo();
}

function deleteTodo(index){
todos.splice(index, 1);
saveTodo();
renderTodo();

}