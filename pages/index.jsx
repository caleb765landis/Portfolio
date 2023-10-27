// import "../App.css";
import Layout from "../components/layouts/RootLayout";
import Hero from "../components/layouts/home/Hero";
import About from "../components/layouts/home/About";
import Projects from "../components/layouts/home/Projects";
import Contact from "../components/layouts/home/Contact";

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
