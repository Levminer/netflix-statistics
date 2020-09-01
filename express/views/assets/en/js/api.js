let api = () => {
	let save_confirm = confirm("Are you sure you want to save the statistics?")

	if (save_confirm == true) {
		if (supporter == true) {
			if (max_statistics > saved_statistics) {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ results, id }),
				}

				fetch("/api/save-statistics", options).then((res) => {
					console.log(res)
				})

				alert(
					"The statistic was saved successfully! You can view it at your dashboard! At your dashboard you can view all of your saved statistics!"
				)
				window.open("/account/login")
				location.reload()
			} else {
				alert(
					"The statistic could not be saved! Please upgrade your plan! You reached the limit of your plan, if you want to store more statistics please upgrade your plan!"
				)
				window.open("https://www.patreon.com/levminer")
			}
		} else if (supporter == false) {
			alert(
				"The statistic could not be saved! This is a paid feature! You will be redirected to my Patreon page and you can buy this feature!"
			)
			window.open("https://www.patreon.com/levminer")
		} else {
			alert(
				"The statistic could not be saved! Please log in! You will be redirected to a new page, if you are logged in come back here and press F5 or reload the page!"
			)
			window.open("/account/login")
			location.reload()
		}
	}
}
