// Author: Mark McCann

// Module's purpose:
// 1. Querry the DOM

import { useChats } from "./ChatDataProvider.js"
import { singleChatMessage } from "./Chat.js"
import { chatMessageForm } from "./NewChatMessageForm.js"

import { useUsers } from "../users/UsersDataProvider.js"

const contentTarget = document.querySelector(".dashboard__chat")

const render = (chatMessages) => {
    const multipleUsers = useUsers()

    contentTarget.innerHTML = `
    <section class="preview__container">
    ${chatMessages.map((chatMessage) => {
        const singleUser = multipleUsers.find((singleUser) =>
            singleUser.id === chatMessage.singleUserId)
        return singleChatMessage(chatMessage, singleUser)
    })
            .join("")}
            <section class="preview__container_form">${chatMessageForm()}</section>
        }
    </section>
    `
}

export const chatMessageList = () => {
    const chatMessages = useChats()
    render(chatMessages)
}