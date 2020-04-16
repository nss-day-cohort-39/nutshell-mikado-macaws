// Author: Mark McCann
// Module's purpose:
// 1. Set the empty array to store data.
// 2. Search for the DOM element so that the custom event can be dispatched.
// 3. Make a copy of the data.
// 4. Get the chat messages.
// 5. Save chat messages.


let chats = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")

    eventHub.dispatchEvent(chatStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state
*/
export const useChats = () => chats.slice()

/*
    Get the state of the notes from the API into the application
*/
export const getChats = () => {
    return fetch('http://localhost:3000/chat')
        .then(response => response.json())
        .then(parsedChats => {
            chats = parsedChats
        })
}


export const saveChat = (chatObject) => {
    return fetch('http://localhost:3000/chat', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chatObject)
    })
        .then(getChats)
        .then(dispatchStateChangeEvent)
}