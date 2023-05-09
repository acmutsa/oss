/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				goodtimes: ["good-times", "sans-serif"],
				badtimes: ["good-times-bad-times", "sans-serif"],
				inter: ["var(--font-inter)", "sans-serif"],
			},
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
			colors: {
				acm: "#179BD5",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
