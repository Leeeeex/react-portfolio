import React from "react";
import HeaderImage from "../assets/img/lex_picture.png";

const HeaderJumbotron = () => {
    return (
        <div className="flex flex-row min-h-screen w-full">
            {/* 1st Column: Centered Text */}

            {/* 2nd Column: Centered Image */}
            <div className="flex-1 bg-white content-end justify-items-end w-1/2">
                <img src={HeaderImage} alt="Centered" className="" />
            </div>
            <div className="flex items-center w-1/2">
                <h1 className="text-6xl">Hey there, I'm Lex.</h1>
            </div>
        </div>
    );
};

export default HeaderJumbotron;
