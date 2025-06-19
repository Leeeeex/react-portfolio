import "./App.css";
import HeaderJumbotron from "./components/HeaderJumbotron";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <section className="sm:min-h-screen">
                <HeaderJumbotron />
            </section>
            <section className="sm:min-h-screen bg-gray-800">
                <Jumbotron />
            </section>
        </>
    );
}

export default App;
