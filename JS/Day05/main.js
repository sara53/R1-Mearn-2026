// v1
// var parent = document.getElementById("parent");

// function execute() {
// 	var element = document.createElement("p");

// 	element.innerHTML = "Hello mearn track";
// 	console.log(element);
// 	parent.appendChild(element);
// }
// v2

// var parent = document.getElementById("parent");
// var p = document.createElement("p");
// var span = document.createElement("span");

// span.innerHTML = "hello Span";
// var text = document.createTextNode("hello mearn treck");

// //element.innerHTML = text;
// p.appendChild(text);
// console.log(p);
// console.log(span);
// // element.innerHTML = "Hello mearn track";

// // element.classList.add("jsClass");
// // element.setAttribute("id", "info1");
// function execute() {
// 	var result = parent.appendChild(p);
// 	console.log(result);
// }

// v3

// var parent = document.getElementById("parent");
// var p = document.createElement("p");
// var span = document.createElement("span");

// span.innerHTML = "hello Span";
// var text = document.createTextNode("hello mearn treck");

// p.append("welcome at iti");

// console.log(p, span);
// function execute() {
// 	var result = parent.append(p, span);
// 	console.log(result);
// }

// v4

// var parent = document.getElementById("parent");
// var p = document.createElement("p");

// var h1 = parent.firstElementChild;

// p.innerHTML = "hello mearn track";
// p.classList.add("jsClass");

// function execute() {
// 	h1.after(p);
// }

// function removeElement() {
// 	h1.remove();
// }

// attach function

// btn1.onclick = changeText;
// cb function
// btn1.onclick = function () {
// 	changeStyle("red");
// };
// btn1.onclick = function () {
// 	changeStyle();
// 	changeText();
// };

/**======================== */

var p = document.getElementById("info");
var btn1 = document.getElementById("btn1");

function changeText(e) {
	console.log(e.target);
	p.innerHTML = "Hello mearn Track";
}

function changeStyle1(e) {
	console.log(e);
	p.style.background = "green";
}

function changeStyle(color) {
	p.style.background = color;
}

// btn1.addEventListener("click", changeStyle1);
// btn1.addEventListener("click", changeText);

// btn1.removeEventListener("click", changeText);

// final version
var p = document.getElementById("info");
var btn1 = document.getElementById("btn1");

// add
btn1.addEventListener("click", function () {
	p.innerHTML = "Hello mearn track";
});

// remove

// btn1.removeEventListener("click", function () {
// 	p.innerHTML = "Hello mearn track";
// });
var input = document.getElementById("input1");
var span = document.getElementById("errorMsg");

input.addEventListener("focus", function (e) {
	// e.target = input
	input.style.border = "3px solid blue";
});
input.addEventListener("blur", function (e) {
	// e.target = input
	input.style.border = "3px solid orange";
});
input.addEventListener("input", function (e) {
	if (input.value.length >= 3) {
		input.style.border = "3px solid green";
		span.style.display = "none";
	} else {
		input.style.border = "3px solid red";
		span.style.display = "block";
	}
	// e.target = input
});
// Event
/**
 *   == add attribute
 *   == attach function
 *   ==  addEventListener
 */

// function first(e) {
// 	console.log("first");
// }
// function second(e) {
// 	e.stopPropagation();

// 	console.log("second");
// }
// function third(e) {
// 	//	e.stopPropagation();
// 	console.log("third");
// }

// var input = document.getElementById("input2");

// function login(e) {
// 	e.preventDefault();
// 	console.log(input.value);
// }
