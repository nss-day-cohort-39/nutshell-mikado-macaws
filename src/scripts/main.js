import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { NewsArticleButton } from "./news/NewsArticleButton.js";
import { getNews } from "./news/NewsDataProvider.js";
import "./news/NewsForm.js"
import { renderNews } from "./news/NewsList.js";
import "./news/NewsList.js"
getUsers().then(LoginForm);

getNews()
    .then(NewsArticleButton)
   