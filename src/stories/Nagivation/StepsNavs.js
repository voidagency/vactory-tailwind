import React from "react";
import Steps_Simple from "../../components/StepsNavs/Simple";
import Steps_Panels from "../../components/StepsNavs/Panels";
import Steps_PanelsUnderlined from "../../components/StepsNavs/PanelsUnderlined";
import Steps_Bullets from "../../components/StepsNavs/Bullets";
import Steps_Circles from "../../components/StepsNavs/Circles";

export default {
	title: "Sections/Navigation/Steps",
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto my-8">
				<Story />
			</div>
		)
	],
};

export const Simple = () => {
	return <Steps_Simple />;
};

export const Panels = () => {
	return <Steps_Panels />;
};

export const PanelsUnderlined = () => {
	return <Steps_PanelsUnderlined />;
};

export const Bullets = () => {
	return <Steps_Bullets />;
};

export const Circles = () => {
	return <Steps_Circles />;
};
