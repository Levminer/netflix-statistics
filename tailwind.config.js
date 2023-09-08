/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					500: "#282828",
					600: "#222222",
					700: "#181818",
					800: "#0a0a0a",
					900: "#141414",
				},
				popup: {
					red: "#FF0000",
					green: "#008000",
					blue: "#0000FF",
				},
				html: {
					gray: "#808080",
				},
				ns: {
					red: "#de0a0a",
				},
			},
			fontFamily: {
				sans: ["Arial", "Helvetica", "sans-serif"],
			},
		},
	},
	plugins: [],
}

