import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from '@rollup/plugin-json';

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
		json(),
	],
});

// TODO: transverse the components folder automatically
const files = [
	"Alerts",
	"Banners",
	"BlogSections",
	"BreadcrumbNavs",
	"Cards",
	"CTASections",
	"FAQsSections",
	"FeaturesSections",
];

export default files.map(createConfig);
