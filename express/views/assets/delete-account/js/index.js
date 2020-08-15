let start = () => {
	let input_name = document.getElementById("input_name").value
	let input_id = document.getElementById("input_id").value

	let kill = confirm("Are you sure? This can not be undone!")

	if (kill == true) {
		if (name == input_name && id == input_id) {
			alert("Your account deleted succesfully!")

			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id }),
			}

			fetch("/api/delete-account", options).then((res) => {
				console.log(res)
			})

			window.location.replace("/account/logout")
		} else {
			alert("The text in the input doesn't match with your account name and id!")
		}
	}
}
