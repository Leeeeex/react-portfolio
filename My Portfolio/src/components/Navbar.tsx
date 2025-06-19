import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <div className="flex">
                    <span className="flex items-center text-2xl text-gray-900 font-bold">
                        LEX<span className="text-red-600 mx-2">.</span>LOPEZ
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <button
                        type="button"
                        className="hidden sm:block text-white bg-gray-800 hover:bg-gray-900 focus:ring focus:outline-none focus:ring-white font-medium rounded-lg text-lg px-4 py-2"
                    >
                        Download CV
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 17 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <div
                    className={`${
                        isMobileMenuOpen ? "flex" : "hidden"
                    } flex-col py-2 rounded-full md:flex md:flex-row items-start md:items-center justify-between w-full md:w-auto md:order-1 mt-4 md:mt-0`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 rounded-lg border border-white sm:border-none md:bg-transparent text-gray-900 text-lg font-semibold w-full md:w-auto">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 rounded-sm bg-blue-700 bg-transparent rounded-lg"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-gray-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-gray-300"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-gray-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
