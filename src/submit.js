import {addToFilterMenu} from "./app.js";
import format from "date-fns/format";

class Task {
    constructor (taskName, description, when, category, priority,) {
        this.task = taskName;
        this.description = description;
        this.when = when;
        this.category = category;
        this.priority = priority;
    }
}

export function submit () {
    function createNewTaskFromForm () {
        const task = document.getElementById("task").value;
        const description = document.getElementById("description").value;
        const date = format(new Date(document.getElementById("date").value.replace(/-/g, '\/')), "MM/dd/yyyy");
        const category = document.getElementById("category").value;
        const priority = document.getElementById("priority").value;

        const newTask = new Task(task, description, date, category, priority);

        return newTask;
    }

    (function addNewTaskToStorage () {
        const newTask = "task" + localStorage.length;
        localStorage.setItem(newTask, JSON.stringify(createNewTaskFromForm()))
    })();

    (function addCategoryToStorage () {
        const category = createNewTaskFromForm().category;
        let categories = JSON.parse(localStorage.getItem("categories"));

        if (!categories.includes(category)) {
            categories.push(category);
            localStorage.setItem("categories", JSON.stringify(categories));
        }
    })();

    const addCategoryToFilterMenu = (() => {
        addToFilterMenu();
    })();
}

