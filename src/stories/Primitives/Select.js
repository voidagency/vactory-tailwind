import React from "react";
import Dropdown_Native from "../../components/Selects/Native"
import Dropdown_Custom from "../../components/Selects/Custom"

export default {
	title: "Primitives/Select",
};

export const Native = () => {
	return <Dropdown_Native />
};

export const Custom = () => {
	return <Dropdown_Custom />	
};
