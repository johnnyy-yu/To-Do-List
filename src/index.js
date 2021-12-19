import "./style.css";
import "./navBar.css";
import "./form.css";
import {format} from "date-fns";
import {createNewTaskForm} from "./createNewTask.js";
import {addNewTask} from "./ToDoList.js";
import {closeForm} from "./createNewTask.js";
import {addTasksToDOM} from "./app.js";
import {sort} from "./filter.js";

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

    document.getElementById("filter-past").addEventListener("click", function () {
        const array = new sort();
        addTasksToDOM(array.past());
    });

    document.getElementById("filter-future").addEventListener("click", function () {
        const array = new sort();
        addTasksToDOM(array.future());
    })

    document.getElementById("home").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.all());
    })

    document.getElementById("filter-all").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.all());
    })

    document.getElementById("filter-thisWeek").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.thisWeek());
    })

    document.getElementById("filter-tomorrow").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.tomorrow());
    })

    document.getElementById("filter-today").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.today());
    })

    document.getElementById("filter-important").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.important());
    })

    document.getElementById("filter-normal").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.normal());
    })

    document.getElementById("filter-notImportant").addEventListener("click", function() {
        const array = new sort();
        addTasksToDOM(array.notImportant());
    })
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
    const array = new sort();
    addTasksToDOM(array.all());
})();

