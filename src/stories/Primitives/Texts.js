import React from "react";

export default {
	title: "Primitives/Texts",
};

export const Texts = () => {
	return (
		<div className="m-5">
			<span>Headings:</span>
			<div className="border rounded-sm p-5 mb-5">
				<h1 className="text-4xl font-medium">
					Heading1: The quick brown fox jumps over the lazy dog.
				</h1>
				<h2 className="text-3xl font-medium">
					Heading2: The quick brown fox jumps over the lazy dog.
				</h2>
				<h3 className="text-2xl font-medium">
					Heading3: The quick brown fox jumps over the lazy dog.
				</h3>
				<h4 className="text-xl font-medium">
					Heading4: The quick brown fox jumps over the lazy dog.
				</h4>
				<h5 className="text-lg font-medium">
					Heading5: The quick brown fox jumps over the lazy dog.
				</h5>
				<h6 className="text-base font-medium">
					Heading6: The quick brown fox jumps over the lazy dog.
				</h6>
			</div>

			<span>Texts styles</span>
			<div className="border rounded-sm p-5 mb-5">
				<p className="font-sans">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p className="font-serif">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p className="font-mono">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>

			<span>Alignement</span>
			<div className="border rounded-sm p-5 mb-5">
				<p className="text-left">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p className="text-center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p className="text-right">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
				<p className="text-justify">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Dolores beatae nam at sed dolorum ratione dolorem nisi velit
					cum
				</p>
			</div>

			<span>Overflow & wrapping</span>
			<div className="border rounded-sm p-5 mb-5">
				<p className="m-2 bg-gray-100 mx-auto max-w-prose whitespace-normal">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores
					beatae nam at sed dolorum ratione dolorem nisi velit cum.{" "}
				</p>
				<p className="m-2 bg-gray-100 mx-auto max-w-prose whitespace-nowrap">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores
					beatae nam at sed dolorum ratione dolorem nisi velit cum.{" "}
				</p>
				<p className="m-2 bg-gray-100 mx-auto max-w-prose break-normal">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores
					beatae nam at sed dolorum ratione dolorem nisi velit cum.{" "}
				</p>
				<p className="m-2 bg-gray-100 mx-auto max-w-prose break-words">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores
					beatae nam at sed dolorum ratione dolorem nisi velit cum.{" "}
				</p>
				<p className="m-2 bg-gray-100 mx-auto max-w-prose break-all">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores
					beatae nam at sed dolorum ratione dolorem nisi velit cum.{" "}
				</p>
			</div>
		</div>
	);
};
