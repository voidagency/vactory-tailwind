import React from "react";
import SlideOver_Simple from "../../components/SlideOvers/Simple";
import SlideOver_SimpleLeft from "../../components/SlideOvers/SimpleLeft";
import SlideOver_FullOnMobile from "../../components/SlideOvers/FullOnMobile";

export default {
	title: "Elements/SlideOvers",
};

export const SimpleOnRight = () => {
	return <SlideOver_Simple />;
};

export const SimpleOnLeft = () => {
	return <SlideOver_SimpleLeft />;
};

export const FullWidthOnMobile = () => {
	return <SlideOver_FullOnMobile />;
};