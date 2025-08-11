// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function execute() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

execute();

// then catch
