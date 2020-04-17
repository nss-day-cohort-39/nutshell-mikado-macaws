//DANIEL FUQUA

const Friend = (userObj) => {
  return `
    <section id="friend_${userObj.id}">
        <p>${userObj.userName}</p>
        <button id="deleteFriend--${userObj.id}">Delete</button>
    </section>
    `;
};

export default Friend;
