import React from "react";
import {Dropdown} from "../../components/miscs/Dropdown"


export default {
	title: "Primitives/Dropdown",
};

export const DropdownExample = () => {

	return (
		<div className="flex items-center justify-center m-5">
			<Dropdown
				label={<span>Options</span>}
				items={[
					<a
						href="#!"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						role="menuitem"
					>
						Account settings
					</a>,
					<a
						href="#!"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						role="menuitem"
					>
						Support
					</a>,
					<a
						href="#!"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						role="menuitem"
					>
						License
					</a>,
					<form method="POST" action="#">
						<button
							type="submit"
							className="block w-full ltr:text-left rtl:text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Sign out
						</button>
					</form>,
				]}
			/>
		</div>
	);
}

