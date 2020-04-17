// Author: Mark McCann

// Module's purpose:
// 1. Querry the DOM element of .dashboard__chat
// 2. Call the chat message html rep
// 3. Loop through the array and convert each to an html rep
// 4. Find the userId of the message and dispatch to the userObj
// 5. Function that makes the chatMessageList

import { useChats } from "./ChatDataProvider.js";
import { singleChatMessage } from "./Chat.js";
import { chatMessageForm } from "./NewChatMessageForm.js";

import { useUsers } from "../users/UsersDataProvider.js";

const contentTarget = document.querySelector(".dashboard__chat");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("eventOfSubmitButton", (CustomEvent) => {
    contentTarget.innerHTML;
});

const render = (chatMessages) => {
    const multipleUsers = useUsers();

    contentTarget.innerHTML = `
    <section class="preview__container">
    ${chatMessages
            .map((chatMessage) => {
                const singleUser = multipleUsers.find(
                    (singleUser) => singleUser.id === chatMessage.userId
                );
                return singleChatMessage(singleUser, chatMessage);
            })
            .join("")}
            <section class="preview__container_form">${chatMessageForm()}</section>
        
    </section>
    `;
};

export const chatMessageList = () => {
    const chatMessages = useChats();
    render(chatMessages);
};
