import {createNewTaskForm} from "./form.js";
import {addNewTask} from "./tasks.js";
import {closeForm} from "./form.js";
import {addTasksToDOM} from "./app.js";
import {sort} from "./filter.js";

export function addEvents () {
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
};

function toggleFilterBar() {
    const toggle = document.getElementById("filter-bar");

    if (toggle.style.display === "block") {
        toggle.style.display = "none";
    } else {
        toggle.style.display = "block";
    }
};