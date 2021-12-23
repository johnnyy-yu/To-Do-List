import { add, formatDistanceToNowStrict } from "date-fns";
import { addEventToCategory } from "./events";
import { sort } from "./filter";

export function addToFilterMenu () {
    const categories = JSON.parse(localStorage.getItem("categories"));
    const categoryFilterMenu = document.querySelector("#filter-category");
    categoryFilterMenu.textContent = ""

    for (const category of categories) {
            const button = document.createElement("button");
            button.id = "filter-" + category.replace(/\s/g, "");
            button.textContent = category;
            button.value = category;

            button.onclick = function (event) {
                const array = new sort()
                addTasksToDOM(array.categories(event.target.value))
            }

            const container = document.createElement("li");
            categoryFilterMenu.appendChild(container).appendChild(button);
    }
}

export function addTasksToDOM (filteredArray) {
    const DOM = document.querySelector("#tasks");
    DOM.textContent = "";

    for (let i = 0; i < filteredArray.length; i++) {
        const key = filteredArray[i][0][0]

        const container = (() => {
            const container = document.createElement("div");
            container.id = key;
            container.className = "tasks-container"
            DOM.appendChild(container);
        })();

        const thisTaskContainerID = "#" + key;
        const thisTaskContainer = document.querySelector(thisTaskContainerID);
        const taskObject = retrievingObject(key);

        const checkBox = (() => {
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.className = "checkbox";
            checkBox.onclick = function() {
                if (taskCompleted(key)) {
                    document.getElementById(key).style.color = "silver";
                } else {
                    document.getElementById(key).style.color = "black";
                }
            }

            if (taskObject["completed"] === true) {
                checkBox.checked = true;
                document.getElementById(key).style.color = "silver";
            } else {
                checkBox.checked = false;
                document.getElementById(key).style.color = "black";
            }
            
            thisTaskContainer.appendChild(checkBox);
        })();

        const objectProperties = ((properties) => {
            for (const property of properties) {
                const aObjectProperty = document.createElement("div");
                aObjectProperty.className = "task-" + property;
                aObjectProperty.textContent = taskObject[property];

                if (taskObject[property] == "Not Important") {
                    aObjectProperty.style.background = "rgba(255, 9, 1, 0.30)";
                } else if (taskObject[property] == "Normal") {
                    aObjectProperty.style.background = "rgba(255, 9, 1, 0.65)";
                } else if (taskObject[property] == "Important") {
                    aObjectProperty.style.background = "rgb(255, 0, 0)";
                }

                thisTaskContainer.appendChild(aObjectProperty);
            }
        })(["task", "when"]);

        const moreDetailsButton = (() => {
            const button = document.createElement("button");
            button.className = "button-details";
            button.textContent = "V";
            button.addEventListener("click", function () {
                toggleDetails(key);
            })
            thisTaskContainer.appendChild(button);
        })();

        const moreDetails = (() => {
            const detailsContainer = (() => {
                const container = document.createElement("div");
                container.className = "details-container";
                container.id = key + "-details";
                container.style.display = "none"
                DOM.appendChild(container);
            })();

            const thisDetailContainerID = "#" + key + "-details";
            const thisDetailContainer = document.querySelector(thisDetailContainerID);

            const objectDescription = (() => {
                const description = document.createElement("div");
                description.className = "task-description";
                // description.id = key + "-description"
                description.textContent = "Description:\n" + taskObject["description"];
                thisDetailContainer.appendChild(description);
            })();

            const fromNow = (() => {
                const date = document.createElement("div");
                date.className = "task-fromNow";
                date.textContent = "When:\n" + formatDistanceToNowStrict(new Date(taskObject["when"].replace(/-/g, '\/')), 
                    {addSuffix: true, roundingMethod: "round"});
                thisDetailContainer.appendChild(date);
            })();

            const detailCategory = (() => {
                const category = document.createElement("div");
                category.className = "detail-category";
                category.textContent = "Category:\n" + taskObject["category"];
                thisDetailContainer.appendChild(category);
            })();

            const detailPriority = (() => {
                const priority = document.createElement("div");
                priority.className = "detail-priority";
                priority.textContent = "Priority:\n" + taskObject["priority"];
                thisDetailContainer.appendChild(priority);
            })();

            const deleteTaskButton = (() => {
                const button = document.createElement("button");
                button.className = "deleteTask";
                button.addEventListener("click", function () {
                    thisTaskContainer.remove();
                    thisDetailContainer.remove();
                    delete localStorage[key];

                    
                })
                button.textContent = "Delete Task";
                thisDetailContainer.appendChild(button);
            })();
        })();
    };
}

function retrievingObject (key) {
    const retrievedObject = localStorage.getItem(key);

    return JSON.parse(retrievedObject);
}

function toggleDetails (key) {
    const detailContainer = key + "-details";
    const toggle = document.getElementById(detailContainer);

    if (toggle.style.display === "flex") {
        toggle.style.display = "none";
    } else {
        toggle.style.display = "flex";
    }
}

function taskCompleted (key) {
    const task = JSON.parse(localStorage.getItem(key));
    
    if (task["completed"] === false) {
        task["completed"] = true;
        localStorage.setItem(key, JSON.stringify(task));
        
        return true;
    } else {
        task["completed"] = false;
        localStorage.setItem(key, JSON.stringify(task));
        
        return false;
    }
}