import { isFuture, isPast, isThisWeek, isToday, isTomorrow } from "date-fns";

export class sort {
    convertStorageToArray () {
        const objects = Object.assign({}, localStorage);
        const array = [];

        for (const tasks in objects) {
            const taskDetails = JSON.parse((localStorage.getItem(tasks)));
            array.push([tasks, taskDetails]);
        }

        return array;
    }

    all() {
        const array = this.convertStorageToArray();
        const allArray = [];

        for (const tasks in array) {
            allArray.push([array[tasks]]);
        }

        return allArray
    }

    past() {
        const array = this.convertStorageToArray();
        const sortedArray = [];

        for (const tasks in array) {
            if (isPast(new Date(array[tasks][1]["when"]))) {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }

    future() {
        const array = this.convertStorageToArray();
        const sortedArray = [];

        for (const tasks in array) {
            if (isFuture(new Date(array[tasks][1]["when"]))) {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }

    thisWeek() {
        const array = this.convertStorageToArray();
        const sortedArray = [];
        
        for (const tasks in array) {
            if (isThisWeek(new Date(array[tasks][1]["when"]))) {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }

    today() {
        const array = this.convertStorageToArray();
        const sortedArray = [];
        
        for (const tasks in array) {
            if (isToday(new Date(array[tasks][1]["when"]))) {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }

    tomorrow() {
        const array = this.convertStorageToArray();
        const sortedArray = [];
        
        for (const tasks in array) {
            if (isTomorrow(new Date(array[tasks][1]["when"]))) {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }

    important() {
        const array = this.convertStorageToArray();
        const sortedArray = [];
        
        for (const tasks in array) {
            if (array[tasks][1]["priority"] === "Important") {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }

    normal() {
        const array = this.convertStorageToArray();
        const sortedArray = [];
        
        for (const tasks in array) {
            if (array[tasks][1]["priority"] === "Normal") {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }

    notImportant() {
        const array = this.convertStorageToArray();
        const sortedArray = [];
        
        for (const tasks in array) {
            if (array[tasks][1]["priority"] === "Not Important") {
                sortedArray.push ([array[tasks]]);
            }
        }

        return sortedArray;
    }
}
