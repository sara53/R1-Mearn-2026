export default function express() {
	return {
		listen: function () {
			console.log("app is listening at port 8080");
		},
	};
}
