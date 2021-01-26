import React from "react"

export const CardA = ({
	image, title, tags, url, styleClass, ...props
}) => {
	return (
		<div className="dark:bg-black flex justify-center sm:p-4">
			<div className="max-w-xs mx-auto flex flex-col justify-center rounded-md overflow-hidden">
				<div className="aspect-w-16 aspect-h-9">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="">
					<div className="">
						{tags.map((t, i) => (
							<span
								key={i}
								className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
							>
								{t}
							</span>
						))}
					</div>
					<h3 className="my-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline cursor-default">
						{title}
					</h3>

					<a
						href={url}
						className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Lire Plus
					</a>
				</div>
			</div>
		</div>
	);
}