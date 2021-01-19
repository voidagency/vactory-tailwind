import React from "react";

export default () => {
	return (
		<div className="w-full max-w-xs mx-auto">
			<div>
				<label
				htmlFor="location"
					className="block text-sm font-medium text-gray-700"
				>
					Location
				</label>
				<select
					id="location"
					name="location"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
				>
					<option>USA</option>
					<option selected="">Canada</option>
					<option>EU</option>
				</select>
			</div>
		</div>
	);
};
