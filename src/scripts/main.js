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

import { NewsArticleButton } from "./news/NewsArticleButton.js";
import { getNews } from "./news/NewsDataProvider.js";
import "./news/NewsForm.js"
import "./news/NewsList.js"
import { getFriends } from "./friends/FriendsProvider.js";
import "./friends/FriendsList.js";
import { newEventButton } from "./events/EventsForm.js";
import { getEvents } from "./events/EventsProvider.js";

getUsers()
    .then(LoginForm)
    .then(getFriends)
    .then(getTasks)
    .then(TaskForm)
    .then(TaskList)
    .then(getEvents)
    .then(newEventButton)
    .then(getNews)
    .then(NewsArticleButton)

