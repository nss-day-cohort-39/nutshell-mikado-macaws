import { useUsers } from "../users/UsersDataProvider.js";
import { useFriends, deleteFriend, saveFriend } from "./FriendsProvider.js";
import Friend from "./Friend.js";
import AddFriendForm from "./AddFriendForm.js";

const contentTarget = document.querySelector(".dashboard__friendsList");
const eventHub = document.querySelector(".container");

const FriendsList = () => {
  const users = useUsers();
  const friendships = useFriends();

  const render = () => {
    const activeUserId = parseInt(sessionStorage.getItem("activeUser"));
    const arrayOfActiveUsersFriendships = friendships.filter(
      (friendship) => friendship.activeId === activeUserId
    );
    const arrayOfFriends = arrayOfActiveUsersFriendships.map((friendship) => {
      return users.find((user) => user.id === friendship.userId);
    });

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
};

eventHub.addEventListener("userLoggedIn", (customEvent) => {
  FriendsList();
});

contentTarget.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addFriendButton") {
    const friendSelectTarget = document.querySelector("#addFriendDropdown");
    friendSelectTarget.innerHTML = AddFriendForm();
  }
});

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

// choose a friend to save to users friends list
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

eventHub.addEventListener("friendStateChanged", (customEvent) => {
  FriendsList();
});
