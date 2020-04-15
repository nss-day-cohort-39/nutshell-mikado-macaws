let friends = [];

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  const friendStateChangedEvent = new CustomEvent("dashboard__friendsList");

  eventHub.dispatchEvent(friendStateChangedEvent);
};

/*
    Allow other modules to get a copy of the application state
*/
export const useFriends = () => friends.slice();

/*
    Get the state of the notes from the API into the application
*/
export const getFriends = () => {
  return fetch("http://localhost:3000/friends")
    .then((response) => response.json())
    .then((parsedFriends) => {
      notes = parsedFriends;
    });
};

export const deleteFriend = (friendId) => {
  return fetch(`http://localhost:3000/friends/${friendId}`, {
    method: "DELETE",
  })
    .then(getFriends)
    .then(dispatchStateChangeEvent);
};

export const saveFriend = (friend) => {
  return fetch("http://localhost:3000/friends", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(friend),
  })
    .then(getFriends)
    .then(dispatchStateChangeEvent);
};
