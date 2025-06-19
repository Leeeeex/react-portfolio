import React from "react";
import HeaderImage from "../assets/img/lex_picture.png";

const HeaderJumbotron = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:min-h-screen w-full gap-4 sm:gap-8 p-6">
            {/* 1st Column: Centered Text */}

            {/* 2nd Column: Centered Image */}
            <div className="flex-1 bg-white content-end justify-items-end w-1/2">
                <img src={HeaderImage} alt="Centered" className="" />
            </div>
            <div className="flex flex-col sm:items-center sm:w-1/2 gap-4">
                <h1 className="text-3xl sm:text-6xl font-semibold">
                    Hey there, I'm{" "}
                    <span className="text-yellow-900 font-bold">Lex</span>.
                </h1>
                <p className="text-xl">IT Support / Frontend Web Developer</p>
                <span className="text-sm">
                    I specialize in providing reliable IT support and building
                    responsive, user-focused web applications. With hands-on
                    experience in diagnosing and resolving technical issues, I
                    ensure systems run efficiently and users stay productive.{" "}
                </span>
                <div className="flex flex-row gap-4">
                    <button
                        className="bg-gray-600 text-white p-2 rounded-md text-sm"
                        type="submit"
                    >
                        Let's connect
                    </button>
                    <button
                        className="bg-gray-600 text-white p-2 rounded-md text-sm"
                        type="submit"
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderJumbotron;
