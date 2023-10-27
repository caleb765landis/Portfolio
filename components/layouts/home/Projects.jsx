import Link from "next/link"
import FeaturedProject from "../../elements/FeaturedProject.jsx"

export default function Projects() {
    let tecnologies1 = []
    let tecnologies2 = []
    let tecnologies3 = []

    return (
        <>
            {/* Featured Projects Section */}
            <div id="projects" className="min-h-screen bg-secondary text-accent md:p-20 p-10 flex flex-wrap flex-col items-center">
                {/* Heading Section */}
                <div className="flex flex-col text-center pb-10">
                    <div className="text-6xl font-semibold mt-8 p-5"><h1>Featured Projects</h1></div>
                    <div><Link href="../../projects/" className="text-accentSecondary hover:text-accent">See All Projects -&gt;</Link></div>
                </div>

                {/* Project Cards */}
                <FeaturedProject title="Project 1 Title" description="This is my first project description." technologies={tecnologies1} link="https://github.com/caleb765landis"/>
                <FeaturedProject title="Project 2 Title" description="This is my second project description." technologies={tecnologies2} link="https://github.com/caleb765landis"/>
                <FeaturedProject title="Project 3 Title" description="This is my third project description." technologies={tecnologies3} link="https://github.com/caleb765landis"/>
            </div>
        </>
    );
}