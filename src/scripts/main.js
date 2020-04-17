import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getChats } from "./chats/ChatDataProvider.js";
import { chatMessageList } from "./chats/ChatList.js";
import { chatMessageForm } from "./chats/NewChatMessageForm.js"
import { NewsArticleButton } from "./news/NewsArticleButton.js";
import { getNews } from "./news/NewsDataProvider.js";
import "./news/NewsForm.js";
import "./news/NewsList.js";
import { getFriends } from "./friends/FriendsProvider.js";
import "./friends/FriendsList.js";
import { newEventButton } from "./events/EventsForm.js";
import { getEvents } from "./events/EventsProvider.js";
import { FriendsList } from "./friends/FriendsList.js";




getUsers()
    .then(LoginForm)
    .then(getFriends)
    .then(FriendsList)
    .then(getEvents)
    .then(newEventButton)
    .then(getNews)
    .then(NewsArticleButton)
    .then(getChats)
    .then(chatMessageList)
    .then(chatMessageForm);
