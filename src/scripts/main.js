import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getChats } from "./chats/ChatDataProvider.js";
import { chatMessageList } from "./chats/ChatList.js";
import { chatMessageForm } from "./chats/NewChatMessageForm.js"
import { getFriends } from "./friends/FriendsProvider.js";
import "./friends/FriendsList.js";
import { newEventButton } from "./events/EventsForm.js";
import { getEvents } from "./events/EventsProvider.js";


getUsers().then(LoginForm).then(getFriends).then(getChats).then(chatMessageList).then(chatMessageForm)



getEvents().then(newEventButton);
