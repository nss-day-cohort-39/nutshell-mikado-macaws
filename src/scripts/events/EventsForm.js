// Author: Daniel Hero 
// Purpose: To utililize a button that renders a "Save Event" form on the DOM.  
// Once the form has been completed, a save button will send the new information to the server for storage.


import { saveEvents } from "./EventsProvider.js";



const eventButtonTarget = document.querySelector(".dashboard__eventsForm")
const eventFormTarget = document.querySelector(".dashboard__eventsForm")
const eventHub = document.querySelector(".container")




export const newEventButton = () => {
    
      eventButtonTarget.innerHTML = `
          
      <section class="newEventButtonSection">    
        <button id="showNewEventForm">Add New Event</button>
      </section>
          `
    }
  

  eventButtonTarget.addEventListener("click", clickEvent => {
      if(clickEvent.target.id ==="showNewEventForm") {
         
            const renderNewEventForm = () => {
                eventFormTarget.innerHTML = `
                      <section id="addEventForm">
                      <form>
                      <fieldset>
                      <label for="event__name">Event Name:</label>
                      <input type="text" id="eventName"></input>  
                      
                      <label for="event__date">Event Date:</label>
                      <input type="date" id="eventDate"></input>
                      
                      <label for="event__location">Event Location:</label>
                      <input type="text" id="eventLocation"></input>            
                      
                      </fieldset> 
                      </form>
                      <button id="saveEventButton">Save Event</button>
                      </section>
                      `
        }
          
              renderNewEventForm()
    }})


 eventFormTarget.addEventListener("click", clickEvent => {
     if(clickEvent.target.id === "saveEventButton") {
        const eventName = document.querySelector("#eventName").value
        const eventDate = document.querySelector("#eventDate").value
        const eventLocation = document.querySelector("#eventLocation").value
        let activeUser = sessionStorage.getItem('activeUser')

        if (eventName === "") {
            window.alert("Please enter name of event.")
          } else if (eventDate === "") {
            window.alert("Please enter date of event")
          } else if (eventLocation === "") {
            window.alert("Please enter location of event.")
          } else {
            
              const newEventSaved = {
                eventName: eventName,
                eventDate: eventDate,
                eventLocation: eventLocation,
                userId: parseInt(activeUser)
              }
          

        saveEvents(newEventSaved).then(() => {
        
            if(clickEvent.target.id ==="saveEventButton") {
                
                newEventButton()

        }})

        const newEventPosted = newCustomEvent("newEventPosted")
        eventHub.dispatchEvent(newEventPosted)


            }}})    






    