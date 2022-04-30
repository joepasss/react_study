"use strict";
let id = 5;
console.log('ID:', id);
let key = 5;
let company = 'joe';
let isPublished = false;
let x = 'Hello';
x = true;
let ids = [1, 2, 3, 4, 5];
let array = [1, 'a', true];
let person = [1, 'joe', false];
let employee;
employee = [
    [1, 'joe'],
    [2, 'jo'],
    [3, 'joh'],
];
let id_union = 22;
id_union = 'somekindstring';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const dirctionOne = [
    Direction1.Up,
    Direction1.Down,
    Direction1.Left,
    Direction1.Right,
];
const dirctionTwo = [
    Direction2.Up,
    Direction2.Down,
    Direction2.Left,
    Direction2.Right,
];
const user = {
    id: 1,
    name: 'John',
};
const userTwo = {
    id: 1,
    name: 'joe',
};
let cid = 1;
let customerId = cid;
let customerIdTwo = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user2 = {
    id: 1,
    name: 'joe',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} is now register`;
    }
}
const joe = new Person(1, 'joe');
const jo = new Person(2, 'jo');
class Employee extends Person {
    constructor(id, name, postion) {
        super(id, name);
        this.position = postion;
    }
}
const emp = new Employee(3, 'joe', 'intern');
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(['joe', 'jo', 'josun']);
