// function execute() {
// 	// location
// 	// location.pathname = "/about.html";
// 	// override
// 	// location.href = "https://www.google.com/";
// 	// console.log(location.pathname);
// 	// console.log(location.href);
// 	// console.log(location.port);
// 	// location.reload();
// 	//location.assign("https://www.google.com/");
// 	// location.replace("https://www.google.com/");
// }
// function successCb(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }

// function reject() {
// 	console.log("Reject to access your location");
// }
// navigator.geolocation.getCurrentPosition(successCb, reject);
// html5 & Css3
// var tbody = document.getElementsByTagName("tbody")[0];
// function getAllUsers() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var users = JSON.parse(xhr.response);

// 				for (var i = 0; i < users.length; i++) {
// 					tbody.innerHTML += `<tr>
//                     <td>${users[i].id}</td>
//                     <td>${users[i].name}</td>
//                     <td>${users[i].email}</td>
//                     <td>

//                         <button>delete user</button>
//                     </td>

//                 </tr>`;
// 				}
// 			}
// 		}
// 	};
// }

//
// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() + 3);

// document.cookie = `username=mona;expires=${expireDate}`;

// function saveCookie(key, value) {
// 	document.cookie = `${key}=${value};expires=${expireDate}`;
// }
// function getAllCookies() {
// 	return document.cookie;
// }
// function getCookie(key) {
// 	// split
// }
// function deleteCookie(key) {
// 	var expireDate = new Date();
// 	expireDate.setDate(expireDate.getDate() - 1);
// 	document.cookie = `${key}=null;expires=${expireDate}`;
// }

// deleteCookie("email");

// saveCookie("colors", JSON.stringify(["red", "green", "blue"]));
// saveCookie("student", JSON.stringify({ id: 1, name: "Hoda", age: 20 }));

// saveCookie("email", "ali@gmail.com");
// saveCookie("password", "ali12");
