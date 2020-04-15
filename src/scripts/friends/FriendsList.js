import {
  useFriends,
  deleteFriend,
  getFriends,
  saveFriend,
} from "./FriendsProvider.js";
import "./Friend.js";
import { useUsers } from "../users/UsersDataProvider.js";

const contentTarget = document.querySelector(".dashboard__friendsList");

const FriendsList = () => {
  const friends = useFriends();
  const users = useUsers();

  const render = () => {
    contentTarget.innerHTML = `
    
    `;
  };
};
