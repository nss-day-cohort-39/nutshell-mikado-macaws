import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { NewsArticleButton } from "./news/NewsArticleButton.js";
import "./news/NewsForm.js"
getUsers().then(LoginForm);

NewsArticleButton()
 