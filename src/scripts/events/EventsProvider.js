let events = [];

const eventHub = document.querySelector(".container");

export const useEvents = () => events.slice();

export const getEvents = () => {
  return fetch("http://localhost:3000/events")
    .then((response) => response.json())
    .then((parsedEvents) => {
      events = parsedEvents;
    });
};

export const saveEvents = (events) => {
  return fetch("http://localhost:3000/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(events),
  })
    .then(getEvents)
    .then(dispatchStateChangeEvent);
};


export const deleteEvents = eventId => {
    return fetch(`http://localhost:3000/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent = () => {
  const eventsStateChangedEvent = new CustomEvent("eventsStateChanged");

  eventHub.dispatchEvent(eventsStateChangedEvent);
};