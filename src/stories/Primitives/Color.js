import React from "react";

export default {
	title: "Primitives/Colors",
};

const colors = [
	"gray",
	"red",
	"yellow",
	"green",
	"blue",
	"indigo",
	"purple",
	"pink",
];

const shades = [
	"900",
	"800",
	"700",
	"600",
	"500",
	"400",
	"300",
	"200",
	"100",
	"50",
];

export const Backgrounds = () => {
	return (
		<div className="lg:p-5 grid grid-cols-8 md:grid-cols-10 grid-rows-10 md:grid-rows-8 my-5 gap-2 items-start justify-items-auto grid-flow-col md:grid-flow-row">
			{colors.map((color) =>
				shades.map((shade) => (
					<div
						className="flex flex-col items-start justify-center space-y-1"
						key={`${color}-${shade}`}
					>
						<div
							className={`flex-shrink-0 w-12 hover:w-16 transition h-6 rounded-sm bg-${color}-${shade}`}
						/>
						<code
							className={`text-xs font-mono bg-${color}-50 select-all`}
						>
							.bg-{color}-{shade}
						</code>
					</div>
				))
			)}
		</div>
	);
};

export const TextColors = () => {
	return (
		<>
			<div className="lg:p-5 grid grid-cols-8 md:grid-cols-10 grid-rows-10 md:grid-rows-8 my-5 gap-x-2 gap-y-14 items-start justify-items-auto grid-flow-col md:grid-flow-row">
				{colors.map((color) =>
					shades.map((shade) => (
						<span className={`text-${color}-${shade} text-xs font-mono`}>
							.text-{color}-{shade}
						</span>
					))
				)}
			</div>
		</>
	);
};

export const BorderColors = () => {
	return (
		<>
			<div className="lg:p-5 grid grid-cols-5 grid-rows-8 my-5 gap-x-5 gap-y-14 items-start justify-items-auto">
				{colors.map((color) =>
					[9, 7, 5, 3, 1].map((shade, i) => (
						<div
							className={`text-${color}-${shade} border-2 border-${color}-${shade}00 bg-${color}-50 text-xs text-center py-5`}
						>
							.text-{color}-{shade}00
						</div>
					))
				)}
			</div>
		</>
	);
};
