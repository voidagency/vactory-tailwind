import React from "react";
import Page404_Simple from "../../components/Page404/Simple";
import Page404_Centered from "../../components/Page404/Centered";
import Page404_WithImage from "../../components/Page404/WithImage";
import Page404_OnBackground from "../../components/Page404/OnBackground";


export default {
	title: "Sections/Page 404",
};

export const Simple = () => {
	return <Page404_Simple />;
};

export const Centered = () => {
	return <Page404_Centered />;
};

export const WithImage = () => {
	return <Page404_WithImage />;
};

export const OnBackground = () => {
	return <Page404_OnBackground />;
};
