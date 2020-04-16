// Authored by Mark McCann


export const singleChatMessage = (userObj, chatObj) => {
    return `
        <section class="chat__container">
            <div class="chat__container_user">${userObj.userName}</div>
            <div class="chat__container_message">${chatObj.message}</div>
        </section>
    `
}