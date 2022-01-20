import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import image from '@rollup/plugin-image';
import * as fs from "fs";

import pkg from "./package.json";


const listComponentsDir = (dir) => {
	const items = fs.readdirSync(dir);
	let components = [];
	for (const item of items) {
		const itemFilename = `${dir}/${item}`;
		const isDir = fs.lstatSync(itemFilename).isDirectory();
		if (isDir) {
			components.push(item);
		}
	}
	return components;
};

const createConfig = (filename) => ({
	external: ['react', 'react-dom'],
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
		image({
			include: ["**/*.svg"],
		}),
	],
});

const files = listComponentsDir(pkg.source);

export default files.map(createConfig);
