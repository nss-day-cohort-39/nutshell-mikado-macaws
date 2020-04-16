/*
Author: Brad Cowart,
Purpose: This module imports and calls modules to display on the home page. 
*/

import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import {getTasks} from "./tasks/TaskDataProvider.js";
import {TaskForm} from "./tasks/TaskForm.js"
import {TaskList} from "./tasks/TaskList.js"

getUsers()
    .then(LoginForm)
    .then(getTasks)
    .then(TaskForm)
    .then(TaskList)
