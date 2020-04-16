import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getChats } from "./chats/ChatDataProvider.js";
import { chatMessageList } from "./chats/ChatList.js";
import { chatMessageForm } from "./chats/NewChatMessageForm.js"


getUsers().then(LoginForm).then(getChats).then(chatMessageList).then(chatMessageForm)