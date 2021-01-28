import React from "react";
import SimpleCentered from "../../components/Sliders/Slides/SimpleCentered";
import SplitWithImage from "../../components/Sliders/Slides/SplitWithImage";

export default {
	title: "Elements/Sliders/Slides",
	parameters: {
		backgrounds: {
			default: "grey",
			values: [
				{
					name: "grey",
					value: "#e5e7eb",
				},
			],
		},
	},
};

export const CenteredSimpleSlide = () => <SimpleCentered />;

export const SlideSplitedWithImage = () => <SplitWithImage />;
