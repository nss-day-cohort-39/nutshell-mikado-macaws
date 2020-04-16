import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import {TaskList} from "./tasks/TaskList.js"
import {getTasks} from "./tasks/TaskDataProvider.js"
import TaskForm from "./tasks/TaskForm.js"

getUsers()
    .then(LoginForm)
    .then(getTasks)
    .then(TaskForm)
    .then(TaskList)
