// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// var p1 = new Person("ali", 22);
// // console.log(p1);

// console.log(Person.prototype);
// Object.prototype.display = function () {
// 	console.log("Hello ya mearn");
// };

// var product = { name: "book", price: 200 }; // new Object()
// var user = { name: "ali", age: 20 };
// product.__proto__.display = function () {
// 	console.log("hello __proto__");
// };

// product.display();
// user.display();
//console.log(user.name);
// console.log(user.gender);

// console.log(user.toString());

// console.log(product.__proto__ == user.__proto__);
// console.log(Object.prototype == product.__proto__);
// console.log(Object.prototype == user.__proto__);
// console.log(Object.prototype.__proto__);
// object -- props - methods == class
// class
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.display = function () {
// 	console.log(`${this.name} ${this.age}`);
// };

// Person.prototype.trackName = "mearn";
// var p1 = new Person("mona", 14);
// var p2 = new Person("ali", 18);

// console.log(p1.__proto__.trackName);
// console.log(p1.trackName);

// console.log(Person.prototype);
// console.log(p1.__proto__);

// p1.__proto__.display = function () {};
// p2.__proto__.display = function () {};
// console.log(p1.__proto__.__proto__ == Object.prototype);
// console.log(p2.__proto__.__proto__ == Object.prototype);

// var arr = []; // new Array()

// // console.log(Array.prototype == arr.__proto__);

// // arr.push();

// Array.prototype.push = function () {
// 	console.log("Hello :)");
// };

// arr.push("mona");

// console.log(arr);
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.display = function () {
// 	console.log(`${this.name} ${this.age}`);
// };

// function User(name, age, password) {
// 	Person.call(this, name, age);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;
// User.prototype.generatePassword = function () {
// 	return `${this.password.toUpperCase()} $%%^&`;
// };
// User.prototype.display = function () {
// 	console.log("Hello Display");
// };

// var myUser = new User("Ahmed", 20, "ahm");
// console.log(myUser);
// // console.log(myUser.generatePassword());
// // myUser.display();

// // var product = { name: "Book", category: "school" }; //

// // var result = Object.create(product);
// // result.trackName = "mearn";
// // console.log(result);
// // console.log(result.name);
// // console.log(result.category);
// function Person(name, age) {
// 	// private member
// 	var id = 123;
// 	this.name = name;
// 	this.age = age;
// 	this.getId = function () {
// 		return id;
// 	};
// 	// access private -- privillage method
// 	this.setId = function (value) {
// 		id = value;
// 	};
// }

// Encapsulation
// var p1 = new Person("mona", 20);
function Person(name, age) {
	var id = 123;
	this.name = name;
	this.age = age;
	Object.defineProperty(this, "quantityHandler", {
		get: function () {
			return id;
		},
		set: function (value) {
			id = value;
		},
	});
}

var p1 = new Person("mona", 20);
p1.quantityHandler = 567; // set

console.log(p1.quantityHandler); // get
// p1.setId = 'qee' // set
// console.log(p1.getId); // get
// // set
// p1.name = "Ola";
// // get
// console.log(p1.name);

// var product = {
// 	name: "Book",
// 	price: 200,
// 	category: "school",
// };

// Object.defineProperty(product, "quantity", {
// 	value: 1,
// 	writable: true,
// 	configurable: true,
// 	enumerable: true,
// });
// product.quantity = 10; // override

// delete product.quantity;

// console.log(product);

// console.log(product.quantity);

// console.log(product);
// product.name = "Pen";

// delete product.name;

// for (var key in product) {
// 	console.log(product[key]);
// }
// console.log(product); // pen
