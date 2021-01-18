import React from "react";
import CardsWithSharedBorders from "../../components/Grid/CardsWithSharedBorders";

export default {
	title: "Elements/Grids",
};

export const SharedBorders = () => {
	return (
		<div className="max-w-5xl mx-auto my-4">
			<CardsWithSharedBorders />
		</div>
	);
};
