//DANIEL FUQUA

import { useUsers } from "../users/UsersDataProvider.js";
import { useFriends, deleteFriend, saveFriend } from "./FriendsProvider.js";
import Friend from "./Friend.js";
import AddFriendForm from "./AddFriendForm.js";

const contentTarget = document.querySelector(".dashboard__friendsList");
const eventHub = document.querySelector(".container");

export const FriendsList = () => {
  // if statement insures friends list will render upon refresh of page. (As long as SS item is set to a user's id.)
  if (sessionStorage.getItem("activeUser")) {
    // will need to find users that the active user is friends with.
    const users = useUsers();
    const friendships = useFriends();

    const render = () => {
      // store the active users ID.
      const activeUserId = parseInt(sessionStorage.getItem("activeUser"));
      // store the friend objects related to the active user.
      const arrayOfActiveUsersFriendships = friendships.filter(
        (friendship) => friendship.activeId === activeUserId
      );
      // store the user objects that the active user is friedns with.
      const arrayOfFriends = arrayOfActiveUsersFriendships.map((friendship) => {
        return users.find((user) => user.id === friendship.userId);
      });
      // pass each user object in arrayOfFriends through the Friend funtion, creating an html representation for each one.
      contentTarget.innerHTML = `
    <article class="friendsList">
        <h2>Friends List</h2>
            ${arrayOfFriends
              .map((friend) => {
                const html = Friend(friend);
                return html;
              })
              .join("")}

    </article>
    <br>
    <br>
    <button id="addFriendButton">Add Friend</button>
    <div id="addFriendDropdown"></div>
    `;
    };

    render();
  }
};
// When a user clicks the login button the friends list will render.
eventHub.addEventListener("userLoggedIn", (customEvent) => {
  FriendsList();
});
// When a user clicks the add friend button a form renders.
contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addFriendButton") {
    const friendSelectTarget = document.querySelector("#addFriendDropdown");
    friendSelectTarget.innerHTML = AddFriendForm();
  }
});
// When user clicks on delete button it will delete corresponding friend object.
contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteFriend--")) {
    const [prefix, friendId] = clickEvent.target.id.split("--");
    const friends = useFriends();
    const foundFriendObj = friends.find(
      (friend) =>
        friend.userId === parseInt(friendId) &&
        friend.activeId === parseInt(sessionStorage.getItem("activeUser"))
    );
    deleteFriend(foundFriendObj.id);
  }
});

// When user chooses a username from the dropdown a new friend object is added to the database.
contentTarget.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "friendDropdown") {
    const chosenUserId = parseInt(changeEvent.target.value);
    if (chosenUserId === parseInt(sessionStorage.getItem("activeUser"))) {
      window.alert("User may not add self as friend. Please add someone else!");
    } else {
      const newFriendshipObject = {
        userId: chosenUserId,
        activeId: parseInt(sessionStorage.getItem("activeUser")),
      };
      saveFriend(newFriendshipObject);
    }
  }
});

// Anytime the state of the friend data changes the friends list will re-render.
eventHub.addEventListener("friendStateChanged", (customEvent) => {
  FriendsList();
});
