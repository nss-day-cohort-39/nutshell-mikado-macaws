import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { getFriends } from "./friends/FriendsProvider.js";
import "./friends/FriendsList.js";
import { newEventButton } from "./events/EventsForm.js";
import { getEvents } from "./events/EventsProvider.js";

getUsers().then(LoginForm).then(getFriends);

getEvents().then(newEventButton);
