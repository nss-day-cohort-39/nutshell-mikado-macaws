import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getFriends } from "./friends/FriendsProvider.js";
import "./friends/FriendsList.js";

getUsers().then(LoginForm).then(getFriends);
