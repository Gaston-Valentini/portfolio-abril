import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";
import About from "./sections/About/About";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
        </div>
    );
}
