import React from "react";
import Tabs_Underlined from "../../components/Tabs/Underlined";
import Tabs_InPills from "../../components/Tabs/InPills";
import Tabs_FullWidth from "../../components/Tabs/FullWidth";

export default {
	title: "Elements/Tabs",
};

export const Underlined = () => {
	return <Tabs_Underlined />;
};

export const InPills = () => {
	return <Tabs_InPills />;
};

export const FullWidth = () => {
	return <Tabs_FullWidth />;
};
