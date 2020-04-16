// Author: Mark McCann
// Module's purpose:
// 1. Render's form html

import { saveChat } from "./ChatDataProvider.js";

const eventHub = document.querySelector(".container");

// Creates the html string for a new chat
export const chatMessageForm = () => {
    return `
        <section class="chat__form_container">
            <input class="chat__form_input" placeholder>Enter your message here!!!</input>
            <button id="chat__form_button">Submit</button>
        </section>
`;
};
eventHub.addEventListener("click", (e) => {
    if (e.target.id === "chat__form_button") {
        const chatMessage = e.target.value;
        const newChatObject = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            message: chatMessage,
            dateTime: Date.now(),
        };
        saveChat(newChatObject);
        // if (chatMessage) {
        //     const clickEventOfSubmit = new CustomEvent("eventOfSubmitButton", {
        //         detail: {
        //             chatMessage: chatMessage,
        //         },
        //     });
        //     eventHub.dispatchEvent(clickEventOfSubmit);
        // }
    }
});
