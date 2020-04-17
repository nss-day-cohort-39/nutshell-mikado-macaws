/*
Author: Brad Cowart
Purpose: This module provides database access functionality. 
*/

let tasks = [];

const eventHub = document.querySelector(".container");

export const useTasks = () => tasks.slice();

export const getTasks = () => {
  return fetch("http://localhost:3000/tasks")
    .then((response) => response.json())
    .then((parsedTasks) => {
      tasks = parsedTasks;
    });
};

export const saveTasks = (tasks) => {
  return fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasks),
  })
    .then(getTasks)
    .then(dispatchStateChangeEvent);
};

export const deleteTasks = TaskId => {
  return fetch(`http://localhost:3000/tasks/${TaskId}`, {
      method: "DELETE"
  })
      .then(getTasks)
      .then(dispatchStateChangeEvent);
}

const dispatchStateChangeEvent = () => {
  const taskStateChangedEvent = new CustomEvent("taskStateChanged");

  eventHub.dispatchEvent(taskStateChangedEvent);
};
