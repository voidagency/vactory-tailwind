import React from "react";
import CTA_SplitWithImage from "../../components/CTASections/SplitWithImage";
import CTA_SimpleCentered from "../../components/CTASections/SimpleCentered";
import CTA_SimpleJustified from "../../components/CTASections/SimpleJustified";
import CTA_SimpleCenteredWBackground from "../../components/CTASections/SimpleCenteredWBackground";


export default {
	title: "Components/Call To Action",
};

export const SplitWithImage = () => {
	return <CTA_SplitWithImage />;
}

export const SimpleCentered = () => {
	return <CTA_SimpleCentered />;
};

export const SimpleCenteredWBackground = () => {
	return <CTA_SimpleCenteredWBackground />;
};

export const SimpleJustified = () => {
	return <CTA_SimpleJustified />;
};