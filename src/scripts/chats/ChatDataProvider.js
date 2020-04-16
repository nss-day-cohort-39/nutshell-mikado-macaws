let chats = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")

    eventHub.dispatchEvent(chatStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state
*/
export const useChats = () => chats.sort((c, n) => n.timestamp - c.timestamp).slice()

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

export const deleteChat = chatId => {
    return fetch(`http://localhost:3000/chats/${chatId}`, {
        method: "DELETE"
    })
        .then(getChats)
        .then(dispatchStateChangeEvent)
}

export const saveChat = chat => {
    return fetch('http://localhost:3000/chats', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
        .then(getChats)
        .then(dispatchStateChangeEvent)
}