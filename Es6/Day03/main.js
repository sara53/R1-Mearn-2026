/** Symbol */

const { isDotDotDotToken } = require("typescript");

// generate for a unique value
// let x = Symbol("age");

// let y = Symbol("age");

// console.log(x == y);

// let x = Symbol();
// let person = {
// 	fname: "ali",
// 	[x]: function () {
// 		return {
// 			next: function () {
// 				return {
// 					value: "hello",
// 					done: false,
// 				};
// 			},
// 		};
// 	},
// };

// console.log(person[x]().next());

// console.log(Object.keys(person));
// console.log(person);

// let x = person[myKey]();

// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

// console.log(person.age);
// console.log(person[myKey]);
// for -- invar -- (key)
// for (let key in person) {
// 	console.log(key);
// }
// for (let x of person) {
// 	console.log(x);
// }
// for -- X --
//index
// for (let i in arr) {
// 	console.log(i);
// }
// for of -- value
// for (let value of arr) {
// 	console.log(value);
// }
/** for of -- for in */
// arr;
// // override
// arr[Symbol.iterator] = genEvenNumbers;
// for (let value of arr) {
// 	console.log(value);
// }

// let iter = arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// let iter = arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// Symbol.iterator = function
/**
 *  == fun return {}
 * 	== {} has next
 *  == next -- function
 *  == {} has 2 props (value,done)
 *
 *
 */
//iterable
// let arr = ["mona", "ahmed", 123];

// console.log(arr);
// // not iterable
// let person = {
// 	fname: "ali",
// 	age: 25,
// 	gender: "male",
// };
// console.log(person);
// iterator
// function genEvenNumbers() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			if (step >= 10) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: (step += 2),
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }

// // generator func
// function* getProps() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }

// let person = {
// 	fname: "Ali",
// 	age: 20,
// 	gender: "male",
// };

// person[Symbol.iterator] = getProps;

// for (let x of person) {
// 	console.log(x);
// }

// let iter = getProps();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// let person = {
// 	fname: "Ali",
// 	age: 24,
// 	gender: "male",
// };
// let product = {
// 	name: "Book",
// 	price: 300,
// 	category: "school",
// };

// product[Symbol.iterator] = getKeys;

// function* getKeys() {
// 	for (let key in this) {
// 		yield `${key} : ${this[key]}`;
// 	}
// }

// person[Symbol.iterator] = getKeys; // person

// for (let x of person) {
// 	console.log(x);
// }
// console.log("-------------------");

// for (let x of product) {
// 	console.log(x);
// }

// fname,age,genders
// let arr = ["mona", "ahmed", 123];

// arr[Symbol.iterator] = function () {
// 	let index = 0;
// 	console.log(this);
// 	return {
// 		next: () => {
// 			if (index == this.length) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: this[index++],
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// };
// for (let value of arr) {
// 	console.log(value);
// }
// super class -- parent class
// class Person {
// 	constructor(fname = "", age = "", address = "") {
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	display() {
// 		console.log(this.fname + " " + this.age);
// 	}
// }
// // subclass - child class
// class User extends Person {
// 	constructor(fname, age, address, password) {
// 		super(fname, age, address);
// 		this.password = password;
// 	}

// 	createPassword() {
// 		return `${this.password.toUpperCase()} #$%%`;
// 	}
// 	//override
// 	display() {
// 		super.display();
// 		console.log("New Display");
// 	}
// }

// let myUser = new User("Ahmed", 25, "alex", "pet");

// console.log(myUser.display());
/** Advanced */

// function calcArea(shape) {
// 	if (shape.type == "circle") {
// 		return Math.PI * shape.r * shape.r;
// 	}
// }

// calcArea({ type: "circle", r: 1 });
// calcArea({ type: "square", l: 2 });
// calcArea({ type: "rectangle", l: 2 });
// super class -- parent class
// class Person {
// 	#id;
// 	constructor(id, fname = "", age = "", address = "") {
// 		this.#id = id;
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	display() {
// 		console.log(this.fname + " " + this.age);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}
// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let p1 = new Person(1, "ali", 22, "cairo");

// p1.setId = 1123;
// //
// // p1.setId(123);

// console.log(p1.getId);
// class Shape {
// 	constructor() {
// 		if (this.constructor == Shape) {
// 			throw "can not take an object from abstract class";
// 		}
// 	}

// 	static count;
// 	area() {
// 		throw "Method not implemented";
// 	}
// }

// // let x = new Shape();
// import express from "./express.js";

// let server = express();

// // server.listen();

// let person = {
// 	age: 20,
// };

// // layer proxy

// person.age = -12; //valid
// set ,get ,,, undefined ==
