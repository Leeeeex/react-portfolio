import MyAccordionPage from "./AccordionPage";

const Jumbotron = () => {
    return (
        <div className="p-6">
            <h2 className="flex items-center justify-center gap-2 text-center text-xl mb-6 text-white font-semibold py-2">
                My Work Experience
            </h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="flex flex-col gap-2 mb-8 ms-8">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-200 rounded-full -start-2 mt-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                            className="w-4 h-4 text-white-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center text-lg font-semibold text-white">
                        Systems Engineer
                        <span className="bg-gray-400 text-whte text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                            Present
                        </span>
                    </h3>
                    <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Cognizant Philippines{" "}
                    </time>
                    <span className="text-white text-sm font-light">
                        April 04, 2025
                    </span>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Flowbite Figma v1.3.0
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Released on December 7th, 2021
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in
                        Figma and we keep a parity between the two versions even
                        as we update the project.
                    </p>
                </li>
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Flowbite Library v1.2.2
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Released on December 2nd, 2021
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get started with dozens of web components and
                        interactive elements built on top of Tailwind CSS.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Jumbotron;
