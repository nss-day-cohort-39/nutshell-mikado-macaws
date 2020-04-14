let users = []

const eventHub = document.querySelector(".container")

export const useUsers = () => users.slice()

export const getUsers = () => {
    return fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(parsedUsers => {
        users = parsedUsers
    })
  };

    export const saveUsers = users => {
        return fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(users)
        }).then(getUsers)
          .then(dispatchStateChangeEvent)
    };

  
    
const dispatchStateChangeEvent = () => {
  const usersStateChangedEvent = new CustomEvent("usersStateChanged")

  eventHub.dispatchEvent(usersStateChangedEvent)
}

    