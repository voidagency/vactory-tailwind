import React from "react";

const themes = {
	indigo: ["bg-indigo-500", "from-indigo-600", "via-indigo-600", "text-indigo-400", "text-indigo-200"],
	pink: ["bg-pink-500", "from-pink-600", "via-pink-600", "text-pink-400", "text-pink-200"],
	green: ["bg-green-500", "from-green-600", "via-green-600", "text-green-400", "text-green-200"],
	orange: ["bg-yellow-500", "from-yellow-600", "via-yellow-600", "text-yellow-400", "text-yellow-200"],
}

export default ({theme="indigo"}) => {
	return (
		<div className="relative flex-1 rounded-2xl max-w-lg shadow-xl overflow-hidden">
			<img
				className="absolute inset-0 h-full w-full object-cover"
				src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
				alt
			/>
			<div
				className={`absolute inset-0 ${themes[theme][0]}`}
				style={{ mixBlendMode: "multiply" }}
			/>
			<div
				className={`absolute inset-0 bg-gradient-to-t ${themes[theme][1]} ${themes[theme][2]} opacity-90`}
			/>
			<div class="aspect-w-1 aspect-h-1"></div>
			<div className="absolute bottom-10 inset-x-0 px-8">
				<div>
					<img
						className="h-8 sm:h-12"
						referrerPolicy="no-referrer"
						src="https://tailwindui.com/img/logos/workcation.svg?color=white"
						alt="Workcation"
					/>
				</div>
				<blockquote className="mt-5 sm:mt-8">
					<div className="relative text-lg font-medium text-white md:flex-grow">
						<svg
							className={`absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 ${themes[theme][3]}`}
							fill="currentColor"
							viewBox="0 0 32 32"
							aria-hidden="true"
						>
							<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
						</svg>
						<p className="relative text-sm md:text-base line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
							Tincidunt integer commodo, cursus etiam aliquam
							neque, et. Consectetur pretium in volutpat, diam.
							Montes, magna cursus nulla feugiat dignissim id
							lobortis amet.
						</p>
					</div>
					<footer className="mt-4">
						<p
							className={`text-xs md:text-base font-semibold ${themes[theme][4]}`}
						>
							Sarah Williams, CEO at Workcation
						</p>
					</footer>
				</blockquote>
			</div>
		</div>
	);
};
