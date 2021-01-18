import React from "react";
import Table_Simple from "../../components/Tables/Simple";
import Table_striped from "../../components/Tables/striped";
import Table_Multiline from "../../components/Tables/Multiline";

export default {
	title: "Elements/Tables",
};

export const Simple = () => {
	return <div className="max-w-5xl mx-auto my-4">
		<Table_Simple />
	</div>
};

export const striped = () => {
	return <div className="max-w-5xl mx-auto my-4">
		<Table_striped />
	</div>
};

export const Multiline = () => {
	return <div className="max-w-5xl mx-auto my-4">
		<Table_Multiline />
	</div>
};
