import React from "react";

export default {
	title: "Primitives/Colors",
};

export const Colors = () => {
	const colors = [
		"bg-white",
		"bg-black",
		"bg-white",
		"bg-gray",
		"bg-red",
		"bg-yellow",
		"bg-green",
		"bg-blue",
		"bg-indigo",
		"bg-purple",
		"bg-pink",
	];

	return (
		<div className="flex flex-wrap my-5 space-x-5 justify-center">
			{colors.map((color) => {
				return (
					<div
						className={`flex-shrink-0 shadow-xl w-24 h-24 rounded-full ${color} flex items-center justify-center font-xs`}
					>
						{color}
					</div>
				);
			})}
		</div>
	);
};
