// console.log(PI);

// const PI = 3.14;

// console.log(PI);
// let fname = "ali";
// console.log(fname); //
// console.log(window.fname);

// console.log(fname); // Error
// // let fname = 10;
// console.log(fname);
// let fname = "mona";

// let fname = "ahmed";
// fname = "alaa";
// fname = 10;
// fname = true;

// console.log(fname);
// function show() {
// 	let test = "ahmed";

// 	for (let i = 0; i < 3; i++) {
// 		// test
// 		console.log(test);
// 		console.log(i);
// 	}
// 	// console.log(" i outside loop is : ", i);
// }

// show();

// var fname = "mona";

// console.log(fname);

// const arr = ["ahmed", "ali"];

// arr = []; // Error
// // arr.push("Alaa");

// console.log(arr);

// const person = {
// 	fname: "ali",
// 	age: 20,
// };

// person = 13;

// // person.fname = "ahmed";

// console.log(person);

// function getArr() {
// 	let arr = [];

// IIFE -- search
// 	// function scope -- 3 -- 0 -  1 2
// 	for (let i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}

// 	return arr;
// }

// getArr()[0]();
// getArr()[1]();
// getArr()[2]();
// let arr = ["mona", "ahmed", "alaa", true];

// function useState(data) {
// 	return [
// 		data,
// 		function () {
// 			console.log("hello ya mearn");
// 		},
// 		"alaa",
// 	];
// }

// let [x, y] = useState(10); // React

// console.log(x);
// y();
// console.log(y);

y();
// React
// let [x, y] = [10, "mona", "akaa"];
// let x = arr[0];
// let y = arr[1];

// destructing
// let [, , z] = arr;

// console.log("x : ", x);
// console.log("y : ", y);
// console.log("z : ", z);
// let person = { fname: "ali", age: 25, color: "red", products: [1, 3, 4] };

// // let { fname: x, color: y } = person;
// // let { fname: fname, color: color } = person;
// let { fname, color, products } = person;
// //
// // let x = person.fname;
// // let y = person.color;

// console.log("fname : ", fname);
// console.log("color : ", color);

// console.log("==========================")
// es6
// function execute(x = 0, y = "alaa") {
// 	return x + y;
// }

// console.log(execute());
// rest params
// function execute(...rest) {
// 	// arguments
// 	console.log(rest);
// 	console.log(" x : ", x);
// 	console.log(" y : ", y);
// }

// execute(10, 30, 40, "mona", true);

// let [x, ...y] = [10, "mona", true, 30];
// console.log(x);
// console.log(y);
/**
 * == function statement
 * == function expression
 * == arrow function
 */

// function statement
// function sum(x, y) {
// 	return x + y;
// }

// // function expression

// let add = function (x, y) {
// 	return x + y;
// };
// // arrow expression

// let add2 = (x, y) => {
// 	console.log("add function");
// 	return x + y;
// };

// console.log(add2(10, 20));

// let square = (x) => x * x;

// let sum = (x, y) => x + y;

// let sayHello = (_) => console.log("Hello");

// let greet = (trackName) => {
// 	console.log("Welcome at iti");
// 	return trackName;
// };

// function show(_, age) {
// 	console.log(_);
// 	console.log(age);
// }

// show("hwllo", 20);

// // this -- window
// var fname = "ali";
// let person = {
// 	fname: "mona",
// 	display: function () {
// 		setTimeout(() => {
// 			console.log(this.fname); // person.fname
// 		}, 2000); // window
// 	},
// };

// person.display(); // person
// let fname = "ali";
// let myKey = "gender";
// let person = {
// 	fname, // fname:fname

// 	display() {
// 		console.log("Welcome");
// 	},
// };

// person.display();
// console.log(person);
