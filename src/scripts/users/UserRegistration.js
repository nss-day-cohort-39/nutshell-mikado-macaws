import { saveUsers } from "./UsersDataProvider.js";

const registrationForm = document.querySelector(".register");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("getRegisterClicked", (CustomEvent) => {
  const RegisterForm = () => {
    const render = () => {
      registrationForm.innerHTML = `
            <section id="registrationForm">
            <form>
            <fieldset>
            <label for="user_email">Email:</label>
            <input type="text" id="userEmail"></input>  
            
            
            <label for="user_name">Username:</label>
            <input type="text" id="userName"></input>
            
            <label for="user_password">Password:</label>
            <input type="text" id="userPass"></input>
            
            <label for="user_password_confirm">Confirm Password:</label>
            <input type="text" id="userPassConfirm"></input>
            
            
            </fieldset> 
            </form>
            <button id="Register_Button">Register</button>
            </section>
            `;
    };

    render();
  };
  RegisterForm();
});

registrationForm.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "Register_Button") {
    const email = document.querySelector("#userEmail").value;
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#userPass").value;
    // Make a new object representation of user
    const newUserRegistered = {
      email: email,
      userName: userName,
      password: password,
    };
    // Change API state and application state
    saveUsers(newUserRegistered);
  }
});
