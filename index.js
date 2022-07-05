"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lms_js_1 = require("./lms.js");
const pupils_js_1 = require("./pupils.js");
const groups_js_1 = require("./groups.js");
const teacher_js_1 = require("./teacher.js");
const gradebooks_js_1 = require("./gradebooks.js");
const history = new lms_js_1.Subject({
    title: "History",
    lessons: 24,
    description: "Bad",
});
const math = new lms_js_1.Subject({
    title: "Math",
    lessons: 12,
    description: "Good",
});
const biology = new lms_js_1.Subject({
    title: "Biology",
    lessons: 10,
    description: "Perfect",
});
const lms = new lms_js_1.LMS();
lms.add(math);
lms.add(history);
lms.add(biology);
lms.remove(history);
console.log(lms.verify(history));
console.log(lms.readAll());
const pupil1 = {
    name: {
        first: "Ilia",
        last: "Pachulia",
    },
    dateOfBirth: "18.12.1970",
    emails: [
        {
            email: "string",
            primary: "boolean",
        },
    ],
    phones: [
        {
            phone: "string",
            primary: "boolean",
        },
    ],
    sex: "string",
    subjects: [
        {
            subject: "string", // just name property of subject.
        },
    ],
    description: "string",
};
const pupil = {
    name: {
        first: "Ilia",
        last: "Pachulia",
    },
    dateOfBirth: "18/07/2000",
    phones: [
        {
            phone: "592102793",
            primary: true,
        },
    ],
    sex: "male",
    description: "",
};
const pupil2 = {
    name: {
        first: "Irakli",
        last: "Pachulia",
    },
    dateOfBirth: "18/07/2002",
    phones: [
        {
            phone: "592102793",
            primary: true,
        },
    ],
    sex: "male",
    description: "",
};
const pupils = new pupils_js_1.Pupils(pupil);
const pupilId = pupils.add(pupil);
// console.log(pupils.read(pupilId));
// pupils.update(pupilId, pupil2);
const pupilId2 = pupils.add(pupil2);
console.log(pupils);
pupils.remove(pupilId2);
console.log(pupils);
const teacher = {
    name: {
        first: "Koka",
        last: "Makhaldiani",
    },
    dateOfBirth: "18/07/1998",
    emails: [
        {
            email: "il.pachulia@gmail.com",
            primary: true,
        },
    ],
    phones: [
        {
            phone: "592102793",
            primary: true,
        },
    ],
    sex: "string",
    subjects: [
        {
            subject: "string", // just name property of subject.
        },
    ],
    description: "string",
};
const teachers = new teacher_js_1.Teachers(teacher);
const teachersId = teachers.add(teachers);
const classroom = {
    id: "JEF5H43H",
    room: 237,
    pupils: [],
};
const secondRoom = {
    id: "JEF5H3H",
    room: 240,
    pupils: [],
};
const groups = new groups_js_1.Groups(classroom);
groups.add(secondRoom);
console.log("group", groups);
// const groupId = group.add();
const gradebooks = new gradebooks_js_1.Gradebook(groups, teachers, lms);
const rec = {
    pupilId: pupilId,
    teacherId: teachersId,
    subjectId: biology.id,
    lesson: 1,
    mark: 9,
};
// const gradebookId = gradebooks.add(group.id, record);
// gradebooks.add(gradebookId, record);
// gradebooks.addRecord(gradebookId, record);
// gradebooks.read(gradebookId, pupilId);
// const students = gradebooks.readAll(gradebookId);
