import React from "react";
import Alert_WithActions from "../../components/Alerts/WithActions";
import Alert_WithBorder from "../../components/Alerts/WithBorder";
import Alert_WithButton from "../../components/Alerts/WithButton";
import Alert_WithDescription from "../../components/Alerts/WithDescription";
import Alert_StickySimple from "../../components/Alerts/StickySimple";
import Alert_StickyFull from "../../components/Alerts/StickyFull";
import Alert_Floating from "../../components/Alerts/Floating";

export default {
	title: "Elements/Alerts",
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

export const StickySimple = () => {
	return <Alert_StickySimple />;
};

export const StickyFull = () => {
	return <Alert_StickyFull />;
};

export const Floating = () => {
	return <Alert_Floating />;
};

