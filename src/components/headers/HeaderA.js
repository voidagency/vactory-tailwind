import React from "react";
import {Icon} from "../Icon";
import clsx from "clsx";

const menu = [
	{
		label: "Nos produits",
	},
	{
		label: "Nous connaître",
	},
	{
		label: "Actualités",
	},
	{
		label: "Recherche",
	},
	{
		label: "Banque digitale",
		attributes: {
			class: "as-btn",
			icon: "lock",
		}
	},
]

const Logo = ({tw, className, ...rest}) => {
	return (
			<a href="#!" className={clsx("block flex-shrink-0", tw)}>
				<img
					src={"https://v3.capital-azur.com/static/capital-azur-logo-006ea1b80d3997cae8e58fc43e997e89.png"}
					height={82}
					width={216/128*82}
					className={""}
				/>
			</a>
	)
}


export const HeaderA = () => {
	const [showMenu, toggleMenu] = React.useState(false);

	return (
		<div className=".header flex justify-between items-center px-4">
			<Logo />

			<button className="md:hidden space-y-1" onClick={() => toggleMenu(!showMenu)}>
				{Array(3).fill().map( i => <span key={i} className="block h-1 bg-black rounded-full w-6" />)}
			</button>
			
			<nav className={`absolute md:static bg-white left-0 top-0 px-4 md:px-0 text-center transition transform-gpu md:transform-none ${!showMenu ? '-translate-x-full' : ''}`}>
				<Logo tw="md:hidden" />
				<hr className="md:hidden my-2 border-blue-500" />

				<ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 divide-gray-300`}>
					{menu.map( (m, i) => (
						<li key={m.label} className={clsx(
							"md:px-6 border-gray-300",
							i > 0 && "border-l",
							i === 0 && "ltr:border-l-4 rtl:border-r-4 border-green pl-4",
						)}>
							<a href="#!" className={clsx(
								"uppercase text-xs font-medium",
								m?.attributes?.class?.includes("as-btn")
									? "text-white bg-blue border border-blue hover:text-blue hover:bg-white rounded-lg px-2 py-3 whitespace-nowrap"
									: "text-gray-900 hover:text-blue",
							)}>
								{m.label}
								{m?.attributes?.icon && <Icon className="ml-2 align-baseline" name={m?.attributes?.icon} size={12} color="inherit" />}
							</a>
						</li>
					) )}
				</ul>
			</nav>
			{/* <Menu /> */}
		</div>
	);
}