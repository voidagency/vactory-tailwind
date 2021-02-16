import React from "react";
import { Transition } from "@headlessui/react";

export default (props) => {
	const [isOpen, setIsOpen] = React.useState(true);


	return (
	<>
		<div className="flex justify-center items-center h-screen w-screen">
			<button
				onClick={() => setIsOpen(true)}
				type="button"
				className={`inline-flex items-center px-6 py-3 text-base border-b-4 active:border-b-2 active:translate-y-0.5 active:mb-0.5 transform-gpu border-green-900 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
			>
				Open Modal
			</button>
		</div>		
		<div className={`${ isOpen ? "fixed" : "hidden" } z-10 inset-0 overflow-y-auto flex justify-center items-center`}>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<Transition
					show={isOpen}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					className="fixed inset-0 transition-opacity"
					aria-hidden="true"
				>
					<div className="absolute inset-0 bg-gray-500 opacity-75" />
				</Transition>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>
				<Transition
					show={isOpen}
					enter="ease-out duration-300"
					enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enterTo="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 translate-y-0 sm:scale-100"
					leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6`}
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
					<button
						onClick={() => setIsOpen(false)}
						type="button"
						className="absolute top-0 ltr:right-0 rtl:left-0 mt-4 ltr:mr-4 rtl:ml-4 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<span className="sr-only">Close</span>
						<svg
							className="h-6 w-6"
							x-description="Heroicon name: outline/x"
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
				</Transition>
			</div>
		</div>
	</>
	);
};
