import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { NewArticleButton } from "./news/NewsForm.js";

getUsers().then(LoginForm);

NewArticleButton()