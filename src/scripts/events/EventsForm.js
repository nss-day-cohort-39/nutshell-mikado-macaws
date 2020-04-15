import { useEvents, saveEvents } from "./EventsProvider";

const eventFormTarget = document.querySelector(".dashboard__eventsForm");
const eventHub = document.querySelector(".container");




export const newEventButton = () => {
    const buttonRender = () => {
      eventFormTarget.innerHTML = `
          
      <section class="newEventButtonSection">    
        <button id="newEventButton">Add New Event</button>
      </section>
          `;
    };
  
    buttonRender();
  };

  eventFormTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "newEventButton") {
        const goNewEventForm = new CustomEvent("newEventClicked")
        eventHub.dispatchEvent(goNewEventForm)
    })

    eventHub.addEventListener("newEventClicked", (customEvent) => {
        eventFormTarget.classList.add("invisible")
    })





eventHub.addEventListener("newEventClicked", (CustomEvent) => {
    const newEventForm = () => {
      const render = () => {
        eventForm.innerHTML = `
              <section id="addEventForm">
              <form>
              <fieldset>
              <label for="event__name">Event Name</label>
              <input type="text" id="eventName"></input>  
              
              <label for="event__date">Event Date</label>
              <input type="datetime-local" id="eventDate"></input>
              
              <label for="event__location">Event Location</label>
              <input type="text" id="eventLocation"></input>            
              
              </fieldset> 
              </form>
              <button id="saveEvent--Button">Save Event</button>
              </section>
              `;
      };
  
      render();
    };
    newEventForm();
  });