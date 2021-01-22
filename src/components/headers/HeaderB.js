import React from "react";
import { Transition } from "@headlessui/react";
import { Icon } from "vactory-ui";

export const HeaderB = () => {
	const upperNav = [
		{
			name: "Rechercher",
			icon: "search",
		},
		{
			name: "Nous Contacter",
			icon: "phone",
		},
		{
			name: "L'app mobile",
			icon: "phone2",
		},
		{
			name: "Suivez-nous",
			icon: "facebook",
		},
	];

	const lowerNav = [
		"Ma Banque",
		"Notre Offre",
		"Nos Crédits",
		"Informations Utiles",
		"Blog",
	];

	const [showSearch, setShowSearch] = React.useState(false);
	const [showMenu, setShowMenu] = React.useState(false);

	React.useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => document.body.classList.remove("overflow-hidden");
	}, [])

	return (
		<div>
			<header
				className={`${
					showSearch ? "" : "-translate-y-14"
				} transform transition duration-300 shadow-md`}
			>
				{/* search */}
				<div className="bg-black text-gray p-3">
					<div className="max-w-5xl mx-auto relative">
						<input
							type="text"
							className="appearance-none bg-black text-white placeholder-white placeholder-opacity-100 text-xs w-full border-0 border-b border-gray pb-1 "
							placeholder="Faite votre recherche ici"
						/>
						<div className="absolute ltr:right-3 rtl:left-3 inset-y-0 flex items-center mb-0.5 space-x-1.5">
							<button
								type="submit"
								className="border border-gray hover:text-white hover:border-white rounded-full px-1.5 py-0.5 leading-none text-lg "
							>
								Go !
							</button>
							<button
								onClick={() => setShowSearch(false)}
								className="border border-gray hover:text-white hover:border-white rounded-full w-6 h-6 py-0.25 leading-none font-mono font-thin inline-flex justify-center items-center"
							>
								x
							</button>
						</div>
					</div>
				</div>
				{/* mobile header */}
				<div className="flex justify-between p-3 md:hidden">
					<button
						onClick={() => {
							setShowMenu(!showMenu);
						}}
						className="px-3"
					>
						<svg
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={3}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
					<a href="#!">
						<img
							className=""
							src="https://www.lbankalik.ma/sites/lbankalik/files/logo.png"
							alt="lbankalik"
							width="80"
							height="46"
						/>
					</a>
					<button
						onClick={() => setShowSearch(!showSearch)}
						className="px-3"
					>
						<svg
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={3}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
				{/* desktop header */}
				<div className="max-w-5xl mx-auto items-center hidden md:flex">
					<a href="#!" className="flex-shrink-0 ltr:mr-12 rtl:ml-12">
						<img
							className=""
							src="https://www.lbankalik.ma/sites/lbankalik/files/logo.png"
							alt="lbankalik"
							width="130"
							height="75"
						/>
					</a>
					<div className="flex-grow">
						<nav className="border-b border-gray-300">
							<ul className="flex items-center justify-end py-2 divide-x-2 divide-gray-600 rtl:divide-x-reverse divide-x text-gray-400 text-xs">
								{upperNav.map((item, i) => (
									<li className="px-4" key={i}>
										<a
											onClick={
												i === 0
													? () =>
															setShowSearch(
																!showSearch
															)
													: null
											}
											className="hover:text-awb-orange"
											href="#!"
										>
											<Icon
												name={item.icon}
												size={14}
												color="inherit"
												className="ltr:mr-2 rtl:ml-2"
											/>
											{item.name}
										</a>
									</li>
								))}
								<li className="ltr:pl-4 rtl:pr-4">
									<a href="#!">
										<img
											className=""
											src="https://www.lbankalik.ma/sites/all/themes/bankalik/assets/images/awb-groupe-logo.png"
											alt="Attijari"
											width={119}
											height={35}
										/>
									</a>
								</li>
							</ul>
						</nav>
						<nav>
							<ul className="flex justify-between py-5">
								{lowerNav.map((item) => (
									<li className="">
										<a
											className="font-medium hover:text-awb-orange after:block after:content-empty after:h-1 after:bg-awb-yellow after:transition after:w-0 hover:after:w-full "
											href="#!"
										>
											{item}
										</a>
									</li>
								))}
								<li className="">
									<a
										className="font-medium p-2 border bg-white border-awb-orange text-awb-orange rounded-md hover:bg-awb-orange hover:text-white hover:shadow-lg whitespace-nowrap "
										href="#!"
									>
										Ouvrir mon compte
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			{/* mobile sidebar */}
			<div className="absolute inset-y-0 ltr:right-0 rtl:left-0 md:ltr:pl-5 md:rtl:pr-5 max-w-full flex">
				<Transition
					show={showMenu}
					enter="transform transition ease-in-out duration-500 sm:duration-700"
					enterFrom="ltr:-translate-x-full rtl:translate-x-full"
					enterTo="translate-x-0"
					leave="transform transition ease-in-out duration-500 sm:duration-700"
					leaveFrom="translate-x-0"
					leaveTo="ltr:-translate-x-full rtl:translate-x-full"
					className="w-screen md:max-w-md"
				>
					<div className="min-h-full flex flex-col py-6 bg-awb-orange shadow-xl md:overflow-y-scroll">
						<div className="px-4 sm:px-6">
							<div className="flex items-start justify-between">
								<a href="#!" className="block">
									<img
										className=""
										src="https://www.lbankalik.ma/sites/all/themes/bankalik/img/common/attijari-logo.png"
										alt="Attijari"
										width={119}
										height={35}
									/>
								</a>
								<div className="ltr:ml-3 rtl:mr-3 h-7 flex items-center">
									<button
										onClick={() => setShowMenu(false)}
										className="rounded-md text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										<span className="sr-only">
											Close panel
										</span>
										{/* Heroicon name: x */}
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="mt-6 relative flex-1 px-4 sm:px-6">
							{/* Replace with your content */}
							<div className="absolute inset-0 px-4 sm:px-6">
								<div
									className="h-full border-2 border-dashed border-gray-200 text-gray-200 font-mono flex items-center justify-center"
									aria-hidden="true"
								>
									Menu Links Go Here..
								</div>
							</div>
							{/* /End replace */}
						</div>
					</div>
				</Transition>
			</div>
		</div>
	);
};
