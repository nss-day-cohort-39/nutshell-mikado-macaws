import { LoginForm } from "./users/UserLogin.js";
import "./users/UserRegistration.js";
import { getUsers } from "./users/UsersDataProvider.js";
import { newEventButton } from "./events/EventsForm.js";
import { getEvents } from "./events/EventsProvider.js";



getUsers().then(LoginForm);

getEvents().then(newEventButton)




