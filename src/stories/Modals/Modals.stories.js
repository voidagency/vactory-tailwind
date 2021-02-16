import React from "react";
import SingleAction_Modal from "../../components/Modals/SingleAction";
import Choice_Modal from "../../components/Modals/Choice";
import GrayFooter_Modal from "../../components/Modals/GrayFooter";
import NoAction_Modal from "../../components/Modals/NoAction";
import ButtonTrigger_Modal from "../../components/Modals/ButtonTrigger";

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

export const NoAction = () => {
	return <NoAction_Modal />;
};

export const TriggerButton = () => {
	return <ButtonTrigger_Modal />;
};
