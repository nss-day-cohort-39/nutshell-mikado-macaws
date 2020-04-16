import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { NewsArticleButton } from "./news/NewsArticleButton.js";
import { getNews } from "./news/NewsDataProvider.js";
import "./news/NewsForm.js"
import { renderNews } from "./news/NewsList.js";
import "./news/NewsList.js"
import { newEventButton } from "./events/EventsForm.js";
import { getEvents } from "./events/EventsProvider.js";
getUsers().then(LoginForm);

getEvents().then(newEventButton)













getNews()
    .then(NewsArticleButton)


