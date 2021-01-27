import React from "react";
import { CSSTransition } from "react-transition-group";

// NOTE: element does not follow accessibility guidelines!


const options = [
	"Wade Cooper",
	"Arlene Mccoy",
	"Devon Webb",
	"Tom Cook",
	"Tanya Fox",
	"Hellen Schmidt",
	"Caroline Schultz",
	"Mason Heaney",
	"Claudie Smitham",
	"Emil Schaefer",
];


export default (props) => {
	const node = React.useRef(null);
	const highlightedRef = React.useRef(null);
	const selectedRef = React.useRef(null);
	const listbox = React.useRef(null);
	const [isOpen, setIsOpen] = React.useState(true);
	const [selected, setSelected] = React.useState(options[0])
	const [highlightedId, setHighlightedId] = React.useState(null);

	// to close dropdown on click outside
	const handleClickOutside = (e) => {
		if (!node.current.contains(e.target)) setIsOpen(false);
	};

	// attach click outside handler
	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	React.useEffect(() => {
		isOpen && listbox.current.focus();
	}, [isOpen])

	const handleKeys = (event) => {
		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();
				setIsOpen(true);

				const nextElm =
					highlightedRef.current?.nextElementSibling ||
					listbox.current?.firstElementChild;
				setHighlightedId(nextElm.id);
				nextElm?.scrollIntoView?.({ block: "nearest" });
				highlightedRef.current = nextElm;

				break;

			case "ArrowUp":
				event.preventDefault();

				const prevElm =
					highlightedRef.current?.previousElementSibling ||
					listbox.current?.lastElementChild;
				setHighlightedId(prevElm.id);
				prevElm?.scrollIntoView?.({ block: "nearest" });
				highlightedRef.current = prevElm;

				break;

			case "Space":
			case "Enter":
				event.preventDefault();
				setSelected(highlightedRef.current.dataset.value);
				setTimeout(setIsOpen, 100, false);
				break;

			case "Escape":
				event.preventDefault();
				setIsOpen(false);
				break;
		}
	}

	return (
		<div className="w-full max-w-xs mx-auto" ref={node}>
			<div>
				<label
					id="listbox-label"
					className="block text-sm font-medium text-gray-700"
				>
					Assigned to
				</label>
				<div className="mt-1 relative">
					<button
						onClick={(e) => {
							setIsOpen(!isOpen);
						}}
						type="button"
						aria-haspopup="listbox"
						aria-expanded={!!isOpen}
						aria-labelledby="listbox-label"
						className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm ltr:pl-3 rtl:pr-3 ltr:pr-10 rtl:pl-10 py-2 ltr:text-left rtl:text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					>
						<span className="block truncate">{selected}</span>
						<span className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-2 rtl:pl-2 pointer-events-none">
							{/* <!-- Heroicon name: selector --> */}
							<svg
								className="h-5 w-5 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</button>

					<CSSTransition
						in={isOpen}
						timeout={{
							exit: 75,
						}}
						classNames={{
							exit: "transition ease-in duration-100",
							exitActive: "transform opacity-0",
							exitDone: "hidden",
						}}
					>
						<div
							className={`${
								isOpen ? "block" : "hidden"
							} absolute mt-1 w-full rounded-md bg-white shadow-lg`}
						>
							<ul
								ref={listbox}
								onKeyDown={handleKeys}
								tabIndex="0"
								role="listbox"
								aria-labelledby="listbox-label"
								aria-activedescendant={highlightedId}
								onClick={() => setIsOpen(true)}
								className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
							>
								{options.map((option, i) => {
									const id = `listbox-option-${i}`;
									const isSelected = selected === option;
									const isHighlighted = highlightedId === id;
									return (
										<li
											key={i + " " + option}
											onMouseEnter={(e) => {
												setHighlightedId(id);
												highlightedRef.current =
													e.currentTarget;
											}}
											onClick={() => {
												setSelected(option);
												setTimeout(setIsOpen, 250, false);
											}}
											id={id}
											data-value={option}
											role="option"
											className={`${
												isHighlighted ? "text-white bg-indigo-600" : "text-gray-900"
											} cursor-default select-none relative py-2 ltr:pl-3 rtl:pr-3 ltr:pr-9 rtl:pl-9`}
										>
											{/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
											<span
												className={`${isSelected ? "font-semibold" : "font-normal"} block truncate`}
											>
												{option}
											</span>

											{isSelected && (
												<span
													className={`${
														isHighlighted ? "text-white" : "text-indigo-600"
													} absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-4 rtl:pl-4`}
												>
													{/* <!-- Heroicon name: check --> */}
													<svg
														className="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														/>
													</svg>
												</span>
											)}
										</li>
									);
								})}
							</ul>
						</div>
					</CSSTransition>
				</div>
			</div>
		</div>
	);
}