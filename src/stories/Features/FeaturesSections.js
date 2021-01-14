import React from "react";
import FeaturesSection_GridWPictos from "../../components/FeaturesSections/GridWPictos";
import FeaturesSection_GridWPictosOffset from "../../components/FeaturesSections/GridWPictosOffset";
import FeaturesSection_ListOffset from "../../components/FeaturesSections/ListOffset";
import FeaturesSection_Pictos from "../../components/FeaturesSections/Pictos";
import FeaturesSection_SideBySideAlt from "../../components/FeaturesSections/SideBySideAlt";
import FeaturesSection_SimpleColumns from "../../components/FeaturesSections/SimpleColumns";

export default {
	title: "Components/Features List",
};

export const GridWithPictos = () => {
	return (
	<FeaturesSection_GridWPictos />
	);
}

export const GridWithPictosOffset = () => {
	return (
	<FeaturesSection_GridWPictosOffset />
	);
}

export const ListOffset = () => {
	return (
	<FeaturesSection_ListOffset />
	);
}

export const Pictos = () => {
	return (
	<FeaturesSection_Pictos />
	);
}

export const SideBySideAlt = () => {
	return (
	<FeaturesSection_SideBySideAlt />
	);
}

export const SimpleColumns = () => {
	return (
	<FeaturesSection_SimpleColumns />
	);
}
