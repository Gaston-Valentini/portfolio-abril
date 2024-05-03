import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Skills />
        </div>
    );
}
