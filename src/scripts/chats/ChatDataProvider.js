// Author: Mark McCann

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
    return fetch('http://localhost:3000/chats')
        .then(response => response.json())
        .then(parsedChats => {
            notes = parsedChats
        })
}
// May not need delete fetch. On 4/16 Madi said that she will check w/ Steve.
// export const deleteChat = chatId => {
//     return fetch(`http://localhost:3000/chats/${chatId}`, {
//         method: "DELETE"
//     })
//         .then(getChats)
//         .then(dispatchStateChangeEvent)
// }

export const saveChat = (chatObject) => {
    return fetch('http://localhost:3000/chats', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chatObject)
    })
        .then(getChats)
        .then(dispatchStateChangeEvent)
}