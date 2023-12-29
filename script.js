function addTask(){
    let taskInput = document.getElementById("taskInput");
    let todoList = document.getElementById("todo-list");
    let taskText = taskInput.value.trim();
   
    if(taskText !==""){
        let taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.classList.add = ('one');
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange =  function() {
        taskTestSpan.classList.toggle("completed");
        }

          

        let taskTestSpan = document.createElement("span");
        taskTestSpan.textContent  = taskText;
           
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function(){
            todoList.removeChild(taskElement);
        })
        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskTestSpan);
        taskElement.appendChild(removeButton);

        todoList.appendChild(taskElement)
        console.log(taskElement);

        taskInput.value = "";
    }

}


