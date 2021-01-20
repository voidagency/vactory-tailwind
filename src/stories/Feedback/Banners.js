import React from "react";
import Banner_StickySimple from "../../components/Banners/StickySimple";
import Banner_StickyFull from "../../components/Banners/StickyFull";
import Banner_Floating from "../../components/Banners/Floating";

export default {
	title: "Elements/Feedback/Banner",
};

export const StickySimple = () => {
	return <Banner_StickySimple />;
};

export const StickyFull = () => {
	return <Banner_StickyFull />;
};

export const Floating = () => {
	return <Banner_Floating />;
};
