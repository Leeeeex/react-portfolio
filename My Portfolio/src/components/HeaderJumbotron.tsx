import { useState } from "react";
import HeaderImage from "../assets/img/lex_picture.png";
import DownloadCVButton from "./DownloadCV";
import TypewriterText from "./TypewriterEffect";
import ContactModal from "./ContactModal";

const HeaderJumbotron = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex flex-col sm:flex-row items-center sm:min-h-screen w-full gap-4 sm:gap-8 p-6">
            {/* 1st Column: Centered Text */}

            {/* 2nd Column: Centered Image */}
            <div className="flex-1 bg-white content-end justify-items-end">
                <img
                    src={HeaderImage}
                    alt="Centered"
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col sm:items-center sm:w-1/2 gap-4 items-center">
                <p className="text-3xl sm:text-6xl font-semibold">
                    Hey there, I'm{" "}
                    <span className="text-gray-600 font-bold">Lex</span>.
                </p>
                <div className="flex flex-col">
                    <TypewriterText
                        texts={[
                            "IT Support Specialist",
                            "Frontend Web Developer",
                        ]}
                    />
                </div>

                <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-md">
                    <span className="text-sm">
                        I specialize in providing reliable IT support and
                        building responsive, user-focused web applications. With
                        hands-on experience in diagnosing and resolving
                        technical issues, I ensure systems run efficiently and
                        users stay productive.{" "}
                    </span>
                    <div className="flex flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-gray-800 text-white p-2 rounded-md text-sm"
                            type="submit"
                        >
                            Let's connect
                        </button>

                        <ContactModal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                        />
                        <DownloadCVButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderJumbotron;
