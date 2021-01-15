import React from "react";
import BlogSection_AllText from "../../components/BlogSections/AllText";
import BlogSection_CardColumns from "../../components/BlogSections/CardColumns";
import BlogSection_CardWoImageColumns from "../../components/BlogSections/CardWoImageColumns";


export default {
	title: "Sections/Blog Section",
};

export const AllTextList = () => {
	return <BlogSection_AllText />;
};

export const ThreeColumnsCard = () => {
	return <BlogSection_CardColumns />;
};

export const CardsWithoutImage = () => {
	return <BlogSection_CardWoImageColumns />;
};
