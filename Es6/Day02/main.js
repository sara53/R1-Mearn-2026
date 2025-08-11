// let person = {
// 	fname: "Ali",
// 	age: 20,
// 	gender: "male",
// }; // map [[],[],[]]

// let result = Object.entries(person);

// let output = result.map(([key, value]) => {
// 	return {
// 		key,
// 		value,
// 	};
// });
// console.log(output);
// fname, age , gender -- for not iterable
// for -- in -- keys -- values

// let keys = Object.keys(person);
// let values = Object.values(person);
// console.log(keys);
// console.log(values);
// // for (let i = 0; i < result.length; i++) {
// // 	console.log(person[result[i]]);
// // }

console.log("=======================");
// let person1 = {
// 	fname: "ali",
// };

// let person2 = {
// 	gender: "Male",
// };
// let person3 = {
// 	age: 20,
// };

// let result = Object.assign({}, person1, person2, person3);

// console.log("Person 1 :", person1);
// console.log("Person 2 :", person2);
// console.log("Person 2 :", person3);
// console.log("Result : ", result);

// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "Default address",
// 		age: "Default Age",
// 		address: "Default Address",
// 	};
// 	Object.assign(defaultValues, options);
// 	console.log(`Fname = ${defaultValues.fname}
//                 age = ${defaultValues.age}
//                 address = ${defaultValues.address}`);
// }

// showData();
// showData({
// 	address: "Cairo",
// });
// showData({
// 	address: "Cairo",
// 	fname: "Ahmed",
// 	age: 20,
// });

// showData("Makkah", "Alex", 25);
// showData("Ahmed", 20, "Banha");
// function first() {
// 	console.log("First");
// 	second();
// 	console.log("Third");
// }

// function second() {
// 	// async in js --
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);

// 	console.log("After second Execution");
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

//  console.log("Second"); // () ex
// console.log("End");
// global execution

// var x; // undefined

// setTimeout(() => {
// 	x = 10;
// }, 1000); //

// console.log(x); // undefined
// send request to api to get response -- ajax - users
// x - time - to get response

// 1- to get all products
// 2- get productDetails / 1
// 3- get product price
// callback hell -- syntax -- better code
// promise
// break
// var productsId;

// setTimeout(() => {
// 	productsId = [100, 200, 300];
// 	var product;
// 	setTimeout(() => {
// 		var product = {
// 			id: productsId[0],
// 			name: "Book",
// 			price: 300,
// 		};

// 		var price;
// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);
// js engine -- sent two
/**
 *  request -- success -- fail
 *  == pending
 *  == fulfilled -- success
 *  == rejected == Error
 *
 */

// let myPromise = new Promise(function (x, y) {
// 	//x("hello"); // success
// 	y(); // Error
// });

// console.log(myPromise);

// myPromise
// 	.then((data) => {
// 		console.log(data);
// 		console.log("Hello then");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 		console.log("Catch fun");
// 	});
// standrend -- resolve in code (x) -- reject

// function getAllProductsId() {
// 	var myPromise = new Promise(function (x, y) {
// 		var productsId;
// 		setTimeout(() => {
// 			productsId = [100, 200, 300];
// 			if (productsId) {
// 				x(productsId);
// 			} else {
// 				y("Error on Getting products ids");
// 			}
// 		}, 2000);
// 	});

// 	return myPromise;
// }

// function getProductDetails(productId) {
// 	var myPromise = new Promise(function (x, y) {
// 		var product = {
// 			id: productId,
// 			name: "Book",
// 			price: 300,
// 		};
// 		if (product) {
// 			x(product);
// 		} else {
// 			y("Error in product Details");
// 		}
// 	});

// 	return myPromise;
// }

// function getPrice(product) {
// 	let myPromise = new Promise(function (x, y) {
// 		var price = product.price;
// 		if (price) {
// 			x(price);
// 		} else {
// 			y("Error On getting price");
// 		}
// 	});

// 	return myPromise;
// }

// // async -- return promise
// async function execute() {
// 	try {
// 		let productsId = await getAllProductsId();
// 		let product = await getProductDetails(productsId[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// 1- then catch
// async await
// getAllProductsId()
// 	.then((productIds) => {
// 		return getProductDetails(productIds[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function great() {
// 	return "mearn";
// }

// let result = great();

// result.then((response) => {
// 	console.log(response);
// });
