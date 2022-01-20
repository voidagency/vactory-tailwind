const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: {
		enabled: true,
		content: ["./src/**/*.{js,jsx,ts,tsx}"],
		options: {
			safelist: [/^border-\w+-\d00/, /^text-\w+-\d+/, /^bg-\w+-\d+/],
		},
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {
		screens: {
			xs: "320px",
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		container: {
			center: true,
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",

			black: colors.black,
			white: colors.white,
			gray: {
				DEFAULT: colors.coolGray[500],
				...colors.coolGray,
			},
			red: {
				DEFAULT: colors.red[500],
				...colors.red,
			},
			yellow: {
				DEFAULT: colors.amber[500],
				...colors.amber,
			},
			green: {
				DEFAULT: colors.emerald[500],
				...colors.emerald,
			},
			blue: {
				DEFAULT: colors.lightBlue[500],
				...colors.lightBlue,
			},
			indigo: {
				DEFAULT: colors.indigo[500],
				...colors.indigo,
			},
			purple: {
				DEFAULT: colors.violet[500],
				...colors.violet,
			},
			pink: {
				DEFAULT: colors.pink[500],
				...colors.pink,
			},
			awb: {
				orange: "#ed5f49",
				yellow: "#f7b32f",
			},
		},

		// transitionDuration: Array(9).fill().map( (a, i) => i+1 ).reduce(
		//   (acc, cur) => ({
		//     ...acc,
		//     [cur+"s"]: cur+"s",
		//     [cur+"ms"]: cur+"ms"
		//   }),
		// {}),

		extend: {
			fontSize: {
				"2xs": ".5rem",
			},
			fontFamily: {
				montserrat: "Montserrat",
			},
			transitionProperty: {
				DEFAULT: "all",
			},
			scale: {
				"-100": "-1",
			},
			gridTemplateRows: {
				8: "repeat(8, minmax(0, 1fr))",
				10: "repeat(10, minmax(0, 1fr))",
			},
			backgroundSize: {
				1: "1rem",
			},
			zIndex: {
				"-1": "-1",
				1: "1",
				2: "2",
				3: "3",
			},
		},
	},
	variants: {
		fontFamily: null,

		extend: {
			margin: ["direction", "hover", "active", "after"],
			padding: ["direction"],
			translate: ["direction", "active"],
			inset: ["direction"],
			borderWidth: ["direction", "active"],
			divideWidth: ["direction"],
			space: ["direction"],
			display: ["direction", "after"],
			width: ["after", "hover_after", "hover"],
			height: ["after"],
			backgroundColor: ["after"],
			transitionProperty: ["after"],
			scale: ["direction"],
			textAlign: ["direction"],
			borderRadius: ["direction"],
			transformOrigin: ["direction"],
			gridAutoFlow: ["direction"],
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		// require("tailwindcss-children"),
		require("tailwindcss-dir")(),
		require("tailwindcss-pseudo-elements"),
		plugin(({ addUtilities }) => {
			const contentUtility = {
				".content-empty": {
					content: "''",
				},
			};

			addUtilities(contentUtility, ["after"]);
		}),
	],
};