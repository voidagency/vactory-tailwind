import React from "react";
import Alert_WithActions from "../../components/Alerts/WithActions";
import Alert_WithBorder from "../../components/Alerts/WithBorder";
import Alert_WithButton from "../../components/Alerts/WithButton";
import Alert_WithDescription from "../../components/Alerts/WithDescription";

export default {
	title: "Elements/Feedback/Alerts",
};

export const WithActions = () => {
	return <Alert_WithActions />;
};

export const WithBorder = () => {
	return <Alert_WithBorder />;
};

export const WithButton = () => {
	return <Alert_WithButton />;
};

export const WithDescription = () => {
	return <Alert_WithDescription />;
};
