import { useUsers } from "./UsersDataProvider.js";

const loginTarget = document.querySelector(".login");
const eventHub = document.querySelector(".container");

export const LoginForm = () => {
  const render = () => {
    loginTarget.innerHTML = `
        <section id="loginForm">
        <form>
        <fieldset>
        
        
        <label for="user_name">Username:</label>
        <input type="text" id="userName"></input>
        
        <label for="user_password">Password:</label>
        <input type="password" id="userPass"></input>
        
        
        
        </fieldset> 
        </form>
        <button id="Login_Button">Log In</button>
        <button id="Get_Registered_Button">Get Registered</button>
        </section>
        `;
  };

  render();
};

//listening for Login Button click event.
loginTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "Login_Button") {
    const users = useUsers();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#userPass").value;

    //return the user who's user name matches the entered userName and password in the input fields
    try {
      const foundUser = users.find((user) => {
        if (user.userName === userName && user.password === password) {
          return user;
        }
      });

      //If the try logic returns as true, set session storage item to the foundUser. Then dispatch a custom event to the event hub letting Hub know a user is logged in.
      sessionStorage.setItem("activeUser", foundUser.id);

      const userLoggedIn = new CustomEvent("userLoggedIn");
      eventHub.dispatchEvent(userLoggedIn);
      // if try returns an error, an alert message will pop up saying "Your username or password is incorrect."
    } catch {
      window.alert("Your username or password is incorrect.");
    }
  }
});

//letting the eventHub know that getRegister Button has been clicked
loginTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "Get_Registered_Button") {
    const goRegister = new CustomEvent("getRegisterClicked");
    eventHub.dispatchEvent(goRegister);
  }
});

eventHub.addEventListener("userLoggedIn", (customEvent) => {
  loginTarget.classList.add("invisible");
});
eventHub.addEventListener("getRegisterClicked", (customEvent) => {
  loginTarget.classList.add("invisible");
});
