"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gradebook = void 0;
let count = 0;
class Gradebook {
    constructor(groups, teachers, lms) {
        this.map = new Map();
        this.id = count++;
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    clear() {
        this.map.clear();
    }
    add(id, record) {
        this.map.set(id, record);
    }
    addRecord(gradebookId, record) {
        this.map.set(gradebookId, record);
    }
    read(gradebookId, pupilId) {
        console.log(this.map.get(gradebookId, pupilId));
    }
    readAll() {
        let array = [];
        let newArr = this.map.forEach(function (item) {
            array.push(item);
        });
        console.log(array);
    }
}
exports.Gradebook = Gradebook;