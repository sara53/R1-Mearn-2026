// function Person(name, age) {
// 	if (this.constructor == Person) {
// 		throw new Error("can not take an object from abstract class");
// 	}
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.display = function () {
// 	throw new Error("Method is not implemented");
// };

// function User(name, age, password) {
// 	Person.call(this, name, age);
// 	this.password = password;
// }

// // Person
// User.prototype = Object.create(Person.prototype);

// User.prototype.constructor = User;

// var myUser = new User(); // User

// // shape -- circle - rectangle -

// static method & static var
// function Shape() {}

// // static var
// Shape.count = 0;

// Shape.myStaticMethod = function () {
// 	console.log("Hello Static method");
// };

// var x = new Shape();
// console.log(x.constructor.myStaticMethod());
// Shape.myStaticMethod();

// Object.create() //
