let id: number = 5;
// id = '5'

console.log('ID:', id);

// Basic Types
let key: number = 5;
let company: string = 'joe';
let isPublished: boolean = false;

let x: any = 'Hello';
x = true;

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('Hello')

let array: any[] = [1, 'a', true];

// Tuple
let person: [number, string, boolean] = [1, 'joe', false];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'joe'],
  [2, 'jo'],
  [3, 'joh'],
];

// Union
let id_union: string | number = 22;
id_union = 'somekindstring';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

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

// Object
type User = {
  id: number;
  name: string;
};

const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'John',
};

const userTwo: User = {
  id: 1,
  name: 'joe',
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
let customerIdTwo = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// log('Hello');
// log(123);

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // Optional
}

const user2: UserInterface = {
  id: 1,
  name: 'joe',
};

type Point = number | string;
const p1: Point = 1;

// interface Point = number | string

// user2.id = 5

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x, y) => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  register() {
    return `${this.name} is now register`;
  }
}

const joe = new Person(1, 'joe');
const jo = new Person(2, 'jo');

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, postion: string) {
    super(id, name);
    this.position = postion;
  }
}

const emp = new Employee(3, 'joe', 'intern');

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let stringArray = getArray<string>(['joe', 'jo', 'josun']);

// numArray.push('Hello');
