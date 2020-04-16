import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getChats } from "./chats/ChatDataProvider.js";

getUsers().then(LoginForm);
getChats()