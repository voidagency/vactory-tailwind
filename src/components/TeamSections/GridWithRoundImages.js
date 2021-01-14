import React from "react";
import rawData from "./peopeData.json";
// https://tailwindui.com/components/marketing/sections/team-sections#component-d3acbf5cf2bb7ba7f94bbe6e0b30ed2f

const data = rawData.slice(0, 24);

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
					<ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
						{data.map((member) => (
							<li>
								<div className="space-y-4">
									<img
										className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
										src={member.image}
										alt=""
									/>
									<div className="space-y-2">
										<div className="text-xs font-medium lg:text-sm">
											<h3>{member.name}</h3>
											<p className="text-indigo-600">
												{member.title}
											</p>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}