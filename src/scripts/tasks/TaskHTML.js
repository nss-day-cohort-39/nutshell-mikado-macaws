/*
Author: Brad Cowart
Purpose: This module displays all tasks and their completion status. 
*/

//const eventHub = document.querySelector(".container");

//eventHub.addEventListener("getTaskClicked", (CustomEvent) => {
    export const TaskHTML = (TaskObject) => {
        return`
        <div class="task--list">
        Task: ${TaskObject.task}
        Complete: ${TaskObject.complete}
        <button id="deleteTask--${TaskObject.id}">Delete</button>
    
        </div>
        
        `
     }