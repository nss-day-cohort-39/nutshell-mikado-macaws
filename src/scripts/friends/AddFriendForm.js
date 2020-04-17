//DANIEL FUQUA

import { useUsers } from "../users/UsersDataProvider.js";

const AddFriendForm = () => {
  const users = useUsers();
  return `
    <select id="friendDropdown">
    <option value="0">Make a user your friend...</option>
        ${users.map((user) => {
          return `<option value="${user.id}">${user.userName}</option>`;
        })}
        </select>
    `;
};

export default AddFriendForm;
