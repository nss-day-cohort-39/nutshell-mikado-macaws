// Author: Mark McCann


const eventHub = document.querySelector(".container")
// Creates the html string for a new chat
export const chatMessageForm = () => {
    return `
        <section class="chat__form_container">
            <input class="chat__form_input">Enter your message here!!!</input>
            <button id="chat__form_button">Submit</button>
        </section>
`
}
// Dispatches the custom event of the submit button 
eventHub.addEventListener("click", (e) => {
    if (e.target.id === "chat__form_button") {
        const chatMessage = document.querySelector(".chat__form_input").value
        if (chatMessage) {
            const clickEventOfSubmit = CustomEvent("eventOfSubmitButton", {
                detail: {
                    chatMessage: chatMessage,
                }
            })
            eventHub.dispatchEvent(clickEventOfSubmit)
        }
    }
})