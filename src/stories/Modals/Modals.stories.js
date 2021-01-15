import React from "react";
import SingleAction_Modal from "../../components/Modals/SingleAction";
import Choice_Modal from "../../components/Modals/Choice";
import GrayFooter_Modal from "../../components/Modals/GrayFooter";

export default {
	title: "Elements/Modals",
};

export const SingleAction = () => {
	return <SingleAction_Modal />;
};

export const ChoicePrompt = () => {
	return <Choice_Modal />;
};

export const WithGrayFooter = () => {
	return <GrayFooter_Modal />;
};
