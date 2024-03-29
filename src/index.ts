import { CountUp, CountUpOptions } from "countup.js"
import { Chart, registerables } from "chart.js"

/**
 * Create statistics
 */
export const createStatistics = (data: string[], dates: string[]) => {
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
	const max_title = chart_data_values.indexOf(max_number)

	const favorite_title = chart_data_names[max_title]
	const favorite_watchtime_minute = Math.floor(max_number * 50)
	const favorite_episodes = max_number
	const favorite_watchtime_hour = Math.floor(favorite_watchtime_minute / 60)

	// Longest day
	let current_date = dates[0]
	let current_date_count = 0

	for (let i = 0; i < dates.length; i++) {
		if (current_date == dates[i]) {
			current_date_count++
		}
	}

	for (let i = 1; i < dates.length; i++) {
		let next_date = dates[i]
		let next_date_count = 0

		for (let j = 0; j < dates.length; j++) {
			if (next_date == dates[j]) {
				next_date_count++
			}
		}

		if (next_date_count > current_date_count) {
			current_date = next_date
			current_date_count = next_date_count
		}
	}

	let longest_date = new Date(current_date).toLocaleDateString("hu-HU")
	let longest_date_m = current_date_count * 45
	let longest_date_h = Math.floor(longest_date_m / 60)

	let countOptions: CountUpOptions = {
		enableScrollSpy: true,
		scrollSpyOnce: true,
	}

	// Longest streak
	// Remove duplicates
	const uniqueDates = [...new Set(dates)].reverse()

	const sortedDates = uniqueDates.map((dateString) => new Date(dateString))

	let longestStreak = 0
	let currentStreak = 0
	let firstDate = null
	let lastDate = null

	function isYesterday(date1: Date, date2: Date): boolean {
		const oneDayInMs = 1000 * 60 * 60 * 24
		const diffInMs = date2.getTime() - date1.getTime()
		const diffInDays = Math.round(diffInMs / oneDayInMs)

		return diffInDays === 1
	}

	for (let i = 0; i < sortedDates.length; i++) {
		const currentDate = sortedDates[i]
		const yesterday = sortedDates[i - 1]

		if (yesterday && isYesterday(yesterday, currentDate)) {
			currentStreak++
		} else {
			currentStreak = 0
		}

		if (currentStreak > longestStreak) {
			longestStreak = currentStreak
			firstDate = sortedDates[i - currentStreak]
			lastDate = currentDate
		}
	}

	// Animated counters
	new CountUp("titles", title_number, countOptions).start()
	new CountUp("titlesM", watchtime_minute, countOptions).start()
	new CountUp("titlesH", watchtime_hour, countOptions).start()
	new CountUp("titlesD", watchtime_day, countOptions).start()

	document.getElementById("h35").textContent = favorite_title
	new CountUp("h36", favorite_watchtime_minute, countOptions).start()
	new CountUp("h37", favorite_episodes, countOptions).start()
	new CountUp("h38", favorite_watchtime_hour, countOptions).start()

	document.querySelector("#longestDay").textContent = longest_date
	new CountUp("longestDayM", longest_date_m, countOptions).start()
	new CountUp("longestDayT", current_date_count, countOptions).start()
	new CountUp("longestDayH", longest_date_h, countOptions).start()

	new CountUp("longestStreak", longestStreak + 1, countOptions).start()
	document.querySelector("#longestStreakT").textContent = `${firstDate.toLocaleDateString("hu-HU")} - ${lastDate.toLocaleDateString("hu-HU")}`

	// Show rows
	document.querySelector(".row1").style.display = "flex"
	document.querySelector(".row2").style.display = "flex"
	document.querySelector(".row3").style.display = "block"

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
	for (let i = 0; i < chart_data_names.length; i++) {
		if (chart_data_values[i] < 10) {
			chart_data_names.splice(i, 1)
			chart_data_values.splice(i, 1)

			i--
		}
	}

	// Create the chart
	const watchtime_chart = <HTMLCanvasElement>document.getElementById("chart")
	watchtime_chart.getContext("2d")

	Chart.register(...registerables)
	Chart.defaults.color = "white"

	new Chart(watchtime_chart, {
		type: "pie",
		data: {
			labels: chart_data_names,
			datasets: [
				{
					label: "Episode",
					data: chart_data_values,
					backgroundColor: colors,
					borderWidth: 3,
					hoverBorderWidth: 9,
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	})
}
