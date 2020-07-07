const data = [
	"Another Life: Season 1: A Mind of its Own",
	"7/7/20",
	"Another Life: Season 1: Guilt Trip",
	"7/7/20",
	"The Woods: Season 1: Long Way Home",
	"7/6/20",
	"South Park: Season 22: Unfulfilled",
	"7/6/20",
	"South Park: Season 22: Buddha Box",
	"7/6/20",
	"Another Life: Season 1: Nervous Breakdown",
	"7/5/20",
	"Another Life: Season 1: Through the Valley of Shadows",
	"7/4/20",
	"Another Life: Season 1: Across the Universe",
	"7/4/20",
	"South Park: Season 22: Nobody Got Cereal?",
	"7/4/20",
	"Anna",
	"7/3/20",
	"The Originals: Season 1: Always and Forever",
	"7/3/20",
	"South Park: Season 22: Time to Get Cereal",
	"7/3/20",
	"South Park: Season 22: The Scoots",
	"7/2/20",
	"South Park: Season 22: Tegridy Farms",
	"7/1/20",
	"The Woods: Season 1: Your Sister Is Dead",
	"6/30/20",
	"South Park: Season 22: The Problem with a Poo",
	"6/30/20",
	"South Park: Season 22: A Boy and a Priest",
	"6/27/20",
	"South Park: Season 22: Dead Kids",
	"6/27/20",
	"The Woods: Season 1: What Lies Beneath",
	"6/26/20",
	"The Woods: Season 1: You Know Nothing",
	"6/24/20",
	"The Woods: Season 1: Lies",
	"6/20/20",
	"Bordertown: Season 3: The Human Stain",
	"6/18/20",
	"Bordertown: Season 2: Without a Shadow (Part Two)",
	"6/18/20",
	"Bordertown: Season 2: Without a Shadow (Part One)",
	"6/17/20",
	"Bordertown: Season 2: The Bloodmaid (Part Two)",
	"6/16/20",
	"Bordertown: Season 2: The Bloodmaid (Part One)",
	"6/15/20",
	"The Woods: Season 1: End of Innocence",
	"6/15/20",
	"Control Z: Season 1: Public Enemy",
	"6/14/20",
	"Control Z: Season 1: Control Z",
	"6/14/20",
	"Control Z: Season 1: How Well Do You Really Know Javier?",
	"6/13/20",
	"Control Z: Season 1: Face to Face",
	"6/11/20",
	"Control Z: Season 1: Night School",
	"6/11/20",
	"Control Z: Season 1: Idiots",
	"6/10/20",
	"Control Z: Season 1: Victims",
	"6/9/20",
	"Control Z: Season 1: Birthday Girl",
	"6/9/20",
	"365 Days",
	"6/8/20",
	"Bordertown: Season 2: Cat’s Cradle (Part Two)",
	"6/8/20",
	"Bordertown: Season 2: Cat’s Cradle (Part One)",
	"6/6/20",
	"Bordertown: Season 2: The Rite of Spring (Part Two)",
	"6/5/20",
	"Bordertown: Season 2: The Rite of Spring (Part One)",
	"6/3/20",
	"Bordertown: Season 2: Five Finger Exercise (Part Two)",
	"6/2/20",
	"Keeping Up with the Kardashians: Season 2: Kim Becomes a Diva",
	"6/1/20",
	"Keeping Up with the Kardashians: Season 1: I'm Watching You",
	"6/1/20",
	"Space Force: Season 1: PROPORTIONATE RESPONSE",
	"5/31/20",
	"Space Force: Season 1: IT’S GOOD TO BE BACK ON THE MOON",
	"5/31/20",
	"Space Force: Season 1: CONJUGAL VISIT",
	"5/31/20",
]
let data2 = []
let data3 = []

let counter = 0

for (let i = 0; i < data.length; i++) {
	if (counter % 2 == 0) {
		data2.push(data[i])
	}
	counter++
}

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

console.log(chart_data_1)
console.log(chart_data_2)

//? RANDOM CHART COLOR

let colors = []
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

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

window.FileReader()
