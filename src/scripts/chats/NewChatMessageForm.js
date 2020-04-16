// Author: Mark McCann


const eventHub = document.querySelector(".container")

export const chatMessageForm = () => {
    return `
        <section class="chat__form_container">
            <input class="chat__form_input">Enter your message here!!!</input>
            <button class="chat__form_button">Submit</button>
        </section>
`
}

eventHub.addEventListener("click", (e) => {

})