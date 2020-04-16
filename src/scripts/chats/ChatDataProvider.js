let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")

    eventHub.dispatchEvent(chatStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state
*/
export const useNotes = () => notes.sort((c, n) => n.timestamp - c.timestamp).slice()

/*
    Get the state of the notes from the API into the application
*/
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}