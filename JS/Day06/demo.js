var tbody = document.getElementsByTagName("tbody")[0];
function getAllUsers() {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
	xhr.send("");

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var users = JSON.parse(xhr.response);

				for (var i = 0; i < users.length; i++) {
					tbody.innerHTML += `<tr>
                    <td>${users[i].id}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td>
                  
                        <button>delete user</button>
                    </td>
                
                </tr>`;
				}
			}
		}
	};
}
