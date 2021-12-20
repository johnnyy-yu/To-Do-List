import "./style.css";
import "./navBar.css";
import "./form.css";
import {format} from "date-fns";
import {addTasksToDOM, addToFilterMenu} from "./app.js";
import {sort} from "./filter.js";
import {addEvents} from "./events.js"

const events = (() => {
    addEvents();
})();

const currentDate = (() => {
    const dateElement = document.getElementById("today-date");
    dateElement.textContent = format(new Date(), "MM/dd/yyyy");
})();

const showAllTasks = (() => {
    const array = new sort();
    addTasksToDOM(array.all());
})();

const categories = (() => {
    if (!localStorage.getItem("categories")) {
        localStorage.setItem("categories", JSON.stringify(new Array));
    }
})();

const filterMenu = (() => {
    addToFilterMenu()
})();
