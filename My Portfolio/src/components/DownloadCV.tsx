import { Download } from "lucide-react"; // optional icon

const DownloadCVButton = () => {
    return (
        <a
            href="/Alexander Lopez CV 2025.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition"
        >
            <Download size={18} />
            Download CV
        </a>
    );
};

export default DownloadCVButton;
