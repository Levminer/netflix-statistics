import * as CountUp from "countup.js"
import { Chart } from "chart.js"

/**
 * Create statistics
 */
export const createStatistics = (data) => {
	const titles = []
	const results = {}

	// make the titles
	for (let i = 0; i < data.length; i++) {
		const split = data[i].split(":")
		titles.push(split[0])
	}

	// Counting titles
	titles.forEach((element) => {
		results[element] = (results[element] || 0) + 1
	})

	// Separate names and values
	const chart_data_names = Object.keys(results)
	const chart_data_values: number[] = Object.values(results)

	// Number of titles
	const title_number = chart_data_names.length

	// Calculate statistics
	const watchtime_minute = Math.floor(data.length * 45)
	const watchtime_hour = Math.floor(watchtime_minute / 60)
	const watchtime_day = Math.floor(watchtime_hour / 24)

	// Calculate favorite statistics
	const max_number = Math.max(...chart_data_values)
	console.log(max_number)
	const max_title = chart_data_values.indexOf(max_number)
	console.log(max_title)

	const favorite_title = chart_data_names[max_title]
	const favorite_watchtime_minute = Math.floor(max_number * 50)
	const favorite_episodes = max_number
	const favorite_watchtime_hour = Math.floor(favorite_watchtime_minute / 60)

	// Animated counters
	const c1 = new CountUp("h31", 0, title_number)
	const c2 = new CountUp("h32", 0, watchtime_minute)
	const c3 = new CountUp("h33", 0, watchtime_hour)
	const c4 = new CountUp("h34", 0, watchtime_day)

	document.getElementById("h35").textContent = favorite_title
	const c6 = new CountUp("h36", 0, favorite_watchtime_minute)
	const c7 = new CountUp("h37", 0, favorite_episodes)
	const c8 = new CountUp("h38", 0, favorite_watchtime_hour)

	c1.start()
	c2.start()
	c3.start()
	c4.start()
	c6.start()
	c7.start()
	c8.start()

	// Set the elements
	const two = document.querySelector(".two")
	const thr = document.querySelector(".three")
	const fou = document.querySelector(".four")
	two.style.display = "block"
	thr.style.display = "block"
	fou.style.display = "block"

	// Random colors
	const colors = []

	const randomColors = () => {
		for (let i = 0; i < chart_data_names.length; i++) {
			let rgb_color0 = ""
			let rgb_color1 = ""
			let rgb_color2 = ""

			for (let i = 0; i < 3; i++) {
				const random_color = Math.floor(Math.random() * 256)

				switch (i) {
					case 0:
						rgb_color0 += random_color
						break
					case 1:
						rgb_color1 += random_color
						break
					case 2:
						rgb_color2 += random_color
						break
				}
			}

			const rgb = `rgb(${rgb_color0},${rgb_color1},${rgb_color2})`

			colors.push(rgb)
		}
	}

	randomColors()

	// Remove titles with low views
	for (let i = 0; i < chart_data_values.length; i++) {
		if (chart_data_values[i] < 3) {
			chart_data_values.splice(i, 1)
			chart_data_names.splice(i, 1)
		}
	}

	console.log("CHART", chart_data_names.length)

	// Create the chart
	const watchtime_chart = <HTMLCanvasElement>document.getElementById("chart")
	watchtime_chart.getContext("2d")

	Chart.defaults.global.defaultFontColor = "white"

	new Chart(watchtime_chart, {
		type: "pie",
		data: {
			labels: chart_data_names,
			datasets: [
				{
					label: "numbers",
					data: chart_data_values,
					backgroundColor: colors,
					borderWidth: 3,
					hoverBorderWidth: 9,
				},
			],
		},
		options: {
			responsive: true,
			legend: {
				display: false,
			},
		},
	})
}
