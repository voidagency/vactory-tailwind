import React from "react";
import { CSSTransition } from "react-transition-group";

// https://tailwindui.com/components/application-ui/overlays/modals#component-31555aec01de5027d6696629eb60f673

export default (props) => {
	const [isOpen, setIsOpen] = React.useState(true);

	React.useEffect(() => {
		const tout = setTimeout(() => {
			setIsOpen(true);
		}, 1000);

		return () => {
			clearTimeout(tout);
		};
	}, [isOpen]);

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<CSSTransition
					in={isOpen}
					timeout={{
						enter: 300,
						exit: 200,
					}}
					classNames={{
						enter: "ease-out duration-300 opacity-0",
						enterActive: "ease-out duration-300 opacity-100",
						enterDone: "",
						exit: "ease-in duration-200",
						exitActive: "opacity-0",
						exitDone: "opacity-0",
					}}
				>
					<div
						className="fixed inset-0 transition-opacity"
						aria-hidden="true"
					>
						<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>
				</CSSTransition>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>
				<CSSTransition
					in={isOpen}
					timeout={{
						enter: 300,
						exit: 200,
					}}
					classNames={{
						enter:
							"ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
						enterActive:
							"ease-out duration-300 opacity-100 translate-y-0 sm:scale-100",
						enterDone: "",
						exit: "ease-in duration-200",
						exitActive:
							"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
					}}
				>
					<div
						className={`${
							isOpen ? "inline-block" : "hidden"
						} align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6`}
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
					>
						<div>
							<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
								{/* <!-- Heroicon name: check --> */}
								<svg
									className="h-6 w-6 text-green-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div className="mt-3 text-center sm:mt-5">
								<h3
									className="text-lg leading-6 font-medium text-gray-900"
									id="modal-headline"
								>
									Payment successful
								</h3>
								<div className="mt-2">
									<p className="text-sm text-gray-500">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Consequatur amet
										labore.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-5 sm:mt-6">
							<button
								onClick={() => setIsOpen(false)}
								type="button"
								className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
							>
								Go back to dashboard
							</button>
						</div>
					</div>
				</CSSTransition>
			</div>
		</div>
	);
};
