const Friend = (userObj, friendObj) => {
  return `
    <article id="friend_${friendObj.id}">
        <p>${userObj.userName}</p>
        <button id="deleteFriend_${friendObj.id}">Delete</button>
    </article>
    `;
};

export default Friend;
