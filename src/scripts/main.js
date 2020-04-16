import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { NewsArticleButton } from "./news/NewsArticleButton.js";
import { getNews } from "./news/NewsDataProvider.js";
import "./news/NewsForm.js"
import { renderNews } from "./news/NewsList.js";
import "./news/NewsList.js"
import { getFriends } from "./friends/FriendsProvider.js";
import "./friends/FriendsList.js";
import { newEventButton } from "./events/EventsForm.js";
import { getEvents } from "./events/EventsProvider.js";
getUsers().then(LoginForm);

getEvents().then(newEventButton)








getUsers().then(LoginForm).then(getFriends);





getNews()
    .then(NewsArticleButton)

