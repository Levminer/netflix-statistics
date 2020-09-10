const start = () => {
	const input_name = document.getElementById("input_name").value
	const input_id = document.getElementById("input_id").value

	const kill = confirm("Are you sure? This can not be undone!")

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

			fetch("/api/delete-account", options)
				.then((res) => {
					return console.log(res)
				})
				.catch((err) => {
					console.log(err)
					alert("The statistic could not be saved! Failed to connect to the API! Please try again later!")
				})

			window.location.replace("/account/logout")
		} else {
			alert("The text in the input doesn't match with your account name and id!")
		}
	}
}
