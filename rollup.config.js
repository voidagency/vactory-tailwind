import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const createConfig = (filename) => ({
	input: `src/components/${filename}/index.js`,
	output: {
		file: `dist/${filename}.js`,
		format: "cjs",
	},
	
	plugins: [
		resolve(),
		babel({
			babelHelpers: "bundled",
			exclude: "node_modules/**",
			presets: ["@babel/env", "@babel/preset-react"],
		}),
		commonjs(),
	],
});

const files = [
	"Alerts",
	"Banners"
]

export default files.map(createConfig);
