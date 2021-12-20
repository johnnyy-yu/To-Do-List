import { isFuture, isPast, isThisWeek, isToday, isTomorrow } from "date-fns";

export class sort {
    sortedArray() {
        const convertedArray = [];
        let sortedArray = [];

        const convertStorageToArray = (() => {
            const objects = {...localStorage};
            
            for (const tasks in objects) {
                if (tasks != "categories" && objects[tasks] !== "null") {
                    const taskDetails = JSON.parse((objects[tasks]));
                    convertedArray.push([tasks, taskDetails]);
                }
            }
        })();

        const sortArray = (() => {
            sortedArray = convertedArray;

            sortedArray.sort(function compare(a, b) {
                const dateA = new Date(a[1]["when"]);
                const dateB = new Date(b[1]["when"]);

                const priorityA = a[1]["priority"];
                const priorityB = b[1]["priority"];

                const taskA = a[1]["task"];
                const taskB = b[1]["task"]

                return dateA - dateB || priorityA - priorityB || taskA - taskB;
            });
        })();

        return sortedArray;
    }

    all() {
        const array = this.sortedArray();
        const allArray = [];

        for (const tasks in array) {
            allArray.push([array[tasks]]);
        }

        return allArray
    }

    past() {
        const array = this.sortedArray();
        const filteredArray = [];

        for (const tasks in array) {
            if (isPast(new Date(array[tasks][1]["when"])) && !isToday(new Date(array[tasks][1]["when"]))) {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }

    future() {
        const array = this.sortedArray();
        const filteredArray = [];

        for (const tasks in array) {
            if (isFuture(new Date(array[tasks][1]["when"]))) {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }

    thisWeek() {
        const array = this.sortedArray();
        const filteredArray = [];
        
        for (const tasks in array) {
            if (isThisWeek(new Date(array[tasks][1]["when"]))) {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }

    today() {
        const array = this.sortedArray();
        const filteredArray = [];
        
        for (const tasks in array) {
            if (isToday(new Date(array[tasks][1]["when"]))) {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }

    tomorrow() {
        const array = this.sortedArray();
        const filteredArray = [];
        
        for (const tasks in array) {
            if (isTomorrow(new Date(array[tasks][1]["when"]))) {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }

    important() {
        const array = this.sortedArray();
        const filteredArray = [];
        
        for (const tasks in array) {
            if (array[tasks][1]["priority"] === "Important") {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }

    normal() {
        const array = this.sortedArray();
        const filteredArray = [];
        
        for (const tasks in array) {
            if (array[tasks][1]["priority"] === "Normal") {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }

    notImportant() {
        const array = this.sortedArray();
        const filteredArray = [];
        
        for (const tasks in array) {
            if (array[tasks][1]["priority"] === "Not Important") {
                filteredArray.push ([array[tasks]]);
            }
        }

        return filteredArray;
    }
}
