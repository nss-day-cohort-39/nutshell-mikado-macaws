import { saveTasks } from "./TaskDataProvider.js"
const contentTarget = document.querySelector(".dashboard__TaskForm")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        const Task = clickEvent.target.value
        
        const Complete = document.querySelector("#Complete")
        
        // Make a new object representation of entry
        const newTask = {
            task:Task,
            complete: Complete
        }
        if (complete.checked === true){
            complete=true
        } else {
            complete=false
          }

        // Change API state and application state
        saveTasks(newTask)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <fieldset>
            <label for="Task">Task</label>
            <input type="text" id="Task">    
        </fieldset>
        <fieldset>
            <label for="Complete">Complete:</label>
            <input type="checkbox" id="Complete">
        </fieldset>
        
        <button id="saveTask">Save</button>
    `
}

const TaskForm = () => {
    render()
}

export default TaskForm                       
