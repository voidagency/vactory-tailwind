import React from "react";
import Dropdown_Native from "../../components/Dropdowns/Native"
import Dropdown_Custom from "../../components/Dropdowns/Custom"

export default {
	title: "Primitives/Select",
};

export const Native = () => {
	return <Dropdown_Native />
};

export const Custom = () => {
	return <Dropdown_Custom />	
};
