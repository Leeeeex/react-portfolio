import { Download } from "lucide-react"; // optional icon

const DownloadCVButton = () => {
    return (
        <a
            href="/Alexander Lopez CV 2025.pdf"
            download
            className="bg-gray-800 text-white p-2 rounded-md text-sm"
        >
            Download CV
        </a>
    );
};

export default DownloadCVButton;
