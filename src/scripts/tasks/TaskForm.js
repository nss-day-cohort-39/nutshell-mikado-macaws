/*
Author: Brad Cowart
Purpose: This module displays the task entry form and links to logic
to add this info to the database. 
*/


import { saveTasks, useTasks } from "./TaskDataProvider.js";

const taskForm = document.querySelector(".dashboard__taskForm");
const eventHub = document.querySelector(".container");

//eventHub.addEventListener("getTaskClicked", (CustomEvent) => {
 export const TaskForm = () => {
    const render = () => {
        taskForm.innerHTML = `
            <section id="TaskForm">
            <form>
            <fieldset>
            <label for="task_Task">Task:</label>
            <input type="text" id="Task"></input>  
            
            
            <label for="task_Complete">Complete:</label>
            <input type="checkbox" id="Complete">         
            </fieldset> 
            </form>
            <button id="Task_Button">Add Task</button>
            </section>
            `;
    };

    render();
  };

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "Task_Button") {
    const task = document.querySelector("#Task").value;
    let complete = document.querySelector("#Complete");

    if (complete.checked === true){
        complete=true
      } else {
        complete=false
      }
    
    // if (password !== confirmPassword) {
    //   window.alert("Please make sure passwords match.");
    // } else if (userName === "") {
    //   window.alert("Please enter a username");
    // } else if (email === "") {
    //   window.alert("Please enter a valid email.");
    // } else if (password === "" && confirmPassword === "") {
    //   window.alert("Please enter a valid password.");
    // } else {
      // Make a new object representation of user
      try {
        const newTask = {
          task: task,
          complete: complete,
          userId:sessionStorage.getItem("activeUser")
        };
        // Change API state and application state
        saveTasks(newTask).then(() => {
        });

        const TaskAdded = new CustomEvent("TaskAdded");
        eventHub.dispatchEvent(TaskAdded);
      } catch {
        window.alert("Please make sure all fields are correct.");
      }
    }
  }
)

//eventHub.addEventListener("userRegistered", (customEvent) => {
  //registrationForm.classList.add("invisible");
//});
