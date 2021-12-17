export function createNewTaskForm () {
    const createFormContainer = (() => {
        const page = document.querySelector("body");
        const formContainer = document.createElement("div");
        formContainer.className = "form-container"
        page.appendChild(formContainer);
    })();

    const form = (() => {
        const formContainer = document.querySelector(".form-container");
        const form = document.createElement("form");
        form.id = "form";
        formContainer.appendChild(form);
    })();

    const fieldSet = (() => {
        const taskForm = document.querySelector("#form");
        const set = document.createElement("fieldset");
        taskForm.appendChild(set)
    })();

    const formFieldSet = document.querySelector("fieldset");

    const fieldSetLegend = (() => {
        const legend = document.createElement("legend");
        legend.textContent = "Add a New Task";
        formFieldSet.appendChild(legend);
    })();

    const taskName = (() => {
        const name = document.createElement("input");
        name.type = "text";
        name.id = "task";
        name.placeholder = "Enter task";
        formFieldSet.appendChild(name);
    })();

    const taskDescription = (() => {
        const description = document.createElement("textarea");
        description.id = "description";
        description.placeholder = "Enter a description";
        formFieldSet.appendChild(description);
    })();

    const taskDate = (() => {
        const date = document.createElement("input");
        date.type = "date";
        date.id = "date";
        formFieldSet.appendChild(date);
    })();

    const taskCategory = (() => {
        const category = document.createElement("input");
        category.type = "text";
        category.id = "category";
        category.placeholder = "Enter a category";
        formFieldSet.appendChild(category);
    })();

    const taskPriority = (() => {
        const priority = document.createElement("select");
        priority.id = "priority";
        formFieldSet.appendChild(priority);

        const options = (() => {
            const optionsArray = ["Choose Priority...","Important", "Normal", "Not Important"];
            const prioritySelect = document.getElementById("priority");
            console.log(prioritySelect);
            
            for (const choices of optionsArray) {
                const option = document.createElement("option");
                option.value = choices;
                option.textContent = choices;
                prioritySelect.appendChild(option);

                console.log(option);

                if (choices == "Choose Priority...") {
                    option.setAttribute("disabled", "");
                    option.setAttribute("hidden", "");
                }
            }
        })();
    })();

    const taskSubmit = (() => {
        const submitButton = document.createElement("input");
        submitButton.type = "submit";
        formFieldSet.appendChild(submitButton);
    })();

    const taskCancel = (() => {
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function () {
            const entireForm = document.getElementsByClassName("form-container");
            
            entireForm[0].remove();
        })
        formFieldSet.appendChild(cancelButton);
    })();

    // const createLabels = (() => {
    //     const labels = ["task", "description", "date", "category", "priority"];

    //     for (const label of labels) {
    //         const createLabels = document.createElement("label");
    //         createLabels.htmlFor = label;
    //         createLabels.textContent = label.charAt(0).toUpperCase() + label.slice(1);
    //         formFieldSet.appendChild(createLabels);
    //     }
    // })();
}