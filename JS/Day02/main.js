// // params
// function sum(a, b) {
// 	console.log(a + b);
// }

// sum(10, 20);

// console.log("===========");
// sum("mona", "ali");
// console.log("============");
// sum(true, true);
// sum(10, 30);
// console.log("===========");
// sum(40, 50, 50, 60);
// sum();
// console.log("==========");
// sum(2);
// sum();
// sum(3);

// sum(3, 4);
// console.log("===============");
// sum(1, 2, 3, 4, 56);
// // // arguments
// sum(3, 4);

// console.log("-------------");
// sum(10, 3);

// console.log("-------------");

// sum(4, 5);
// function statement -- declaration
// function sum(x, y) {
// 	return x + y;
// }

// var result = sum(3, 4);

// console.log(result);

// console.log("---------------");
// console.log(sum(20, 30));

// function sayHello() {
// 	console.log("Welcome at iti");
// }

// var result = sayHello();

// console.log(result); //
// // function expression
// console.log(result(3, 4));\
console.log(result);
// var result = function (x, y) {
// 	return x + y;
// };

// var output = result(10, 20);
// console.log(result(10, 20));
// sum(3, 4); //
// // hoisting
// function sum(x, y) {
// 	console.log(x + y);
// }

// console.log(fname);
// var fname = "alaa";
// console.log(fname);
// // console.log("====================");
// var fname; // Hoisting
// console.log(fname); //
// fname = "alaa";
// console.log(fname);
var fname = "mona";

function mearn(supName) {
	console.log("hello mearn track");
	console.log("You sub is ", supName);
}

var dotnet = function (sup) {
	console.log("hello dotnet track");
	console.log("you sub is ", sup);
};

function greet(myFun, name) {
	myFun(name);
	console.log("Welcome at iti");
}

// greet(function (x) {
// 	console.log("hello pd at iti");
// 	console.log(x);
// }, "alaa");
// greet(mearn, "mona");
// console.log("==============");
// greet(dotnet, "sara");

// callback function
// function greet(myFun, name) {
// 	myFun(name);
// 	console.log("Welcome at iti");
// }

// greet(function (data) {
// 	console.log("hello mearn at iti");
// 	console.log("sub is ", data);
// }, "simon");

// console.log("==========");
// greet(function (data) {
// 	console.log("hello dotnet at iti");
// 	console.log("sub is ", data);
// }, "Ahmed ali");

function mainOperation(myFun1, myFun2) {
	myFun1(function () {
		console.log(":(");
	});
	myFun2(function () {
		console.log(":(");
	});
}

mainOperation(
	function (data) {
		data();
		console.log("hello cb1");
	},
	function (data) {
		data();
		console.log("hello cb2");
	}
);

/**=============== */
/**
 * Array
 * -------------
 * -- length
 *-----------------------
    == push
    == unshift
    == pop
    == shift
    == concat
    == join
    == reverse
    == indexOf
 */
// var arr = ["mona", 20, "ahmed", "mona"];

// 3-1 ==> poitive --
// 1- 2 --
//2-2 =
// var arr = [1, 3, 5, 6, 52];

// arr.sort(/** cb */);
// console.log(arr.lastIndexOf("mona"));
// var result = arr.join(">>");
// console.log(result);
// arr.reverse();
// var result = arr.join("%%");
// console.log(result);
// var result = arr.concat(["mean", "dotnet"]);
// console.log(result);
// var result = arr.pop();
// arr.shift();
// arr.shift();

// console.log(result);
// arr.unshift("alaa");
// arr.unshift(true);
// arr.push("alaa");
// arr.push(true);
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// console.log(arr.length);
// console.log(arr[5]);
// set
// arr[0] = "ola";

// console.log(arr);
// // get
// console.log(arr[0]);
// console.log(arr[1]);
