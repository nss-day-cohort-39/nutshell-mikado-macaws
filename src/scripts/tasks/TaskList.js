import { useTasks,deleteTasks} from "./TaskDataProvider.js";
import { TaskHTML } from "./TaskHTML.js";

const contentTarget = document.querySelector(".dashboard__taskList")
const eventHub = document.querySelector(".container")

// Get the tasks
//let TasksToDisplay = useTasks()
//render(TasksToDisplay)

const render = TasksToRender => {
    contentTarget.innerHTML = TasksToRender.map(
        (TaskObject) => {
            return TaskHTML(TaskObject)
        }
    ).join("")
}

export const TaskList = () => {
     const TasksToDisplay = useTasks()
     render(TasksToDisplay)
 }

 eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteTask--")) {
      const [prefix, TaskId] = clickEvent.target.id.split("--")

     deleteTasks(TaskId).then(
         () => {
             const updatedTasks = useTasks()
             render(updatedTasks())
         }
     )
  }
})
