// var person = {
// // 	fname: "alaa",
// // 	display: function () {
// // 		console.log("hello display");
// // 	},
// // };

// // person.display(); // person
// // V1
// // var fname = "ali";

// // console.log(fname);

// // console.log(window.fname);

// // function getName() {
// // 	console.log(`Hello getName`);
// // }

// // getName();
// // window.getName(); // caller window

// //v2
// var fname = "ali";

// function getName() {
// 	// caller -- window
// 	console.log(`Hello ${this.fname} `);
// }

// var person = {
// 	fname: "mona",
// 	display: function () {
// 		console.log(this); // person
// 		getName(); // window.getName() // window
// 	},
// };

// person.display(); // person

// // // var fname = "ali";

// // function getName() {
// // 	// caller -- window
// // 	console.log(`Hello ${this.fname} `);
// // }

// // var person = {
// // 	fname: "mona",
// // 	display: getName(), // display : undefined
// // };

// // person.display(); // undefined()
// // hello ali
// //  hello mona
// //
// // var person1 = {
// // 	fname: "Ahmed",
// // 	lname: "Alaa",
// // 	display: function (x, y) {
// // 		console.log(`${this.fname} ${this.lname}
// //              ${x} ${y}`);
// // 	},
// // };

// // var person2 = {
// // 	fname: "Mona",
// // 	lname: "Mohamed",
// // };

// // var result = person1.display.bind(person2);

// // result("^_^", ":)");
// // console.log(result);
// // person1.display.apply(person1, ["^_^", ":)"]);
// // console.log("----------------------");
// // person1.display.apply(person2, ["hello x", "hello y "]);

// // person1.display("^_^", ":)");

// // person1.display.call(person1, "^_^", ":)");
// // // console.log("---------------");
// // person1.display.call(person2, "Hello x ", "hello y");
// var fname = "ali";
// function getName() {
// 	console.log(`Hello ${this.fname}`);
// }

// var person = {
// 	fname: "mona",
// 	display: function () {
// 		console.log(this); // person
// 		getName.call(this);
// 	},
// };

// person.display(); // person

//--------------------------------
var fname = "ali";
var person = {
	fname: "mona",
	display: function () {
		setTimeout(
			function () {
				console.log(this.fname);
			}.bind(this),
			2000
		); // window --
	},
};

person.display(); // person

/**==================== */
// var fname = "ali";
// //that pattern
// var person = {
// 	fname: "mona",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000); // window --
// 	},
// };

// person.display(); // person

// setTimeout(
// 	function () {
// 		console.log("After 3 seconds");
// 		console.log(this.fname); // window
// 	}.bind(person),
// 	3000
// );

// function greet(fname) {
// 	console.log("great");
// }

// var result = greet.bind();

// setTimeout.call();
// function greet() {
// 	var trackName = "Mearn track";
// 	var sup = "Ahmed";

// 	return function () {
// 		console.log(`Hello ${trackName}`);
// 	};
// }

// var result = greet();

// result(); //
// Error
// console.log(result); //
var count = 12;
// function counter() {
// 	var count = 0;
// 	return function () {
// 		return ++count;
// 	};
// }

// var result = counter();
// console.log(result()); // 1
// console.log(result());
// console.log(result());
// console.log(result());

// console.log(count);
//

// function getArr() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}

// 	return arr;
// }

// var result = getArr();

// result[0]();
// result[1]();
// result[2]();
// var product1 = {
// 	id: 1,
// 	name: "Book",
// 	price: 200,
// 	quantity: 10,
// 	category: "school",
// };
// var product2 = {
// 	id: 2,
// };
// var product3 = {
// 	id: 1,
// 	name: "Pen",
// };

// document.writeln(`<h1>Product Name :${product1.name}</h1>`);
// document.writeln(`<p>PRoduct Price ${product1.price}</p>`);

// document.writeln(`<hr/><h1>Product Name :${product2.name}</h1>`);
// document.writeln(`<p>PRoduct Price ${product2.price}</p>`);
// function prodcut(id, name, price) {
// 	return {
// 		id: id || "",
// 		name: name || "",
// 		price: price || "",
// 		discount: function (rate) {
// 			return this.price * rate;
// 		},
// 	};
// }

// var p1 = prodcut(1, "Book", 200);

// console.log(p1.discount(0.2));

// var p2 = prodcut(2, "Pen", 10);
// var p3 = prodcut(3, "Watch", 3000);
// var p4 = prodcut();

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);
