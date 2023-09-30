// import "../App.css";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import TIL from "../components/home/TIL";
import Contact from "../components/home/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <TIL />
            <Contact />
        </>
    );
}
