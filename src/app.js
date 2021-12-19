import { formatDistanceToNowStrict } from "date-fns";

export function addCategoryToFilterMenu (aCategory) {
    if (checkIfFilterExists(aCategory)) {
        const categoryFilters = document.querySelector("#filter-category");
        const categoryLI = document.createElement("li");
        categoryLI.id = "category-" + aCategory.replace(/\s/g, "");
        categoryFilters.appendChild(categoryLI);

        const thisCategoryID = "#" + categoryLI.id;
        const thisCategoryFilter = document.querySelector(thisCategoryID);
        const categoryButton = document.createElement("button");
        categoryButton.textContent = aCategory;
        categoryButton.value = "" + aCategory.replace(/\s/g, "");
        categoryButton.id = "" + aCategory.replace(/\s/g, "");
        thisCategoryFilter.appendChild(categoryButton);
          // document.getElementById("categoryButton.id).addEventListener("click", () => {});      #for filtering
    }

    function checkIfFilterExists (aCategory) {
        const aCategoryID = "category-" + aCategory.replace(/\s/g, "");
        console.log(document.getElementById(aCategoryID));

        if (document.getElementById(aCategoryID)) {
            return false;
        } else {
            return true;
        }
    }
}

export function addTasksToDOM (filteredArray) {
    const DOM = document.querySelector(".tasks");
    DOM.textContent = "";
    console.log(filteredArray);

    for (let i = 0; i < filteredArray.length; i++) {
        const key = filteredArray[i][0][0]

        const container = (() => {
            const container = document.createElement("div");
            container.id = key;
            // container.style.color = "black";
            DOM.appendChild(container);
        })();

        const thisTaskContainerID = "#" + key;
        const thisTaskContainer = document.querySelector(thisTaskContainerID);

        const checkBox = (() => {
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.className = "checkbox";
            checkBox.id = "checkbox-" + key;
            thisTaskContainer.appendChild(checkBox);

            //PUT CHECKBOX FUNCTIONALITY HERE
            // document.getElementById(checkBox.id).addEventListener("click", function() {
            //     const colorToggle = document.getElementById(key);

            //     if (colorToggle.style.color === "black") {
            //         colorToggle.style.color = "grey";
            //     } else {
            //         colorToggle.style.color = "black"
            //     }
            // })
        })();

        const taskObject = retrievingObject(key);

        const objectProperties = ((properties) => {
            for (const property of properties) {
                const aObjectProperty = document.createElement("div");
                aObjectProperty.className = "task-" + property;
                aObjectProperty.id = key + "-" + property;
                aObjectProperty.textContent = taskObject[property];
                thisTaskContainer.appendChild(aObjectProperty);
            }
        })(["task", "category", "priority", "when"]);

        const moreDetailsButton = (() => {
            const button = document.createElement("button");
            button.className = "button-details";
            button.id = key + "-moreDetails"
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
                description.id = key + "-description"
                description.textContent = "Description:\n" + taskObject["description"];
                thisDetailContainer.appendChild(description);
            })();

            const fromNow = (() => {
                const date = document.createElement("div");
                date.className = "task-fromNow";
                date.id = key + "-fromNow";
                date.textContent = "When:\n" + formatDistanceToNowStrict(new Date(taskObject["when"].replace(/-/g, '\/')), 
                    {addSuffix: true, roundingMethod: "round"});
                thisDetailContainer.appendChild(date);
            })();

            const detailCategory = (() => {
                const category = document.createElement("div");
                category.className = "detail-category";
                category.id = "detail-category" + key;
                category.textContent = "Category:\n" + taskObject["category"];
                thisDetailContainer.appendChild(category);
            })();

            const detailPriority = (() => {
                const priority = document.createElement("div");
                priority.className = "detail-priority";
                priority.id = "detail-priority" + key;
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
    }
}

function retrievingObject (key) {
    const retrievedObject = localStorage.getItem(key);

    return JSON.parse(retrievedObject);
}

function toggleDetails (key) {
    const detailContainer = key + "-details";
    const toggle = document.getElementById(detailContainer);

    if (toggle.style.display === "block") {
        toggle.style.display = "none";
    } else {
        toggle.style.display = "block";
    }
}