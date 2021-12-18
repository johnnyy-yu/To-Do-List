import "./style.css";
import "./navBar.css";
import "./form.css";
import {format} from "date-fns";
import {createNewTaskForm} from "./createNewTask.js";

document.getElementById("collapse-bar").addEventListener("click", toggleFilterBar);
document.getElementById("add").addEventListener("click", createNewTaskForm);

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

