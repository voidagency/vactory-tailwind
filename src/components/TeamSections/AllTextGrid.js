import React from "react";
import rawData from "./peopeData.json";

const data = rawData.slice(-12);

export default (props) => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-8 sm:space-y-12">
					<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
							The People
						</h2>
						<p className="text-xl text-gray-500">
							Risus velit condimentum vitae tincidunt tincidunt.
							Mauris ridiculus fusce amet urna nunc. Ut nisl
							ornare diam in.
						</p>
					</div>
					<ul className="bg-indigo-200 grid grid-cols-2 md:gap-px md:grid-cols-3 mx-auto">
						{data.map((member, i) => (
							<li key={i} className="bg-white">
								<div className="m-5">
									<div className="text-xs font-medium lg:text-sm">
										<h3>{member.name}</h3>
										<hr className="w-14 mx-auto my-4" />
										<p className="text-indigo-600">
											{member.title}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
