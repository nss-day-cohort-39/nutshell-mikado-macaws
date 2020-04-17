import { saveUsers, useUsers } from "./UsersDataProvider.js";

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
            <input type="text" id="userNameRegister"></input>
            
            <label for="user_password">Password:</label>
            <input type="password" id="userPassRegister"></input>
            
            <label for="user_password_confirm">Confirm Password:</label>
            <input type="password" id="userPassConfirm"></input>
            
            
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
    const userName = document.querySelector("#userNameRegister").value;
    const password = document.querySelector("#userPassRegister").value;
    const confirmPassword = document.querySelector("#userPassConfirm").value;

    if (password !== confirmPassword) {
      window.alert("Please make sure passwords match.");
    } else if (userName === "") {
      window.alert("Please enter a username");
    } else if (email === "") {
      window.alert("Please enter a valid email.");
    } else if (password === "" && confirmPassword === "") {
      window.alert("Please enter a valid password.");
    } else {
      // Make a new object representation of user
      try {
        const newUserRegistered = {
          userName: userName,
          email: email,
          password: password,
        };
        // Change API state and application state
        saveUsers(newUserRegistered).then(() => {
          const users = useUsers();
          const newUser = users.find(
            (user) =>
              user.email === newUserRegistered.email &&
              user.password === newUserRegistered.password
          );
          sessionStorage.setItem("activeUser", newUser.id);
        });

        const userRegistered = new CustomEvent("userRegistered");
        eventHub.dispatchEvent(userRegistered);
      } catch {
        window.alert("Please make sure all fields are correct.");
      }
    }
  }
});
//when user clicks register button the registration form will disapear.
eventHub.addEventListener("userRegistered", (customEvent) => {
  registrationForm.classList.add("invisible");
});
