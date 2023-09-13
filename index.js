document.addEventListener("DOMContentLoaded", function(){
    const taskInput  = document.getElementById("taskInput");
     const addTaskButton = document.getElementById("addTask")
     const taskList = document.getElementById("taskList");

     addTaskButton.addEventListener("click",function(){
        const taskText = taskInput.value.trim()
        if(taskText==="")return
        const li = document.createElement("li")
        li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`
        taskList.appendChild(li)
        taskInput.value=""
         
        const deleteButton = li.querySelector(".delete-btn")
        deleteButton.addEventListener("click",function(){
            taskList.removeChild(li)
        })

     })
     taskInput.addEventListener("keydown",function(event){
        if(event.key==="Enter"){
            addTaskButton.click()
        }
     })
})