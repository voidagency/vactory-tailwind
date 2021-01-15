import React from "react";
import Stats_SimpleInCard from "../../components/StatsSections/SimpleInCard";
import Stats_SimpleOnBg from "../../components/StatsSections/SimpleOnBg";
import Stats_Boxed from "../../components/StatsSections/StatsBoxed";

export default {
	title: "Sections/Stats",
};

export const SimpleInCard = () => {
	return <Stats_SimpleInCard />;
};

export const SimpleOnBackground = () => {
	return <Stats_SimpleOnBg />;
};

export const StatsIsBoxes = () => {
	return <Stats_Boxed />;
};
