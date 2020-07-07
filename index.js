let pls = () => {
	let data2 = []
	let data3 = []

	let counter = 0

	for (let i = 0; i < data.length; i++) {
		if (counter % 2 == 0) {
			data2.push(data[i])
		}
		counter++
	}

	console.log(data2)

	for (let i = 0; i < data2.length; i++) {
		let split = data2[i].split(":")
		data3.push(split[0])
	}

	let result = {}
	data3.forEach((x) => {
		result[x] = (result[x] || 0) + 1
	})

	console.log(result)
	console.log(data3)

	let chart_data_1 = Object.keys(result)
	let chart_data_2 = Object.values(result)

	console.log(`CHART NAMES: ${chart_data_1}`)
	console.log(`CHART VALUES: ${chart_data_2}`)

	//? RANDOM CHART COLOR

	let colors = []

	let rgb_start = () => {
		for (let i = 0; i < chart_data_1.length; i++) {
			let rgb_color0 = ""
			let rgb_color1 = ""
			let rgb_color2 = ""

			for (let i = 0; i < 3; i++) {
				let rgb_randomizer = Math.floor(Math.random() * 256)

				switch (i) {
					case 0:
						rgb_color0 += rgb_randomizer
						break
					case 1:
						rgb_color1 += rgb_randomizer
						break
					case 2:
						rgb_color2 += rgb_randomizer
						break
				}
			}

			let rgb = `rgb(${rgb_color0},${rgb_color1},${rgb_color2})`

			colors.push(rgb)
		}
	}

	rgb_start()
	console.log(colors)
	//? CHART

	let mychart = document.getElementById("chart").getContext("2d")

	Chart.defaults.global.defaultFontColor = "white"

	let thechart = new Chart(mychart, {
		type: "pie",
		data: {
			labels: chart_data_1,
			datasets: [
				{
					label: "numbers",
					data: chart_data_2,
					backgroundColor: colors,
					borderWidth: 3,
				},
			],
		},
		options: {
			legend: {},
		},
	})
}
