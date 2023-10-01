// import "../App.css";
import Layout from "../components/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

export default function Home() {
    return (
        <>
        {/* <Layout> */}
            <Hero />
            <About />
            <Projects />
            <Contact />
        {/* </Layout> */}
        </>
    );
}
