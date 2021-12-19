import "./style.css";
import "./navBar.css";
import "./form.css";
import {format} from "date-fns";
import {createNewTaskForm} from "./createNewTask.js";
import {addNewTask} from "./ToDoList.js";
import {closeForm} from "./createNewTask.js";
import {addTasksToDOM} from "./app.js";

(function addEventListers () {
    document.getElementById("collapse-bar").addEventListener("click", toggleFilterBar);

    document.getElementById("add").addEventListener("click", function () {
        createNewTaskForm();
        document.getElementById("submit").addEventListener("click", function (event) {
            event.preventDefault();
            addNewTask();
            closeForm();
        });
    });
})();

function toggleFilterBar() {
    const toggle = document.getElementById("filter-bar");

    if (toggle.style.display === "block") {
        toggle.style.display = "none";
    } else {
        toggle.style.display = "block";
    }
};

(function currentDate() {
    const dateElement = document.getElementById("today-date");
    dateElement.textContent = format(new Date(), "MM/dd/yyyy");
})();

(function allTasks () {
    addTasksToDOM(localStorage);
})();

