import React from "react";
import Slider_Simple from "../../components/Sliders/Simple";
import VideoCarousel from "../../components/Sliders/VideoCarousel";
import CardsSlider from "../../components/Sliders/CardsSlider";


export default {
	title: "Elements/Sliders",
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

export const Simple = () => <Slider_Simple />;

export const _VideoCarousel = () => <VideoCarousel />;

export const _CardsSlider = () => <CardsSlider />;
