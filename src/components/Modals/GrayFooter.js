import React from "react";
import { CSSTransition } from "react-transition-group";

// https://tailwindui.com/components/application-ui/overlays/modals#component-47a5888a08838ad98779d50878d359b3

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
		<div className="fixed z-10 inset-0 overflow-y-auto">
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
						} align-bottom bg-white rounded-lg ltr:text-left rtl:text-right overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
	role="dialog"
	aria-modal="true"
	aria-labelledby="modal-headline`}
					>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
									{/* <!-- Heroicon name: exclamation --> */}
									<svg
										className="h-6 w-6 text-red-600"
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
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ltr:ml-4 sm:rtl:mr-4 sm:ltr:text-left sm:rtl:text-right">
									<h3
										className="text-lg leading-6 font-medium text-gray-900"
										id="modal-headline"
									>
										Deactivate account
									</h3>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Are you sure you want to deactivate
											your account? All of your data will
											be permanently removed. This action
											cannot be undone.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<button
								onClick={() => setIsOpen(false)}
								type="button"
								className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ltr:ml-3 sm:rtl:mr-3 sm:w-auto sm:text-sm"
							>
								Deactivate
							</button>
							<button
								onClick={() => setIsOpen(false)}
								type="button"
								className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ltr:ml-3 sm:rtl:mr-3 sm:w-auto sm:text-sm"
							>
								Cancel
							</button>
						</div>
					</div>
				</CSSTransition>
			</div>
		</div>
	);
};
