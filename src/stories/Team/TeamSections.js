import React from "react";
import TeamSections_AllTextGrid from "../../components/TeamSections/AllTextGrid";
import TeamSections_GridWLargeImages from "../../components/TeamSections/GridWLargeImages";
import TeamSections_GridWithRoundImages from "../../components/TeamSections/GridWithRoundImages";
import TeamSections_VerticalImages from "../../components/TeamSections/VerticalImages";
import TeamSections_SingleBlock from "../../components/TeamSections/SingleBlock";

export default {
	title: "Sections/Team",
};

export const AllTextGrid = () => {
	return <TeamSections_AllTextGrid />;
};

export const GridWLargeImages = () => {
	return <TeamSections_GridWLargeImages />;
};

export const GridWithRoundImages = () => {
	return <TeamSections_GridWithRoundImages />;
};

export const VerticalImages = () => {
	return <TeamSections_VerticalImages />;
};

export const SingleBlock = () => {
	return <TeamSections_SingleBlock />;
};

