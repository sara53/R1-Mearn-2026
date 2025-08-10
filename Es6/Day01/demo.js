/**
 * Array API
 * --------------------------
 *  == find
 *  == findIndex
 *  == map
 *  == foreach
 *  == some
 *  == every
 *  == filter
 */

// let arr = [10, [20, 30], [60, 70]];

// let result = arr.flatMap(function (item) {
// 	return `hello ${item}`;
// });
// console.log(result);
// let result = arr.flat(2);
// let output = result.map((item) => {
// 	return `hello ${item}`;
// });
// console.log(output);
// let arr = [10, 3, 5, 1];

// for loop -- o(n)

// let numbers = [10, 40, 23]; // 3

// let itiTracks = ["Dotnet", "pd", "open source"];

// let products = ["Book", "Pen", "watch"];

// let result = products.some((product) => product.startsWith("B"));

// console.log(result);
// let result = itiTracks.map((item, index) => {
// 	console.log(`${item} ${index}`);
// });

// console.log(result);
// let productCards = products.map((product, index) => {
// 	return `<div>
//             <h1>${product}</h1>
//     </div>`;
// });

// for (let i = 0; i < productCards.length; i++) {
// 	document.body.innerHTML += productCards[i];
// }
// let result = numbers.map((item, i, arr) => {
// 	return {
// 		id: item,
// 		name: `mearn${i}`,
// 	};
// });
// console.log(result);
// let result = numbers.findIndex((value) => value > 25);

// console.log(result);
// function findElement(value, index, arr) {
// 	console.log("value : ", value);
// 	console.log("index : ", index);
// 	console.log("arr : ", arr);
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > 25) return numbers[i];
// 	}

//
// }

// js Engine

// for (let i = 0; i < numbers.length; i++) {
// 	findElement(numbers[i], i, numbers);
// 	console.log("--------------------");
// }

// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 200,
// 		category: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 100,
// 		category: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "Watch",
// 		price: 100,
// 		category: "electronics",
// 	},
// 	{
// 		id: 3,
// 		name: "phone",
// 		price: 100,
// 		category: "electronics",
// 	},
// ];

// let result = products.filter(function (product, index, arr) {
// 	return false;
// });

// console.log(result);
