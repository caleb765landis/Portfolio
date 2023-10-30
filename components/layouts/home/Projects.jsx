import Link from "next/link"
import FeaturedProject from "../../elements/FeaturedProject.jsx"

// https://api.github.com/users/caleb765landis
// https://api.github.com/users/caleb765landis/repos

export default function Projects() {
    let tecnologies1 = [
        ["", "Technology 1 Pill"], ["", "Technology 2"],
        ["", "Technology 3"],      ["", "Technology 4"],
        ["", "Technology 5"],      ["", "Technology 6 Pill"],
        ["", "Technology 7 Pill"], ["", "Technology 8 Pill"]
    ]
    let tecnologies2 = [
        ["", "Technology 1 Pill"], ["", "Technology 2"],
        ["", "Technology 3"],      ["", "Technology 4"],
        ["", "Technology 5"],      ["", "Technology 6 Pill"],
        ["", "Technology 7 Pill"], ["", "Technology 8 Pill"]
    ]
    let tecnologies3 = [
        ["", "Technology 1 Pill"], ["", "Technology 2"],
        ["", "Technology 3"],      ["", "Technology 4"],
    ]

    return (
        <>
            {/* Featured Projects Section */}
            <div id="projects" className="min-h-screen bg-secondary text-accent md:p-20 p-10 flex flex-wrap flex-col">
                {/* Heading Section */}
                <div className="flex flex-col text-center pb-10 items-center">
                    <div className="text-6xl font-semibold mt-8 p-5"><h1>Featured Projects</h1></div>
                    <div><Link href="../../projects/" className="text-accentSecondary hover:text-accent">See All Projects -&gt;</Link></div>
                </div>

                {/* Project Cards */}
                <div className="flex flex-col items-center">
                    <FeaturedProject title="Project 1 Title" description="This is my first project description." technologies={tecnologies1} link="https://github.com/caleb765landis" imgPath="/images/Profile_Photo.jpg"/>
                    <FeaturedProject title="Project 2 Title" description="This is my second project description." technologies={tecnologies2} link="https://github.com/caleb765landis" imgPath="/images/Profile_Photo.jpg" flip={true} />
                    <FeaturedProject title="Project 3 Title" description="This is my third project description." technologies={tecnologies3} link="https://github.com/caleb765landis" imgPath="/images/Profile_Photo.jpg"/>
                </div>

                <div className="flex flex-col items-end"><Link href="../../projects/" className="text-accentSecondary hover:text-accent">See All Projects -&gt;</Link></div>
            </div>
        </>
    );
}